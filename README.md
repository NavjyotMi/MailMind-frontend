
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
![Screenshot](https://i.imgur.com/mYR84Od.png)

![Image](https://i.imgur.com/NJKZyNH.png)

![ScreenShot](https://i.imgur.com/RrgsG78.png)

![ScreenShot](https://i.imgur.com/TFUfnZO.png)


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
