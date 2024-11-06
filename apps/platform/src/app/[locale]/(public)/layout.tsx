import Footer from "@/components/footer";
import Nav from "@/components/navigation";

interface LoginLayoutProps {
  children: React.ReactNode;
}

export default async function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
