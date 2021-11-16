import Link from "next/link";
import React from "react";

const Button = ({
  disabled = false,
  children = "",
  text = "",
  className = "",
  onClick = undefined,
}) => {
  let handleClick = () => {
    if (disabled || !onClick) {
      return null;
    } else {
      onClick;
    }
  };

  return (
    <div className={className}>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={"btn-primary"}
      >
        <p className={"prose text-white text-center"}>{text || children}</p>
      </button>
    </div>
  );
};

const LinkedButton = ({ href, ...props }) => {
  <Link passHref {...href}>
    <Button {...props} />
  </Link>;
};
export default Button;
