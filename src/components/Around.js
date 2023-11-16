import ecopista from "../images/ecopitas.jpg"
import praia from "../images/praia.jpg"
import estrada from "../images/estrada.jpg"
import percurso from "../images/percursso.jpg"
import { motion } from "framer-motion";
import { useState } from "react";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa"


const images = [
    {
        img: ecopista,
        desc: "A Ecopista do Dão é uma ecopista entre Santa Comba Dão e Viseu, em Portugal. O percurso tem aproximadamente 49,2 km de extensão e segue o traçado da desativada Linha do Dão, ao longo das margens dos rios Dão e Pavia.",
        title: "Ecopista do Dão"
    },
    {
        img: praia,
        desc: `Plena de beleza e paz de espírito, a afamada Praia Fluvial da Senhora da Ribeira 
        faz as delicias de todos os locais e visitantes da bonita região de Santa Comba Dão.
        Os antigos vales dos rios Mondego e Dão deram lugar a grandes depósitos de águas paradas, 
        com a construção da grande Barragem da Aguieira, formando locais perfeitos para as mais variadas 
        actividades de lazer, desporto e até culturais.",
        title: "Ecopista do Dão`,
        title: "Zona balnear da Senhora da Ribeira"
    },
    {
        img: estrada,
        desc: `Paisagens que variam entre as serras e as longas planícies, riachos escondidos 
            e vastos espelhos de água, lugarejos perdidos e cidades ricas em património. 
            Mas, acima de tudo, gente, gente autêntica, verdadeira guardiã de saberes ancestrais, 
            pronta para o receber de braços abertos. Aceite o convite e desacelere. 
            Há um longo caminho por desbravar. Dê-lhe todo o tempo do mundo.`,
        title: "Rota Nacional nº2"
    },
    {
        img: percurso,
        desc: `Santa Comba Dão tem agora três percursos pedestres registados e homologados pela Federação de 
            Campismo e Montanhismo de Portugal (FCMP). De norte a sul do concelho,o trio de rotas soma mais 
            de trinta quilómetros e leva o caminhante a conhecer o património natural, cultural e paisagístico 
            do território concelhio.`,
        title: "Percursos pedestres homologados em Santa Comba Dão"
    },
]


export default function Around(){
  
    const [index, SetIndex] = useState(0)
    
    function nextStep(){
        SetIndex(index + 1)
        if(index === 3 ){
            SetIndex(0)
        }
    }

    function prevStep(){
        SetIndex(index - 1)
        if(index === 0 ){
            SetIndex(3)
        }

    }

    return (
        <div className="section-around">
            <p className="sections-title ">LOCAIS PRÓXIMOS</p>
            <div className="slideshow">
                <img 
                    className="place-img" 
                    src ={images[index].img}
                    key= {images[index]}
                />
                <button className="prevBtn" onClick={prevStep}><FaCaretLeft/></button>
                <button className="nextBtn" onClick={nextStep}><FaCaretRight/></button>
                <div className="description">
                    <h1>{images[index].title}</h1>
                    <p>{images[index].desc}</p>
                </div> 
            </div>
        </div>

   
    )
}