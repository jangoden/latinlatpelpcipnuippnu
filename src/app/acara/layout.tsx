import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rundown Kegiatan",
    description: "Jadwal lengkap kegiatan Latin & Latpel 2026 PC IPNU IPPNU Ciamis.",
};

export default function AcaraLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
