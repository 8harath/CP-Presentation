import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export default function Slide({ children, className = "" }: SlideProps) {
  return (
    <div className={`w-full h-full p-12 overflow-auto animate-fade-in ${className}`}>
      {children}
    </div>
  );
}
