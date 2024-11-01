import React from "react";
import ArrowRightImg from "assets/images/arrow-right.svg";

type ButtonVariant = "default" | "outline" | "text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const AppButton: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  className,
  ...props
}) => {
  const buttonStyles = {
    default: "primary-gradient",
    outline: "",
    text: "",
  };

  const commonStyles =
    "rounded-full px-20 py-2 text-lg font-semibold leading-[27px] relative text-tertiary"; ;

  const classNames = `${buttonStyles[variant]} ${commonStyles} ${className}`;

  return (
    <button className={classNames} {...props}>
      {children}
      <div className="bg-white bg-opacity-20 absolute right-0 mr-2  top-1/2 transform -translate-y-1/2 w-[34px] h-[34px] flex items-center justify-center rounded-full ">
        <img src={ArrowRightImg} alt="arrow-right" className="" />
      </div>
    </button>
  );
};

export default AppButton;
