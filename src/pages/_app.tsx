import { AppProps } from "next/app";
import { useAuth } from "@/hooks/useAuth";
import "@/styles/globals.css";

const App = ({ Component, pageProps, router }: AppProps) => {
  const { isAuthenticated, loading } = useAuth();

  const protectedRoutes = ["/dashboard"];
  const isProtected = protectedRoutes.some((route) =>
    router.pathname.startsWith(route)
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (isProtected && !isAuthenticated) {
    return <p>Redirecionando...</p>;
  }

  return <Component {...pageProps} />;
};

export default App;
