import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {
    // Solo redirige a la página principal
    redirect("/");
};

export default AuthCallbackPage
