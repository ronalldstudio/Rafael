import { clsx } from "clsx";
import type { FieldError } from "react-hook-form";

interface FormFieldProps {
  id: string;
  label: string;
  error?: FieldError;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function FormField({
  id,
  label,
  error,
  required,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={clsx("space-y-1.5", className)}>
      <label
        htmlFor={id}
        className="block text-sm font-display font-semibold text-navy"
      >
        {label}
        {required && (
          <span className="text-orange ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1" role="alert">
          <svg
            className="h-3.5 w-3.5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error.message}
        </p>
      )}
    </div>
  );
}

export const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-navy placeholder-gray-400 transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange disabled:opacity-50";

export const selectClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-navy transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange disabled:opacity-50 appearance-none cursor-pointer";
