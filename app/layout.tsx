import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burd | Construindo o futuro das IAs na América Latina",
  description:
    "Poder de GPU sob demanda na América Latina com baixa latência e pagamento em reais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#0A0A0A] text-zinc-100 font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
