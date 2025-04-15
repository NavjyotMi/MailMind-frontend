
# 🧠 MailMind – Smart Inbox, Zero Noise

MailMind frontend is the intuitive, real-time user interface that displays your categorized Gmail inbox, seamlessly interacting with the backend to bring a clean, organized experience for your emails. It integrates effortlessly with the backend and ensures users can manage, categorize, and summarize their emails with ease.

🚨 Why MailMind Exists

Inboxes today are overloaded with spam, promotions, and irrelevant content:

- Users struggle to manually categorize incoming emails.
- Multiple Gmail accounts create a daunting task of keeping everything organized.
- Users miss important messages due to overwhelming noise in their inboxes.
MailMind Frontend simplifies the entire process by providing:
- Real-time updates on categorized emails.
- Seamless interaction with the backend through WebSockets and background jobs
- Minimal user interaction to categorize emails automatically.

## 🧠 What MailMind Does
- Connect to multiple Gmail accounts: Easily link multiple Gmail accounts.
-  Real-time updates: Automatically fetch and display categorized emails as soon as they’re processed by the backend.
- Email Summarization: Use AI to generate a brief summary of each email.
- Categorized Emails: Display categorized emails (Promotions, Social, Personal, etc.) in a clean interface.
- Seamless Inbox Management: Organize emails by category with minimal manual intervention.
- WebSocket Sync: Updates the inbox in real-time as categorization happens in the backend.

## 💻 Key Features
- Real-Time Inbox
- Email Summarization
- Multiple Accounts Support
- AI-Powered Categorization

## ScreenShot
![Screenshot](https://i.imgur.com/gX4rhsA.png)

![Image](https://private-user-images.githubusercontent.com/82361434/433629547-b61a7799-d6be-4638-ae1d-d82ff6f76571.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2ODM3ODgsIm5iZiI6MTc0NDY4MzQ4OCwicGF0aCI6Ii84MjM2MTQzNC80MzM2Mjk1NDctYjYxYTc3OTktZDZiZS00NjM4LWFlMWQtZDgyZmY2Zjc2NTcxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE1VDAyMTgwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc0YjM2YjNiOTJmMTQzNTczOWM1ZDY5NGQ1MjJmMTM1ZTM2YTg5NDI3ZGU3M2EzOWU0MDc4MDNhYzE5NzhlOGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.jUctky67-jVaZbHJc8BphoxYCwA2V5tQgqBP5PQK348)

![ScreenShot](https://private-user-images.githubusercontent.com/82361434/433630161-c024e069-2bbd-4a0b-af15-060456d037ea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2ODM5NTgsIm5iZiI6MTc0NDY4MzY1OCwicGF0aCI6Ii84MjM2MTQzNC80MzM2MzAxNjEtYzAyNGUwNjktMmJiZC00YTBiLWFmMTUtMDYwNDU2ZDAzN2VhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE1VDAyMjA1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU0YTM3NTJjYTgzYmRhZjA2MTMxY2Y5ZDRhNmMyMTY2MjViNTNjMDlhZjQ1ZGRiMzdmZmM4YWE2NDI2M2E4ZDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.evmx2jON4GvOBUyn3rksQXl-xMssmxqMQb9CsWKgrlg)

![ScreenShot](https://private-user-images.githubusercontent.com/82361434/433630413-055e81d7-cf98-4133-ae8a-ffa2fb164b14.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2ODQwMjAsIm5iZiI6MTc0NDY4MzcyMCwicGF0aCI6Ii84MjM2MTQzNC80MzM2MzA0MTMtMDU1ZTgxZDctY2Y5OC00MTMzLWFlOGEtZmZhMmZiMTY0YjE0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE1VDAyMjIwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThlNjQ5ZGYxN2I4NTc3ODBiNmU1OTdlNmM0Y2M0M2E2ODdlYjZmMjQ4NzM3OGE0NWUyNjk2MGFlZjI3N2UyMTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.KKLVGVujfNsfvrcwYQTwv39lbdExNIutrlWleGcWodg)

![Screenshot](https://private-user-images.githubusercontent.com/82361434/433636619-3817d695-ac8f-4e21-b2d7-b26f6cf6043b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2ODU4MTEsIm5iZiI6MTc0NDY4NTUxMSwicGF0aCI6Ii84MjM2MTQzNC80MzM2MzY2MTktMzgxN2Q2OTUtYWM4Zi00ZTIxLWIyZDctYjI2ZjZjZjYwNDNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE1VDAyNTE1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwMWUyY2MzNTExMTY5NzJiZmEwYjMzYmEwMjdmMjUyODQyMzc5ODMwNzFhNWZkMDdlMTZjMzY2NWIxNjFmYjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.VK9LCg_im8D2zxuTS5sq-B1YvLnfU49C5AcFPy8RfWI)


### Video Demo
[View Demo](https://youtu.be/4PCUY1yUOOg)

## 🔧 Technical Highlights

- WebSocket Integration: Ensures real-time syncing of categorized emails with the backend.
- Async Fetching: Email fetching from Gmail is performed asynchronously, ensuring the UI remains responsive.
- Email Summarization: AI-based summaries to save users time.


##  What’s Next
- Add multiple Email Providers
- Delete and Send support
- Unified inbox 

## Getting Started (Dev)
git clone https://github.com/your-username/mailmind-frontend.git

cd mailmind-backend

npm install

Run the Application Locally

npm run dev

## 💡 System Architecture
The frontend interacts with the backend in a seamless way to provide a real-time email management experience. The flow is as follows:

- User Authentication:
The frontend facilitates OAuth2 authentication for Gmail accounts, allowing users to connect their accounts securely.

- Fetching Emails:
Emails are fetched from the backend asynchronously, with WebSockets providing real-time updates to the inbox.

- Categorization and Summarization:
Emails are categorized using Gemini AI and then sent to the frontend for display. The user can click to summarize emails with AI.

- Round-Robin Account Fetching:
The frontend lets users manage multiple Gmail accounts, with the backend fetching and categorizing emails from each account in a round-robin manner.

### 🔄 Real-Time Sync with WebSockets
The frontend stays synced with the backend through WebSockets. As soon as an email is categorized, the frontend immediately reflects that change, ensuring a zero-lag experience.

### ⚡ Technologies Used
- React: Frontend framework for building the user interface.

- Redux: State management to handle email data and user authentication.

- WebSockets: Real-time communication between frontend and backend.

- Axios: HTTP client for API calls (if required for non-real-time features)
