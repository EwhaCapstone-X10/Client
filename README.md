# 🚗 Capstone X10 Client 실행 가이드

### Source Code 설명

이 프로젝트는 React Native (Expo) 기반의 모바일 클라이언트로, 음성 기반 AI와 연동하여 개인맞춤 대화형 서비스 및 졸음 감지 서비스를 제공합니다.
프론트엔드 코드는 Client/ 폴더에, BE, AI 코드는 별도 레포지토리에 위치합니다.

### 설치 필수 항목

아래 버전에서 개발되었습니다. 버전이 달라도 실행은 가능하지만, 동일한 환경에서의 실행을 권장합니다.

| 항목             | 권장 버전          |
|------------------|--------------------|
| VSCode           | v1.99 (2025.05)    |
| Node.js          | v22.14.0           |
| Java             | v19.0.1            |
| Android Studio   | Meerkat (2024.03)  |
| Git              | 최신 버전          |

---

### 실행 방법

#### 1. 레포지토리 클론
```bash
git clone https://github.com/EwhaCapstone-X10/Client.git
```

#### 2. VSCode에서 폴더 열기
#### 3. 의존성 설치
```bash
npm install
```
#### ❗ 오류 발생 시: 아래 코드 입력 후 다시 의존성 설치
```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
#### 4. Expo 및 Babel 타입 정의 설치
```bash
npm install expo
npm install --save-dev @types/babel__core
```
#### 5. Android 기기를 USB를 이용해 연결/안드로이드 스튜디오를 이용한 에뮬레이터에 연결하여 터미널에 다음을 입력해 앱 실행
```bash
npm run android
```

---
### AI 서버 연결 방법 (로컬)
*배포한 서버 이용 시, 따로 설정할 부분은 없습니다.
#### 1. VSCode에서 두 개의 창 열기
- Client 폴더
- AI 서버 폴더

#### 2. AI 서버 실행
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
#### 3. CMD에서 IPv4 주소 확인
```bash
ipconfig
```
IPv4 주소 예시: 192.168.219.103

#### 4. React Native 코드에서 AI 서버 주소 수정
수정 파일 경로: Client/app/voiceChat.tsx

31번째 줄 수정:

```tsx
const AIEndPoint = "http://192.168.219.103:8000/predict"
```
위 주소는 예시이며, 자신의 IPv4 주소로 변경해야 합니다.

#### 5. 앱 실행
```bash
npm run android
```

#### 6. AI 서버 실행

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---
### How to Test
테스트 계정이 생성되어 있으므로 앱을 실행한 후 새로 시작하기 버튼을 눌러 개인 정보를 입력합니다.

개인 맞춤형 대화, 졸음 감지, 대화요약, 스트레칭 영상 확인 등 여러 기능들을 테스트 할 수 있습니다.

---
### 사용된 오픈 소스
| 라이브러리 / API                                   | 설명                                      |
| --------------------------------------------- | --------------------------------------- |
| **React Native (Expo)**                       | 모바일 앱 개발 프레임워크                  |
| **axios**                                     | HTTP 통신 처리 라이브러리                        |
| **zustand**                                   | 상태 관리 라이브러리                             |
| **@react-native-async-storage/async-storage** | 로컬 데이터 저장                               |
| **@react-native-picker/picker**               | 날짜 드롭다운/셀렉터 컴포넌트                           |
| **expo-av / expo-audio / expo-speech**        | 오디오 녹음/재생 및 텍스트 음성 출력(TTS) 기능           |
| **react-native-youtube-iframe**               | 유튜브 영상 임베딩을 위한 컴포넌트                     |
| **react-native-dotenv**                       | `.env` 파일 기반 환경 변수 사용                   |
| **GPT-4o (OpenAI API)**                       | 사용자의 음성 명령에 대한 자연어 처리 및 AI 응답 생성        |
| **Whisper API (OpenAI)**                      | 사용자의 음성 입력을 텍스트로 변환하는 STT 기능 구현         |
| **TypeScript**                                | 정적 타입 언어 지원으로 안정적인 코드 작성                |
| **EAS (Expo Application Services)**           | 앱 빌드 및 배포 자동화 도구                        |
