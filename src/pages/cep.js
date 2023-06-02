import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useRef, useState } from "react";

const cep = () => {
  const [api, setApi] = useState(null);
  const uf = useRef(null);
  const cidade = useRef(null);
  const logradouro = useRef(null);

  const cep = async () => {
    const URL = `https://viacep.com.br/ws/${uf.current.value}/${cidade.current.value}/${logradouro.current.value}/json/`;
    uf.current.value = "";
    cidade.current.value = "";
    logradouro.current.value = "";
    fetch(URL)
      .then((r) => r.json())
      .then((r) => {
        setApi(null);
        const data = r.map((e) => {
          return e.cep;
        });

        setApi(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <main className="grid justify-center pt-6 mx-auto md:px-10 px-7">
        <div className="w-80 p-4 flex flex-col items-center gap-6">
          <h1 className="block font-medium leading-6 text-3xl">
            Por favor<span className="text-violet-700">, </span>preencha os
            campos
            <span className="text-violet-700">.</span>
          </h1>
          <div className="flex items-center justify-between rounded-md w-full shadow-sm border-violet-700 border-b-2 block text-xl p-1.5 font-semibold uppercase">
            <input
              type="text"
              ref={uf}
              placeholder="Digite a UF..."
              className="appearence-none focus:outline-none"
            ></input>
          </div>
          <div className="flex items-center justify-between rounded-md w-full shadow-sm border-violet-700 border-b-2 block text-xl p-1.5 font-semibold uppercase">
            <input
              type="text"
              ref={cidade}
              placeholder="Digite a Cidade..."
              className="appearence-none focus:outline-none"
            ></input>
          </div>
          <div className="flex items-center justify-between rounded-md w-full shadow-sm border-violet-700 border-b-2 block text-xl p-1.5 font-semibold uppercase">
            <input
              type="text"
              ref={logradouro}
              placeholder="Digite o Logradouro..."
              className="appearence-none focus:outline-none"
            ></input>
          </div>
          <button
            className="uppercase font-bold text-white px-4 py-2 bg-violet-700 rounded-md"
            onClick={cep}
          >
            Confirmar
          </button>
          <div>
            <div className="text-center mt-6">
              {api && (
                <p className="text-xl rounded-md font-semibold p-1.5 flex flex-col md:mb-24">
                  <span className="block text-md font-medium leading-6 mb-4">
                    Esses são os possíveis números{" "}
                    <span className="text-violet-700">(3 primeiros)</span>
                  </span>
                  <span className="text-white mb-2 p-1.5 rounded-md bg-violet-700">
                    {api[0]}
                  </span>
                  <span className="text-white mb-2 p-1.5 rounded-md bg-violet-700">
                    {api[1]}
                  </span>
                  <span className="text-white mb-2 p-1.5 rounded-md bg-violet-700">
                    {api[2]}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default cep;
