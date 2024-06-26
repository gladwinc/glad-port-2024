import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";
import { theme } from "../theme";
import Header from "./components/Header/Header";

export const metadata = {
  title: "glad",
  description: "gladwin's portfolio",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
