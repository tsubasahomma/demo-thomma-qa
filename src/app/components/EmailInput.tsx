'use client';

type EmailInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  borderRadius?: string;
};

const EmailInput = ({
  value,
  onChange,
  placeholder = 'Email address',
  required = true,
  borderRadius = 'rounded-md',
}: EmailInputProps) => {
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        {placeholder}
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required={required}
        className={`appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 placeholder-gray-500 text-gray-200 ${borderRadius} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailInput;
