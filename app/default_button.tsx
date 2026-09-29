import { ReactNode } from "react";

interface DefaultButtonProps {
  children: ReactNode;
  onclick?: () => void;
};

export default function DefaultButton({ children, onclick } : DefaultButtonProps) {
  return (
    <button onClick={onclick} className="
        bg-green-700 
        p-3
        rounded-lg
        transition-all
        duration-300
        hover:bg-green-500
    ">
      {children}
    </button>
  );

}