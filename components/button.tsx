import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children?: ReactNode;
  form?: boolean;
  cssClasses?: string;
  url?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  formNext?: boolean;
  buttonWhite?: boolean;
}

const Button = ({
  children,
  form,
  cssClasses,
  url,
  onClick,
  buttonWhite,
}: Props) => {
  if (form) {
    return (
      <button
        type={"submit"}
        className={`text-subheading font-500 text-black px-6 py-2.5 drop-shadow-md hover:text-black text-center rounded-[5px] ${
          buttonWhite
            ? "bg-white tabletLarge:hover:bg-white/80"
            : "bg-orange tabletLarge:hover:bg-orange/80"
        } ${cssClasses}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link
        href={url!}
        className={`bg-orange text-subheading font-500 text-black px-6 py-2.5 drop-shadow-md tabletLarge:hover:bg-orange/80 text-center hover:text-black rounded-[5px] ${cssClasses}`}
      >
        {children}
      </Link>
    );
  }
};

export default Button;
