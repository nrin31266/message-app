// RootLayout.tsx
"use client";
import ThemeProviderWrapper from "@/components/ThemeProviderComponent";
import "./globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Routers from "@/routers/Routers";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProviderWrapper><Routers>{children}</Routers></ThemeProviderWrapper>
        </Provider>
      </body>
    </html>
  );
}
