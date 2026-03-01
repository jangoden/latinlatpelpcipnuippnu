import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rundown Kegiatan",
    description: "Jadwal lengkap rangkaian kegiatan Harlah & MAP NU 2026 PC IPNU IPPNU Ciamis.",
};

export default function AcaraLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
