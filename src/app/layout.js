
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./globals.css";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";
import { SessionProvider } from "next-auth/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find Deals, Discounts & More with SAVVY Members Club",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    
    <html lang="en">
      <head>
        <meta name="robots" content="noindex"/>
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
        <meta name="apple-app" />
        <meta name="google-app" />
        <link rel="android-touch-icon" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="shortcut icon" href="/salesTag.ico" />
        <link rel="apple-touch-icon" href="/salesTag.ico" sizes="152x152"/>
        <link media="all" rel="stylesheet" id="adc_icons_reg" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link media="all" rel="stylesheet" id="adc_icons_outlined" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"/>
        <link media="all" rel="stylesheet" id="adc_icons_round" href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"/>
        <link media="all" rel="stylesheet" id="adc_icons_two_tone" href="https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone"/>
        <link media="all" rel="stylesheet" id="adc_icons_sharp" href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        {/* <link href="/css/all.css" rel="stylesheet" /> */}
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <link rel="stylesheet" href="/css/custom.css" />
        {/* <link rel="stylesheet" href="/css/responsive.css" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
        {/* <Script src="/js/jquery.min.js"/> */}
        {/* <Script src="/js/all.js"/>
        <Script src="/js/custom.js"/> */}
      </head>
      <body className={inter.className}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <SessionProvider>
        <Header/>
        {children}
        <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}
