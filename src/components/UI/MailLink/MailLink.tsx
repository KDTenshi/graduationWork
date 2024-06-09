import Link from "next/link";
import { FC } from "react";

interface MailLinkProps {
  className?: string;
}

const MailLink: FC<MailLinkProps> = ({ className = "" }) => {
  return (
    <Link className={className} href={"mailto:sales@alfagroup-sport.ru"} target="_blank" replace>
      sales@alfagroup-sport.ru
    </Link>
  );
};

export default MailLink;
