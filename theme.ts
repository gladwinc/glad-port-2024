"use client";

import { createTheme } from "@mantine/core";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({ subsets: ["latin"] });

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
});
