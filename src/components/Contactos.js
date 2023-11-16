import {BsMailbox} from "react-icons/bs"
import {AiOutlinePhone} from "react-icons/ai"
import {FaLocationDot} from "react-icons/fa6"


export default function Contact(){
    return (
        <div className="section">
            <p className="sections-title">CONTACTOS</p>
            <h2>|</h2>
            <div className="opcoes-contacto">
                <div className="contacto">
                    <BsMailbox className="icon"/>
                    <p className="type">EMAIL</p>
                    <p>luiscastelb@gmail.com</p>
                </div>
                <div className="contacto">
                    <AiOutlinePhone className="icon"/>
                    <p className="type">TELEFONE</p>
                    <p>968479344</p>
                </div>
                <div className="contacto">
                    <FaLocationDot className="icon"/>
                    <p className="type">LOCAL</p>
                    <p className="morada">Rua Padre Franklim Coimbra nº 12, 3440-389 Santa Comba Dão</p>
                </div>  
            </div>     
        </div>
    )
}