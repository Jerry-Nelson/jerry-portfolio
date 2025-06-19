import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Jerry Nelson | Data Analyst Portfolio",
  description: "Portfolio site of Jerry Nelson, data analyst skilled in Excel, SQL, Power BI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
