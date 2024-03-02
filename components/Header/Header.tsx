import React, { FC } from "react";
import { HeaderProps } from "./headerTypes";

const Header: FC<HeaderProps> = ({ title, color }) => {
  return (
    <div style={{ backgroundColor: color }}>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;

// TIPO 1
// RECOMENDADO CUANDO SE TIENEN POCAS PROPS
// const Header = ({ title }: { title: string }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   );
// };
