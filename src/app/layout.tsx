import "@/styles/globals.css";
import { satoshi } from "@/constants/fonts";
import { cn, generateMetadata } from "@/functions";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components";
import ChatBubble from "@/components/global/chat-bubble";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning className="scroll-smooth">
            <body
                className={cn(
                    satoshi.variable,
                    "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide"
                )}
            >
                <Toaster
                    richColors
                    theme="dark"
                    position="top-right"
                />
                <Providers>
                    {children}
                    <ChatBubble />
                </Providers>
            </body>
        </html>
    );
};
