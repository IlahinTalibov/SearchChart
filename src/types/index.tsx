export interface FormErrors {
  [key: string]: string;
}

// Login Form Types
export interface LoginFormData {
  email: string;
  password: string;
}

// Register Form Types (Step 1)
export interface RegisterFormData {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  company: string;
  industry: string;
}

// Register Form Types (Step 2)
export interface RegisterStep2FormData {
  jobTitle: string;
  email: string;
  password: string;
}