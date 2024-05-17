import { ReactNode } from 'react';

interface ButtonPaymentProps {
  icon: ReactNode;
  value: string;
}

export function ButtonPayment({ icon, value }: ButtonPaymentProps) {
  return (
    <button>
      {icon}
      {value}
    </button>
  );
}
