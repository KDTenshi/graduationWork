import Link from "next/link";
import { FC } from "react";

interface PhoneLinkProps {
  className?: string;
}

const PhoneLink: FC<PhoneLinkProps> = ({ className = "" }) => {
  return (
    <Link className={className} href={"tel:+78332451646"} target="_blank">
      +7(8332)45-16-46
    </Link>
  );
};

export default PhoneLink;
