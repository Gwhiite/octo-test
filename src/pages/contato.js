import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const emailHandler = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError("Email inválido");
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };

  const confirmar = (e) => {
    e.preventDefault();

    console.log(nome, email, message);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col md:pb-24 pt-6 mx-auto md:px-10 px-7 min-h-screen overflow-hidden">
        <h1 className="mb-6 block font-medium leading-6 text-center text-3xl">
          Contate<span className="text-violet-700">-</span>nos
          <span className="text-violet-700">.</span>
        </h1>
        <form className="flex flex-col items-center">
          <div>
            <div className="flex flex-col">
              <label className=" block text-md font-medium leading-6">
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
                placeholder="Digite seu nome completo aqui"
                className="block mb-4 w-full rounded-md p-1.5 shadow-sm appearence-none focus:outline-none border-b-2 border-violet-700 sm:leading-6"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className=" block text-md font-medium leading-6">
                E-mail
              </label>
              <input
                value={email}
                onChange={emailHandler}
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Digite seu email aqui"
                className="block  w-full rounded-md p-1.5 shadow-sm appearence-none focus:outline-none border-b-2 border-violet-700 sm:leading-6"
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className=" block text-md  font-medium leading-6"
              >
                Mensagem
              </label>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  id="mensagem"
                  name="mensagem"
                  rows={3}
                  className="mb-4 mt-1 block w-full rounded-md shadow-sm appearence-none focus:outline-none border-b-2 border-violet-700 p-1.5 sm:text-sm sm:leading-6"
                  placeholder="Digite sua mensagem aqui"
                />
              </div>
            </div>
            <div>
              <label className="my-2 block text-md  font-medium leading-6">
                Enviar foto
              </label>
              <div className=" flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-violet-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-700 focus-within:ring-offset-2 hover:text-violet-700"
                    >
                      <span className="text-md ">Faça upload do arquivo</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-md ">ou arraste para a área</p>
                  </div>
                  <p className="text-md ">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="mt-6 uppercase font-bold text-white px-4 py-2 bg-violet-700 rounded-md"
            onClick={confirmar}
          >
            Confirmar
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default contato;
