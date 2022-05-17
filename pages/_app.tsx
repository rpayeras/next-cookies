import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../themes";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const currentTheme =
      Cookies.get("theme") === "light" ? lightTheme : darkTheme;
    console.log(Cookies.get("theme"));

    setCurrentTheme(currentTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  );
}

//Not recomended
// MyApp.getInitialProps = async (ctx: AppContext) => {
//   const { theme } = ctx.ctx.req
//     ? (ctx.ctx.req as any).cookies
//     : { theme: "light" };
//   console.log(ctx);
//   const validThemes = ["light", "dark", "custom"];

//   return {
//     theme: validThemes.includes(theme) ? theme : "dark",
//   };
// };

export default MyApp;
