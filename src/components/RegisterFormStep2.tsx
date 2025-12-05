import { Eye, EyeOff } from "lucide-react";
import type { FormErrors, RegisterStep2FormData } from "../types";


interface RegisterFormStep2Props {
  formData: RegisterStep2FormData;
  errors: FormErrors;
  showPassword: boolean;
  onFieldChange: (field: keyof RegisterStep2FormData, value: string) => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
  onSwitchToLogin: () => void;
}

export const RegisterFormStep2: React.FC<RegisterFormStep2Props> = ({
  formData,
  errors,
  showPassword,
  onFieldChange,
  onTogglePassword,
  onSubmit,
  onSwitchToLogin
}) => {
  return (
    <div className="bg-white rounded-lg p-14 shadow-xl w-full mx-auto" style={{ maxWidth: '950px' }}>
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