# 🚗 Capstone X10 Client 실행 가이드

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

### ✅ 실행 방법

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
#### 5. Android 기기 연결 후 앱 실행
```bash
npm run android
```

---
### 🤖 AI 서버 연결 방법
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
