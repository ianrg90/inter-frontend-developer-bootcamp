import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("Nenhum contexto encontrado!");
  }

  return ctx;
};

export default useAuth;
