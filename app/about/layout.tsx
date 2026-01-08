import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Keval AI | AI Automation & Software Experts",
    description:
        "Learn about Keval AI, our mission, and how we help businesses grow with AI automation, chatbots, CRM solutions, and custom software development.",
    alternates: {
        canonical: "https://www.kevalai.com/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
