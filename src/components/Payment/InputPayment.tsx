import { twMerge } from 'tailwind-merge';

interface InputPaymentProps {
  placeholder: string;
  className?: string;
}

export function InputPayment({ placeholder, className }: InputPaymentProps) {
  return (
    <>
      <input
        className={twMerge('bg-base-button rounded-md p-3 w-full', className)}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
}
