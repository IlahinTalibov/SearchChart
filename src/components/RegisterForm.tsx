import type { FormErrors, RegisterFormData } from "../types";


interface RegisterFormProps {
  formData: RegisterFormData;
  errors: FormErrors;
  onFieldChange: (field: keyof RegisterFormData, value: string) => void;
  onSubmit: () => void;
  onSwitchToLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  formData,
  errors,
  onFieldChange,
  onSubmit,
  onSwitchToLogin
}) => {
  return (
    <div className="bg-white rounded-lg p-14 shadow-xl w-full mx-auto" style={{ maxWidth: '750px' }}>
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