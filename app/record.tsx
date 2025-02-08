import { Audio } from "expo-av";
import { useEffect, useState, useRef } from "react";
import { Button, View, Text } from "react-native";
import * as FileSystem from "expo-file-system"; // Import FileSystem
import { OPENAI_API_KEY } from "@env";

const AudioRecorder = () => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [transcribedText, setTranscribedText] = useState<string>("");
  const [isRecording, setIsRecording] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const API_KEY = OPENAI_API_KEY;
  const whisperEndpoint = "https://api.openai.com/v1/audio/transcriptions";

  const silenceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) {
        alert("녹음 권한이 필요합니다.");
        return;
      }

      setIsRecording(true);
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (error) {
      console.error("녹음 실패:", error);
      setErrorMessage("녹음 시작 중 문제가 발생했습니다.");
    }
  };

  const stopRecording = async () => {
    try {
      if (recording) {
        setIsRecording(false);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log("녹음 완료:", uri);
        setRecording(null);

        await transcribeAudio(uri);
      }
    } catch (error) {
      console.error("녹음 종료 실패:", error);
      setErrorMessage("녹음 중지 중 문제가 발생했습니다.");
    }
  };

  const transcribeAudio = async (uri: string) => {
    try {
      const response = await FileSystem.uploadAsync(whisperEndpoint, uri, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "multipart/form-data",
        },
        httpMethod: "POST",
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        fieldName: "file",
        mimeType: "audio/mpeg",
        parameters: {
          model: "whisper-1",
        },
      });

      const parsedResponse = JSON.parse(response.body);
      const transcribedText = parsedResponse.text;

      console.log("Transcribed Text:", transcribedText);

      setTranscribedText(transcribedText);
    } catch (error) {
      console.error("Whisper API Error:", error);
      setErrorMessage("오디오 전송 중 문제가 발생했습니다.");
    }
  };

  useEffect(() => {
    if (!recording) return;

    const intervalID = setInterval(async () => {
      const status = await recording.getStatusAsync();
      console.log("Metering level:", status.metering); // Check the metering level

      // 소리가 -120보다 작으면 타이머 시작
      if (status.metering < -90) {
        if (!silenceTimeoutRef.current) {
          silenceTimeoutRef.current = setTimeout(() => {
            stopRecording();
          }, 2000); // 2초동안 말 안하면 녹음 종료
        }
      } else {
        // 소리가 감지되면 타이머 리셋
        if (silenceTimeoutRef.current) {
          clearTimeout(silenceTimeoutRef.current);
          silenceTimeoutRef.current = null;
        }
      }
    }, 500);

    // Cleanup the interval and timeout when recording stops
    return () => {
      clearInterval(intervalID);
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
      }
    };
  }, [recording]);

  return (
    <View>
      <Button
        onPress={startRecording}
        title={isRecording ? "녹음 중..." : "녹음 시작"}
      />

      {transcribedText ? <Text>{transcribedText}</Text> : null}
      {errorMessage ? (
        <Text style={{ color: "red" }}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default AudioRecorder;
