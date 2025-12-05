import { useState } from "react";
import { Search, Eye, EyeOff } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

// Types
interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  company: string;
  industry: string;
}

interface RegisterStep2FormData {
  jobTitle: string;
  email: string;
  password: string;
}

interface FormErrors {
  [key: string]: string;
}

// Validation
const validateLoginForm = (data: LoginFormData): FormErrors => {
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

const validateRegisterForm = (data: RegisterFormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!data.firstName) errors.firstName = "First name is required";
  if (!data.lastName) errors.lastName = "Last name is required";
  if (!data.gender) errors.gender = "Gender is required";
  if (!data.phoneNumber || data.phoneNumber === '+994') errors.phoneNumber = "Phone number is required";
  if (!data.company) errors.company = "Company is required";
  if (!data.industry) errors.industry = "Industry is required";
  
  return errors;
};

const validateRegisterStep2Form = (data: RegisterStep2FormData): FormErrors => {
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

// LoginForm Component
const LoginForm: React.FC<{
  formData: LoginFormData;
  errors: FormErrors;
  showPassword: boolean;
  onFieldChange: (field: keyof LoginFormData, value: string) => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
  onSwitchToRegister: () => void;
}> = ({
  formData,
  errors,
  showPassword,
  onFieldChange,
  onTogglePassword,
  onSubmit,
  onSwitchToRegister
}) => {
  return (
    <div className="bg-white rounded-lg p-10 shadow-xl w-full max-w-[420px] mx-auto">
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-3">
          <Search className="w-7 h-7 text-red-500" />
        </div>
        <h2 className="text-base font-normal text-gray-800">Welcome Searchart !</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label 
            className="block mb-2 text-left" 
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#515151'
            }}
          >
            E-mail address
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={(e) => onFieldChange('email', e.target.value)}
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm`}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-normal text-gray-700  mb-2 text-left"   style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#515151'
          }}>
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => onFieldChange('password', e.target.value)}
              className={`w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm pr-10`}
            />
            <button
              type="button"
              onClick={onTogglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
        </div>

        <div className="flex justify-end">
          <a  
            href="#"
            className="text-xs hover:opacity-80 transition-opacity"
            style={{ color: "#103557" }}
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          className="w-full py-2.5 bg-blue-500 text-white rounded font-medium hover:bg-blue-900 transition-all text-sm"
          style={{ backgroundColor: "#103557" }}
        >
          Sign in
        </button>

        <p className="text-center text-xs text-gray-500" style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}>
          Not registered yet?<button
            type="button"
            onClick={onSwitchToRegister}
            className="text-gray-800 font-normal transition-colors ml-1"
            style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
          >
            Create and account
          </button>
        </p>
      </div>
    </div>
  );
};

// RegisterForm Component (Step 1)
const RegisterForm: React.FC<{
  formData: RegisterFormData;
  errors: FormErrors;
  onFieldChange: (field: keyof RegisterFormData, value: string) => void;
  onSubmit: () => void;
  onSwitchToLogin: () => void;
}> = ({
  formData,
  errors,
  onFieldChange,
  onSubmit,
  onSwitchToLogin
}) => {
  return (
    <div className="bg-white rounded-lg p-14 shadow-xl w-full max-w-[750px] mx-auto">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-2xl font-medium text-gray-900">Registration</h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-normal text-gray-700 mb-2" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#515151'
            }}>
              First Name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => onFieldChange('firstName', e.target.value)}
              className={`w-full px-5 py-3 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm`}
            />
            {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-xs font-normal text-gray-700 mb-2" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#515151'
            }}>
              Last Name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => onFieldChange('lastName', e.target.value)}
              className={`w-full px-5 py-3 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm`}
            />
            {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-normal text-gray-700 mb-2" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#515151'
          }}>
            Gender
          </label>
          <input
            type="text"
            value={formData.gender}
            onChange={(e) => onFieldChange('gender', e.target.value)}
            className={`w-full px-5 py-3 border ${
              errors.gender ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm`}
          />
          {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender}</p>}
        </div>

        <div>
          <div className="flex gap-4">
            <div className="space-y-2" style={{ width: '170px' }}>
              <label className="block text-base font-normal text-[#515151]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Phone Number
              </label>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">+994</span>
                <span className="text-lg">🇦🇿</span>
              </button>
            </div>

            <div className="flex-1 space-y-2">
              <div className="h-6"></div>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => onFieldChange('phoneNumber', e.target.value)}
                className={`w-full px-5 py-3 border ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-sm`}
                placeholder=""
              />
            </div>
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-normal text-gray-700 mb-2" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#515151'
            }}>
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => onFieldChange('company', e.target.value)}
              className={`w-full px-5 py-3 border ${
                errors.company ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm`}
            />
            {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
          </div>
          <div>
            <label className="block text-xs font-normal text-gray-700 mb-2" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#515151'
            }}>
              Industry
            </label>
            <input
              type="text"
              value={formData.industry}
              placeholder="Your Industry"
              onChange={(e) => onFieldChange('industry', e.target.value)}
              className={`w-full px-5 py-3 border ${
                errors.industry ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm placeholder:text-gray-400`}
            />
            {errors.industry && <p className="mt-1 text-xs text-red-500">{errors.industry}</p>}
          </div>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          className="w-full py-3.5 bg-blue-900 text-white rounded font-medium hover:bg-blue-950 transition-all text-sm mt-6 flex items-center justify-center gap-2"
          style={{ backgroundColor: "#103557" }}
        >
          Next
          <span className="text-lg">→</span>
        </button>

        <p className="text-center text-xs text-gray-500 pt-2" style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}>
          Already have an account?<button
            type="button"
            onClick={onSwitchToLogin}
            className="text-[#103557] font-normal transition-colors ml-1"
            style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

// RegisterFormStep2 Component (Step 2)
const RegisterFormStep2: React.FC<{
  formData: RegisterStep2FormData;
  errors: FormErrors;
  showPassword: boolean;
  onFieldChange: (field: keyof RegisterStep2FormData, value: string) => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
  onSwitchToLogin: () => void;
}> = ({
  formData,
  errors,
  showPassword,
  onFieldChange,
  onTogglePassword,
  onSubmit,
  onSwitchToLogin
}) => {
  return (
    <div className="bg-white rounded-lg p-14 shadow-xl w-full max-w-[950px] mx-auto">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-2xl font-medium text-gray-900">Registration</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-normal text-gray-700 mb-2 text-left" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#515151'
          }}>
            Job title
          </label>
          <input
            type="text"
            value={formData.jobTitle}
            onChange={(e) => onFieldChange('jobTitle', e.target.value)}
            className={`w-full px-5 py-3 border  ${
              errors.jobTitle ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm`}
          />
          {errors.jobTitle && <p className="mt-1 text-xs text-red-500">{errors.jobTitle}</p>}
        </div>

        <div>
          <label className="block text-xs font-normal text-gray-700 mb-2 text-left" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#515151'
          }}>
            Email adress
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onFieldChange('email', e.target.value)}
            className={`w-full px-5 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-normal text-gray-700 mb-2 text-left" style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#515151'
          }}>
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => onFieldChange('password', e.target.value)}
              className={`w-full px-5 py-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:border-gray-400 transition-all bg-white text-sm pr-10`}
            />
            <button
              type="button"
              onClick={onTogglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
        </div>

        <button
          type="button"
          onClick={onSubmit}
          className="w-full py-3.5 text-white rounded font-medium hover:opacity-90 transition-all text-sm mt-6"
          style={{ backgroundColor: "#103557" }}
        >
          Registration
        </button>

        <p className="text-center text-xs text-gray-500 pt-2" style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}>
          Already have an account?<button
            type="button"
            onClick={onSwitchToLogin}
            className="text-[#103557] font-normal transition-colors ml-1"
            style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

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