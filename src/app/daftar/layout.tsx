import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pendaftaran MAP NU",
    description: "Informasi pendaftaran Madrasah Aswaja Pelajar NU (MAP NU) dalam rangkaian Harlah IPNU ke-72 & IPPNU ke-71 PC IPNU IPPNU Ciamis.",
};

export default function DaftarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
