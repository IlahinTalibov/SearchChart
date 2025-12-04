import { Search } from "lucide-react";
import type { FormErrors, LoginFormData } from "../types";
import { InputField } from "./InputField";

export const LoginForm: React.FC<{
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
    <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
          <Search className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome Searchart !</h2>
      </div>

      <div className="space-y-5">
        <InputField
          label="E-mail address"
          type="email"
          value={formData.email}
          onChange={(value) => onFieldChange('email', value)}
          error={errors.email}
          placeholder="Enter your email"
        />

        <InputField
          label="Password"
          type="password"
          value={formData.password}
          onChange={(value) => onFieldChange('password', value)}
          error={errors.password}
          placeholder="Enter your password"
          showPasswordToggle
          onTogglePassword={onTogglePassword}
          showPassword={showPassword}
        />

        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Sign in
        </button>

        <p className="text-center text-sm text-gray-600">
          Not registered yet?{' '}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Create and account
          </button>
        </p>
      </div>
    </div>
  );
};