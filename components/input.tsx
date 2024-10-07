import { InputHTMLAttributes } from 'react';

interface InputProps {
  errors?: string[];
  name: string;
}

export default function Input({errors = [], name, ...rest }: InputProps & InputHTMLAttributes<HTMLElement>) {
  return (
    <div className="flex flex-col">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-4 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400 transition"
        name={name}
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}