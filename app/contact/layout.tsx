import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Keval AI | Start Your AI Project Today",
    description:
        "Contact Keval AI to discuss AI automation, chatbots, CRM development, or custom software solutions. Let’s build smart solutions together.",
    alternates: {
        canonical: "https://www.kevalai.com/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
