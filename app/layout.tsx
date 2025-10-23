// app/layout.tsx
import React from "react";

// Se tiver um arquivo global de CSS, descomente a linha abaixo e crie app/globals.css
// import "./globals.css";

export const metadata = {
  title: "Dashboard MMG",
  description: "Painel de Unidades - MMG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
