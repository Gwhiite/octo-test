import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/Image";
import dev from "../public/dev.svg";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center items-center pt-6 mx-auto md:px-10 px-7">
        <h1 className="block font-medium leading-6 text-3xl">
          Seja bem<span className="text-violet-700">-</span>vindo
          <span className="text-violet-700">(</span>a
          <span className="text-violet-700">)</span>
          <span className="text-violet-700">!</span>
        </h1>
        <p className="text-xl mt-4 max-w-[60ch] text-center">
          Desenvolvi uma SPA com as páginas de{" "}
          <span className="text-violet-700 uppercase font-bold">Clima</span>,{" "}
          <span className="text-violet-700 uppercase font-bold">Cep</span>, e{" "}
          <span className="text-violet-700 uppercase font-bold">Contato</span>{" "}
          para acessa-las é só utilizar o menu acima
          <span className="text-violet-700">.</span>
        </p>
        <Image src={dev} alt="Desenvolvedor" className="w-80 mt-6" />
      </main>
      <Footer />
    </div>
  );
}
