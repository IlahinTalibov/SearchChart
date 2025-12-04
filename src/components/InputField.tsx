
// import React, { useState } from 'react';
import { Eye, EyeOff, Search } from 'lucide-react';
import type { InputFieldProps } from '../types';


export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  showPasswordToggle,
  onTogglePassword,
  showPassword
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={showPasswordToggle && showPassword ? 'text' : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 bg-gray-50 border ${
            error ? 'border-red-500' : 'border-gray-200'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-500 animate-shake">{error}</p>
      )}
    </div>
  );
};
