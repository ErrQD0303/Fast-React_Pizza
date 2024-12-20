import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, disabled, to, type, onClick }: Props) => {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold text-stone-800 transition-colors duration-300 hover:cursor-pointer hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles: Record<string, string> = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5",
    round:
      "inline-block text-sm rounded-full bg-yellow-400 px-3.5 py-2 font-semibold text-stone-800 transition-colors duration-300 hover:cursor-pointer hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 px-4 py-2.5 font-semibold text-stone-400 transition-colors duration-300 hover:cursor-pointer hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5",
    logout:
      "bg-yellow-100 p-1.5 rounded-full border border-red-700 text-red-700",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
