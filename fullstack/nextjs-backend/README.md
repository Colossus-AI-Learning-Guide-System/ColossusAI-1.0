# Next.js Backend Authentication

This project implements a backend for user authentication using Next.js and NextAuth.js, allowing users to log in with Google and GitHub accounts. The backend is connected to a MongoDB database for storing user data and session information.

## Project Structure

```
nextjs-backend
├── pages
│   └── api
│       ├── auth
│       │   └── login.ts        # Login logic for Google and GitHub authentication
│       └── other-endpoints.ts  # Other API routes
├── lib
│   └── db.ts                   # MongoDB connection setup
├── .env                         # Environment variables
├── next.config.js              # Next.js configuration
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd nextjs-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following lines:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   NEXTAUTH_SECRET=<your_nextauth_secret>
   ```

4. **MongoDB Connection**
   The `lib/db.ts` file establishes a connection to the MongoDB database using the connection string from the `.env` file.

5. **Authentication Logic**
   The `pages/api/auth/login.ts` file contains the logic for handling login requests and managing user sessions with NextAuth.js.

## Usage

- Start the development server:
  ```bash
  npm run dev
  ```

- Access the login endpoint at:
  ```
  POST /api/auth/login
  ```

## Extending Functionality

To add signup functionality or additional endpoints, create new files in the `pages/api/auth` directory (e.g., `signup.ts`) and implement the necessary logic. Additional API routes can be added in the `pages/api` directory as needed.

## Security Considerations

- Ensure that the `.env` file is included in your `.gitignore` to prevent sensitive information from being committed to version control.
- Use secure practices for managing secrets and sensitive data throughout the application.