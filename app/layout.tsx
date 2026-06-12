import "./globals.css";

export const metadata = {
  title: "Hack@Brown 2027",
  description: "Coming Soon",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
