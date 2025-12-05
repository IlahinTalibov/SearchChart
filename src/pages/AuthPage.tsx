import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { RegisterFormStep2 } from "../components/RegisterFormStep2";
import type { FormErrors, LoginFormData, RegisterFormData, RegisterStep2FormData } from "../types";
import { validateLoginForm, validateRegisterForm, validateRegisterStep2Form } from "../utils/validation";


// Main AuthPage Component
export default function AuthPage() {
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [registerStep, setRegisterStep] = useState(1);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const [loginData, setLoginData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState<FormErrors>({});

  const [registerData, setRegisterData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    company: '',
    industry: ''
  });
  const [registerErrors, setRegisterErrors] = useState<FormErrors>({});

  const [registerStep2Data, setRegisterStep2Data] = useState<RegisterStep2FormData>({
    jobTitle: '',
    email: '',
    password: ''
  });
  const [registerStep2Errors, setRegisterStep2Errors] = useState<FormErrors>({});

  const handleLoginFieldChange = (field: keyof LoginFormData, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
    if (loginErrors[field]) {
      setLoginErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleRegisterFieldChange = (field: keyof RegisterFormData, value: string) => {
    setRegisterData((prev) => ({ ...prev, [field]: value }));
    if (registerErrors[field]) {
      setRegisterErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleRegisterStep2FieldChange = (field: keyof RegisterStep2FormData, value: string) => {
    setRegisterStep2Data((prev) => ({ ...prev, [field]: value }));
    if (registerStep2Errors[field]) {
      setRegisterStep2Errors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleLoginSubmit = () => {
    const errors = validateLoginForm(loginData);
    setLoginErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Login successful:', loginData);
      alert('Login successful! Check console for data.');
    }
  };

  const handleRegisterSubmit = () => {
    const errors = validateRegisterForm(registerData);
    setRegisterErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSlideDirection('left');
      setIsFlipping(true);
      setTimeout(() => {
        setRegisterStep(2);
        setIsFlipping(false);
      }, 500);
    }
  };

  const handleRegisterStep2Submit = () => {
    const errors = validateRegisterStep2Form(registerStep2Data);
    setRegisterStep2Errors(errors);

    if (Object.keys(errors).length === 0) {
      const fullRegistrationData = {
        ...registerData,
        ...registerStep2Data
      };
      console.log('Registration successful:', fullRegistrationData);
      alert('Registration successful! Check console for data.');
    }
  };

  const toggleForm = () => {
    setSlideDirection('right');
    setIsFlipping(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setRegisterStep(1);
      setIsFlipping(false);
      setLoginErrors({});
      setRegisterErrors({});
      setRegisterStep2Errors({});
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />
      <Navbar isLogin={isLogin} />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 px-4 hidden lg:block ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ textAlign: 'left' }}>
            Welcome to our
            <br />
            Searchart system!
          </h1>
          <p className={`text-base max-w-md leading-relaxed font-bold ${theme === 'light' ? 'text-white-1200' : 'text-gray-300'}`} style={{ textAlign: 'justify' }}>
            {isLogin
              ? "Welcome back! Your data journey continues. Sign in to access your personalized insights and make informed decisions effortlessly."
              : "Join our data-driven community! Sign up today to explore a world of valuable insights, enabling you to navigate trends and shape your strategies with confidence."}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end px-4">
          <div className="relative w-full">
            <div
              className={`transition-all duration-500 ease-in-out ${
                isFlipping 
                  ? slideDirection === 'left' 
                    ? '-translate-x-full opacity-0' 
                    : 'translate-x-full opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
            >
              {isLogin ? (
                <LoginForm
                  formData={loginData}
                  errors={loginErrors}
                  showPassword={showPassword}
                  onFieldChange={handleLoginFieldChange}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  onSubmit={handleLoginSubmit}
                  onSwitchToRegister={toggleForm}
                />
              ) : registerStep === 1 ? (
                <RegisterForm
                  formData={registerData}
                  errors={registerErrors}
                  onFieldChange={handleRegisterFieldChange}
                  onSubmit={handleRegisterSubmit}
                  onSwitchToLogin={toggleForm}
                />
              ) : (
                <RegisterFormStep2
                  formData={registerStep2Data}
                  errors={registerStep2Errors}
                  showPassword={showPassword}
                  onFieldChange={handleRegisterStep2FieldChange}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  onSubmit={handleRegisterStep2Submit}
                  onSwitchToLogin={toggleForm}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}