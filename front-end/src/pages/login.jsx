import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-8">
        <h1 className="text-3xl font-bold">Faça seu login</h1>
        <form className="flex w-full flex-col gap-2">
          <input
            className="rounded-full border border-gray-300 px-4 py-2 shadow-sm"
            type="email"
            placeholder="E-mail"
          />
          <input
            className="rounded-full border border-gray-300 px-4 py-2 shadow-sm"
            type="password"
            placeholder="Senha"
          />
          <button className="bg-airbnb cursor-pointer rounded-full px-4 py-2 font-bold text-white">
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?{" "}
          <Link to="/register" className="text-airbnb font-semibold underline">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default login;
