import Header from "@/components/Header/Header";

export default function PublicLayout({ children }) {
    return (
      <>
        <Header isPublic={true}/>
        <main>
        {children}
        </main>
      </>
    );
  }
  