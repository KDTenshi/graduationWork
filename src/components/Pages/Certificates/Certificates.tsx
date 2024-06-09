import { getCertificates } from "@/utils/getCertificates";
import { FC } from "react";
import s from "./Certificates.module.css";
import Link from "next/link";
import Image from "next/image";

const Certificates: FC = async () => {
  const certificates = await getCertificates();

  if (!certificates) return;

  return (
    <div className={s.Certificates}>
      <h2>Наши сертификаты</h2>
      <div className={s.Wrap}>
        {certificates.map((certificate) => (
          <Link href={`/certificates${certificate.img}`} key={certificate.img} className={s.Item} target="_blank">
            <Image src={`/certificates${certificate.img}`} alt={certificate.img} sizes="100%" fill />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
