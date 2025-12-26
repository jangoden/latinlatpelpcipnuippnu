import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pendaftaran Peserta",
    description: "Formulir pendaftaran peserta Latin & Latpel 2026 PC IPNU IPPNU Ciamis. Daftar sekarang!",
};

export default function DaftarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
