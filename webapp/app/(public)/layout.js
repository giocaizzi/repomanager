import Header from "@/components/Layouts/Header/Header";

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
  