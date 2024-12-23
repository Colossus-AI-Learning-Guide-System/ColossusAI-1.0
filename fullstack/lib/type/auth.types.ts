export interface LoginRequest {
  emailOrUsername: string; 
  password: string;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;  
}

export interface ResetPasswordRequest {
  email: string;
}

export interface VerifyResetPinRequest {
  email: string;
  pin: string;
  newPassword: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    username: string;
    email: string;
  };
}

// Add this interface to your existing auth.types.ts
export interface GoogleAuthRequest {
    code: string;
  }
  