import type { FormErrors, LoginFormData, RegisterFormData, RegisterStep2FormData } from "../types";

// Login Form Validation
export const validateLoginForm = (data: LoginFormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }
  
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  
  return errors;
};

// Register Form (Step 1) Validation
export const validateRegisterForm = (data: RegisterFormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.firstName) errors.firstName = "First name is required";
  if (!data.lastName) errors.lastName = "Last name is required";
  if (!data.gender) errors.gender = "Gender is required";
  if (!data.phoneNumber || data.phoneNumber === '+994') errors.phoneNumber = "Phone number is required";
  if (!data.company) errors.company = "Company is required";
  if (!data.industry) errors.industry = "Industry is required";
  
  return errors;
};

// Register Form (Step 2) Validation
export const validateRegisterStep2Form = (data: RegisterStep2FormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.jobTitle) errors.jobTitle = "Job title is required";
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  
  return errors;
};