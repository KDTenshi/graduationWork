import { FC } from "react";
import Black from "./elements/Black";
import White from "./elements/White";

interface LogoProps {
  color?: "black" | "white";
  small?: boolean;
}

const Logo: FC<LogoProps> = ({ color = "black", small = false }) => {
  if (color === "white") return <White small={small} />;

  return <Black small={small} />;
};

export default Logo;
