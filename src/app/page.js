import { Button } from "@mui/material";
import Image from "next/image";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { aboutAdv } from "./helper/helper";

export default function Home() {
  return (
    <main>
      {/* ==========HeroSection========== */}
      <section
        className=" hero min-h-[100vh] flex items-center min-sm:bg-scroll" id="home">
        <div className="text-white flex flex-col ml-[5%] gap-2">
          <h3 className="text-5xl font-semibold">Travel Bus</h3>
          <p className="text-3xl font-semibold">A Aventura te Espera!</p>
          <p className="text-2xl font-semibold">Bora Embarcar?</p>
          <Button className="w-40" variant="contained">
            <WhatsAppIcon />
            Whatsapp
          </Button>
        </div>
      </section>
      {/* ==========AboutSection========== */}
      <section className="flex  py-12 px-[5%] gap-8 bg-slate-900 text-white" id="about">

        <Image className="shadow-2xl" src='/about.png' width={400} height={400} />
        <div className="flex flex-col items-center justify-center">
          <h3 className="title">Sobre Nós</h3>
          <div className="border-t-4 border-red-700 w-20 mb-6"></div>
          <p>
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
      </section>
      {/* ==========diV01Section========== */}
      <section className="div01 min-h-[40vh] min-sm:bg-scroll flex items-center justify-center">
        <h3 className="title text-white"> Desconto 30%</h3>
        <p>Para sua Primeira viagem</p>
      </section>
    </main>

  );
}
