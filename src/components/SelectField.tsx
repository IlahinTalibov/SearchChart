

export const SelectField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  placeholder?: string;
}> = ({ label, value, onChange, options, error, placeholder }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 bg-gray-50 border ${
          error ? 'border-red-500' : 'border-gray-200'
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none`}
      >
        <option value="">{placeholder || 'Select...'}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-500 animate-shake">{error}</p>
      )}
    </div>
  );
};