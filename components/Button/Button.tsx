import React from "react";

type ButtonProps = {
  text: string;
  onClick: (num: number) => void;
  ammount: number;
};

const Button = (props: ButtonProps) => {
  const { onClick, text, ammount } = props;
  return <button onClick={() => onClick(ammount)}>{text}</button>;
};

export default Button;
