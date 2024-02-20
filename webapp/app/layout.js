import "@components/globals.css";

import Header from "@/components/Header/Header";

export const metadata = {
  title: "repomanager",
  description: "Easily manage github repositories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}