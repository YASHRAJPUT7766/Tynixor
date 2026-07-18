import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://tynixor.netlify.app"),
  title: "Tynixor — Learning Tools, Software & AI Resources",
  description:
    "Tynixor is an educational platform offering free resources, tools, and AI solutions for learners and professionals. Access tutorials, guides, and learning materials anytime, anywhere.",
  manifest: "/manifest.json",
  icons: {
    icon: "/assets/favicon/favicon.ico",
    apple: "/assets/icons/icon-191x192.png",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-8261344473148399"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-05B48SBGP7"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-05B48SBGP7');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8261344473148399"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
