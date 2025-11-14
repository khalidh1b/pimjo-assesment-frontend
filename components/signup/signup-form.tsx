"use client";

import type React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { SignupFormData } from "@/hooks/use-signup";

interface SignupFormProps {
  formData: SignupFormData;
  showPassword: boolean;
  showConfirmPassword: boolean;
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onTogglePassword: () => void;
  onToggleConfirmPassword: () => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({
  formData,
  showPassword,
  showConfirmPassword,
  isLoading,
  onInputChange,
  onSubmit,
  onTogglePassword,
  onToggleConfirmPassword,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          full name
        </label>
        <Input
          type="text"
          name="fullName"
          placeholder="enter your name"
          value={formData.fullName}
          onChange={onInputChange}
          autoComplete="off"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          email
        </label>
        <Input
          type="email"
          name="email"
          placeholder="enter your email"
          value={formData.email}
          onChange={onInputChange}
          autoComplete="off"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          password
        </label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="enter your password"
            value={formData.password}
            onChange={onInputChange}
            autoComplete="off"
            required
          />
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          confirm password
        </label>
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="confirm your password"
            value={formData.confirmPassword}
            onChange={onInputChange}
            autoComplete="off"
            required
          />
          <button
            type="button"
            onClick={onToggleConfirmPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "creating account..." : "sign up"}
      </button>
    </form>
  );
};