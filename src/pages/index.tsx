import Link from "next/link";

const Home = () => {
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
  const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-primary">{APP_NAME}</h1>
      <p className="text-gray-700 mt-4 text-center">{APP_DESCRIPTION}</p>

      <div className="mt-6 flex space-x-4">
        <Link href="/auth/login">
          <button className="bg-secondary text-white px-4 py-2 rounded-md">
            Entrar
          </button>
        </Link>
        <Link href="/auth/register">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Cadastrar-se
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
