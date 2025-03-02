import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/router";

const Login = () => {
  const { setAuthenticated } = useAuthStore();

  const navigate = useRouter();

  const onSubmit = () => {
    try {
      setAuthenticated(true);

      navigate.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={onSubmit}>Entrar</button>
    </div>
  );
};

export default Login;
