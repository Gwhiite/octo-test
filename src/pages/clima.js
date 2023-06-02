import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useRef, useState } from "react";
import search from "../public/search.svg";
import Image from "next/image";
import clear from "../public/clear.svg";
import rain from "../public/rain.svg";
import snow from "../public/snow.svg";
import clouds from "../public/clouds.svg";
import haze from "../public/haze.svg";
import smoke from "../public/smoke.svg";
import mist from "../public/mist.svg";
import drizzle from "../public/drizzle.svg";
import temp from "../public/temp.svg";
import notfound from "../public/notfound.svg";

const key = "7a5881445b27f90f6041b200c8ea5976";

const clima = () => {
  const [api, setApi] = useState(null);
  const inputRef = useRef(null);
  const [showWeather, setshowWeather] = useState(null);

  const weathers = [
    {
      type: "Clear",
      img: clear,
    },
    {
      type: "Rain",
      img: rain,
    },
    {
      type: "Snow",
      img: snow,
    },
    {
      type: "Clouds",
      img: clouds,
    },
    {
      type: "Haze",
      img: haze,
    },
    {
      type: "Smoke",
      img: smoke,
    },
    {
      type: "Mist",
      img: mist,
    },
    {
      type: "Drizzle",
      img: drizzle,
    },
  ];
  const weather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${key}`;
    inputRef.current.value = "";
    fetch(URL)
      .then((r) => r.json())
      .then((data) => {
        setApi(null);
        if (data.cod == 404 || data.cod == 400) {
          setshowWeather([
            {
              type: "Não encontrado...Verifique se digitou corretamente",
              img: notfound,
            },
          ]);
        }
        setshowWeather(
          weathers.filter((weather) => weather.type === data.weather[0].main)
        );
        setApi(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <main className="grid justify-center md:mb-24 pt-6 mx-auto md:px-10 px-7">
        <div className="w-80 p-4 flex flex-col gap-6">
          <h1 className="block font-medium leading-6 text-3xl">
            Por favor<span className="text-violet-700">, </span>preencha o campo
            <span className="text-violet-700">.</span>
          </h1>
          <div className="flex items-center justify-between rounded-md w-full shadow-sm border-violet-700 border-b-2 block text-xl p-1.5 font-semibold uppercase">
            <input
              type="text"
              ref={inputRef}
              placeholder="Digite uma cidade..."
              className="appearence-none focus:outline-none"
            ></input>
            <button onClick={weather}>
              <Image src={search} alt="search" className="w-6" />
            </button>
          </div>
          <div>
            {showWeather && (
              <div className="text-center flex flex-col gap-6 mt-10">
                {api && (
                  <p className="text-xl font-semibold">
                    {api?.name + "," + api?.sys?.country}
                  </p>
                )}
                <Image
                  src={showWeather[0]?.img}
                  className="w-32 mx-auto"
                  alt="weather"
                />
                <h3 className="text-2xl font-bold text-violet-700 ">
                  {showWeather[0]?.type}
                </h3>
                {api && (
                  <>
                    <div className="flex justify-center items-center">
                      <Image src={temp} alt="temp" className="h-9 w-9 mt-1" />
                      <h2 className="text-3xl font-extrabold">
                        {api?.main?.temp}°C
                      </h2>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default clima;
