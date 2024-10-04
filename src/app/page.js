import { Button } from "@mui/material";
import Image from "next/image";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { aboutAdv, features } from "./helper/helper";


export default function Home() {
  return (
    <main>
      {/* ==========HeroSection========== */}
      <section
        className=" hero min-h-[100vh] flex items-center min-sm:bg-scroll" id="home">
        <div className="text-white flex flex-col ml-[10%] gap-2">
          <h3 className="text-6xl font-semibold">Travel Bus</h3>
          <p className="text-4xl font-semibold">A Aventura te Espera!</p>
          <p className="text-3xl font-semibold">Bora Embarcar?</p>
          <Button className="w-40" variant="contained">
            <WhatsAppIcon />
            Whatsapp
          </Button>
        </div>
      </section>
      {/* ==========AboutSection========== */}
      <section className="flex items-center  py-12 px-[5%] gap-8 max-[1000px]:flex-col-reverse" id="about ">
        <div className="flex flex-col items-center justify-center">
          <h3 className="title averia">Sobre Nós</h3>
          <div className="border-t-4 border-red-700 w-20 mb-6 "></div>
          <p className="averia">
            Nós da DreamBus, somos especialistas em criar experiências de viagens memoráveis, adaptadas às necessidades de cada cliente. Com anos de experiência no setor de turismo, oferecemos pacotes exclusivos que combinam conforto, economia e inovação, garantindo a melhor experiência para turistas e viajantes de negócios.
            <br /><br />
            Nosso Objetivo é proporcionar experiências únicas e personalizadas que vão além das expectativas, com um compromisso inabalável com a qualidade e a sustentabilidade.
            <br /><br />
          </p>
          <div>
            {aboutAdv.map((item, index) => {
              return (
                <div className="flex" key={index}>
                  <PlayArrowIcon /><p><span>{item.title}</span> {item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
        <Image className="shadow-2xl rounded-md " src='/about.png' width={600} height={600} />
      </section>

      {/* ==========diV01Section========== */}
      <section className="div01 min-h-[40vh] min-sm:bg-scroll flex items-center justify-around max-sm:flex-col max-sm:bg-scroll">
        <div className="flex flex-col gap-2">
          <h3 className="title text-white font-bold"> Desconto 30%</h3>
          <p className="text-white text-3xl font-bold">Para sua Primeira viagem</p>
        </div>
        <button className="btn" >
          <a className=" flex items-center">
            <WhatsAppIcon sx={{ fontSize: 30 }} />Fale Conosco
          </a>
        </button>

      </section>

      {/* ==========TipsSection========== */}
      <section className="py-16 flex justify-center items-center flex-col ">
        <h3 className="title">Roteiro</h3>
        <div className="border-t-4 border-red-700 w-20 mb-6 "></div>
        <p className="w-[80%] mb-10">Estamos muito empolgados em compartilhar com vocês uma jornada inesquecível por varios destinos.  Exploraremos juntos as paisagens, a cultura e a gastronomia desse lugar encantador. Aqui está uma visão geral do que nos espera:</p>
       
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-[480px]:grid-cols-1">
          {features.map((trips, index) => {
            return (
              <div key={index} className="w-60 h-[20rem] shadow-2xl rounded-md text-center">
                <Image className="rounded-t-lg" src={trips.img} width={400} height={500}></Image>
                <h3 className="text-[1.5rem] font-semibold">{trips.name}</h3>
                <p>{trips.desc}</p>
              </div>
            )
          })}
        </div>
      </section>
      <section>
      <h3 className="title">Depoimentos</h3>
      <div>
  
      </div>
      </section>
    </main>

  );
}
