import Header from "@/components/Header/Header";

export default function PrivateLayout({ children }) {
    return (
      <>
        <Header isPublic={false}/>
        <main>
        {children}
        </main>
      </>
    );
  }
  