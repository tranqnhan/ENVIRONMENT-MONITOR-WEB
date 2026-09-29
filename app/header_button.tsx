import { ReactNode } from "react";

interface HeaderButtonProps {
  children: ReactNode;
  active?: boolean;
  onclick?: () => void;
};

export default function HeaderButton({ children, active=false, onclick } : HeaderButtonProps) {
  return (
    <button onClick={onclick} className="group relative pb-1">
      {children}

      <span
        className={`
          absolute bottom-0 left-0 h-0.5 w-full
          origin-center 
          transition-transform duration-300
          ${active? "bg-green-500 scale-x-100" : "bg-green-200 scale-x-0 group-hover:scale-x-100"}
        `}
      />
    </button>
  );

}