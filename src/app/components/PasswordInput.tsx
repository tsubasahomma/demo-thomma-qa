'use client'; // クライアントコンポーネントとして指定

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  borderRadius?: string;
  id?: string;
};

const PasswordInput = ({
  value,
  onChange,
  placeholder = 'Password',
  required = true,
  borderRadius = 'rounded-md',
  id = 'password',
}: PasswordInputProps) => {
  return (
    <div>
      <label htmlFor="password" className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        name="password"
        type="password"
        autoComplete="current-password"
        required={required}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 placeholder-gray-500 text-gray-200 ${borderRadius} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
        placeholder={placeholder}
        value={value}
        onChange={onChange} // 単純にパスワードの変更をトリガー
      />
    </div>
  );
};

export default PasswordInput;
