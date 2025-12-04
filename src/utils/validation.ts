import type { FormErrors, LoginFormData, RegisterFormData } from "../types";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateLoginForm = (formData: LoginFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};

export const validateRegisterForm = (formData: RegisterFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }

  if (!formData.gender) {
    errors.gender = 'Gender is required';
  }

  if (!formData.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!/^\+994\d{9}$/.test(formData.phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid phone number';
  }

  if (!formData.company.trim()) {
    errors.company = 'Company is required';
  }

  if (!formData.industry.trim()) {
    errors.industry = 'Industry is required';
  }

  return errors;
};
