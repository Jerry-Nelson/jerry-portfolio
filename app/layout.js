import "./globals.css";
import Navbar from "../components/Navbar";
import Script from "next/script";

export const metadata = {
  title: "Jerry Nelson | Data Analyst Portfolio",
  description: "Portfolio site of Jerry Nelson, data analyst skilled in Excel, SQL, Power BI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YDE9MGHYK0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YDE9MGHYK0', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
