import { TCertificate } from "@/Types";

export async function getCertificates() {
  try {
    const certificatesRes = await fetch("https://1ae6dad7db0c881d.mokky.dev/certificates");

    if (!certificatesRes.ok) throw new Error("Something went wrong");

    const certificates: TCertificate[] = await certificatesRes.json();

    return certificates;
  } catch (e) {
    console.error(`Fetch error: ${e}`);
  }
}
