import { FC } from "react";
import Black from "./elements/Black";
import White from "./elements/White";

interface LogoProps {
  color?: "black" | "white";
}

const Logo: FC<LogoProps> = ({ color = "black" }) => {
  if (color === "white") return <White />;

  return <Black />;
};

export default Logo;
