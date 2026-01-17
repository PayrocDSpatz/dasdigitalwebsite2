import "./globals.css";

export const metadata = {
  title: "DAS Digital",
  description: "Automation • AI • Ops",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
