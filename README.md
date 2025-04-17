## 설치 필수 (버전은 달라도 상관없지만 아래 버전으로 개발함)
1. VSCode v1.99 (2025.05)
2. Node v22.14.0
3. Java v19.0.1
4. Android Studio meerkat버전 (2024.03)

## 실행 방법
1. git clone
2. VSCode에서 폴더 열기
3. npm i로 dependencies 설치
-> 설치 불가 시 Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass 입력 후 다시 실행 
4. npm i expo
   npm i --save-dev @types/babel__core 
5. 휴대폰 연결 후 npm run android

## AI 서버 연결 방법 
1. VSCode 창 2개 열어놓고 각각 프론트, AI 폴더 열기 
2. 파이썬창 uvicorn main:app --reload --host 0.0.0.0 --port 8000 
3. cmd창 ipconfig -> ipv4 주소 복사 
4. 리액트 네이티브 코드 수정

   Client > app > voiceChat 31줄

   const AIEndPoint = "http://192.168.219.103:8000/predict"

5. 리액트 네이티브창 npm run android
