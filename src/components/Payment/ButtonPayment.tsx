import { ReactNode } from 'react';

interface ButtonPaymentProps {
  icon: ReactNode;
  value: string;
}

export function ButtonPayment({ icon, value }: ButtonPaymentProps) {
  return (
    <button className="flex gap-3 font-roboto text-base-text bg-base-button rounded-lg p-4 w-[230.67px] mb-4">
      <span className="text-purple-normal">{icon}</span>
      {value}
    </button>
  );
}
