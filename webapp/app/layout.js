// import "./globals.css";


export const metadata = {
  title: "repomanager",
  description: "Easily manage github repositories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
