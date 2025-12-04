import type { FormErrors, RegisterFormData } from "../types";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";

export const RegisterForm: React.FC<{
  formData: RegisterFormData;
  errors: FormErrors;
  onFieldChange: (field: keyof RegisterFormData, value: string) => void;
  onSubmit: () => void;
  onSwitchToLogin: () => void;
}> = ({ formData, errors, onFieldChange, onSubmit, onSwitchToLogin }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Registration</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="First Name"
            type="text"
            value={formData.firstName}
            onChange={(value) => onFieldChange('firstName', value)}
            error={errors.firstName}
            placeholder="First Name"
          />

          <InputField
            label="Last Name"
            type="text"
            value={formData.lastName}
            onChange={(value) => onFieldChange('lastName', value)}
            error={errors.lastName}
            placeholder="Last Name"
          />
        </div>

        <SelectField
          label="Gender"
          value={formData.gender}
          onChange={(value) => onFieldChange('gender', value)}
          options={['Male', 'Female', 'Other']}
          error={errors.gender}
          placeholder="Select Gender"
        />

        <InputField
          label="Phone Number"
          type="tel"
          value={formData.phoneNumber}
          onChange={(value) => onFieldChange('phoneNumber', value)}
          error={errors.phoneNumber}
          placeholder="+994"
        />

        <InputField
          label="Company"
          type="text"
          value={formData.company}
          onChange={(value) => onFieldChange('company', value)}
          error={errors.company}
          placeholder="Company Name"
        />

        <SelectField
          label="Industry"
          value={formData.industry}
          onChange={(value) => onFieldChange('industry', value)}
          options={['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Other']}
          error={errors.industry}
          placeholder="Your Industry"
        />

        <button
          type="button"
          onClick={onSubmit}
          className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Next →
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};