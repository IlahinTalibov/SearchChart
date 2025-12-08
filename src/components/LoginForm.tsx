import { Eye, EyeOff } from "lucide-react";
import type { FormErrors, LoginFormData } from "../types";


interface LoginFormProps {
  formData: LoginFormData;
  errors: FormErrors;
  showPassword: boolean;
  onFieldChange: (field: keyof LoginFormData, value: string) => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
  onSwitchToRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  formData,
  errors,
  showPassword,
  onFieldChange,
  onTogglePassword,
  onSubmit,
  onSwitchToRegister
}) => {
  return (
    <div className="bg-white rounded-lg p-10 shadow-xl w-full mx-auto" style={{ maxWidth: '420px' }}>
      <div className="flex flex-col items-center mb-8">
        <div className="bg-slate-900 rounded-full flex items-center justify-center mb-3" style={{ width: '56px', height: '56px' }}>
          {/* <Search style={{ width: '28px', height: '28px' }} className="text-red-500" /> */}
           <img src="/public/Frame7.png" alt="Description"   style={{ width: '50px', height: '50px' }} />;
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
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
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