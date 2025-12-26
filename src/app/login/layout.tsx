import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login Admin",
    description: "Halaman login administrator Latin & Latpel 2026 PC IPNU IPPNU Ciamis.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
