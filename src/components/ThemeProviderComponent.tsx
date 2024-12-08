// ThemeProviderWrapper.tsx
"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D86E53",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     contained: {
    //       backgroundColor: "#4caf50",
    //       color: "#fff",
    //       "&:hover": {
    //         backgroundColor: "#388e3c",
    //       },
    //     },
    //   },
    // },
  },
});

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
