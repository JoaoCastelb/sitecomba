import casa from "../images/casa.jpg"
import { Link } from "react-router-dom";
import {GiHomeGarage} from "react-icons/gi"
import img1 from "../images/cama.jpg"
import img2 from "../images/cama2.jpg"
import img3 from "../images/cama3.jpg"
import img4 from "../images/palmeira.jpg"
import img5 from "../images/jardim.jpg"
import {FaWifi, FaKitchenSet} from "react-icons/fa6"


const images = [casa,img4,img5,img3,img2,img1]



export default function Home(){



    return (
        <div>
            <div className="slideshow">
                <img 
                   
                    className="intro-img" 
                    src ={casa}
                />
                
                <div className="aqui">
                    <p className="aqui-txt">RESERVE JÁ</p>
                    <Link to="/reserva" className="aqui-btn">Aqui</Link>
                </div>
            </div>
            <div  className="all-about">
                <h1 className="sobre-title">Sobre a Moradia Santa Comba</h1>
                <div className="about">
                    <p>
                        O Alojamento Local está localizado em Santa Comba Dão na rota da N2 ao Km 213, 
                        e a 50 metros dos supermercados Continente, LIDL e Intermarché . 
                        Os hóspedes podem desfrutar nas proximidades, da ecopista do Dão a 3,4Km, da praia fluvial 
                        Senhora da Ribeira a 11 Km e outros locais de interesse tais como diversos percursos pedestres, 
                        como o de Treixedo, Nagozela e São João de Areias.
                    </p>
                    <p>
                        Na moradia, os hóspedes podem aproveitar o jardim, envolvente à casa com arvores de fruta, 
                        um amplo terraço onde podem aproveitar para banhos de sol ou preparar um churrasco.
                    </p>
                    <p>
                        O alojamento tem uma garagem onde é possível guardar uma viatura, motas, motas de água ou bicicletas.
                        A moradia possui três quartos, uma sala de estar, uma cozinha totalmente equipada e uma casa de banho. Têm acesso a Wi-Fi gratuito.
                        Os hóspedes, durante a estadia, são os únicos ocupantes de todo o espaço.
                    </p>                  
                </div>
            </div>
            <div className="third-section">
            <p className="sections-title">AO SEU DISPOR</p>
                <div className="regalias-section">
                    <div className="regalia">
                        <FaWifi className="icon"/>
                        <p className="type">INTERNET GRÁTIS</p>
                        <p className="morada">Wi-fi gratuito e acesso a televisão com todos os canais Box.</p>
                    </div>
                    <div className="regalia">
                        <GiHomeGarage className="icon" />
                        <p className="type">GARAGEM PRIVADA</p>
                        <p className="morada">Garagem privada com espaço para guardar uma viatura, motas, motas de água ou bicicletas.</p>
                    </div>
                    <div className="regalia">
                        <FaKitchenSet className="icon" />
                        <p className="type">COZINHA EQUIPADA</p>
                        <p className="morada">Cozinha totalmente equipada com todas as necessidades que os hóspedes possam ter.</p>
                    </div>
                </div> 
            </div>
               
        </div> 
    )
}