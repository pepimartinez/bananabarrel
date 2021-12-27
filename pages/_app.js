import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import "tailwindcss/tailwind.css";
import "../styles/main.css";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
      cookie_flags: "SameSite=None;Secure",
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <title>Banana Barrel</title>
        <meta property="og:title" content="Banana Barrel" key="title" />
        <meta name="description" content="CyberKongz Nana Lotto" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://bananabarrel.xyz",
          title: "Banana Barrel",
          description: "🍌 CyberKongz Banana Loto 🍌",
          images: [
            {
              url: "https://bananabarrel.xyz/img/logo.gif",
              width: 800,
              height: 600,
              alt: "Banana Barrel Logo",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
