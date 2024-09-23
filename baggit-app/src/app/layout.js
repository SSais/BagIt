import "./globals.css";

export const metadata = {
  title: "Baggit",
  description: "Baggit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
