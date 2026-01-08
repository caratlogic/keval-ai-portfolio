import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Portfolio | AI & Software Projects by Keval AI",
    description:
        "View Keval AI’s portfolio showcasing successful AI automation, chatbot, CRM, and custom software projects delivered to clients worldwide.",
    alternates: {
        canonical: "https://www.kevalai.com/portfolio",
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
