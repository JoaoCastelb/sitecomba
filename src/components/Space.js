import jardim1 from "../images/jardim2.jpeg"
import jardim2 from "../images/jardim3.webp"
import jardim from "../images/palmeira.jpg"
import sala from "../images/sala.jpg"
import sala2 from "../images/sala2.webp"
import sala1 from "../images/sala3.webp"
import quarto from "../images/quarto4.webp"
import quarto1 from "../images/quarto3.webp"
import quarto2 from "../images/cama3.jpg"
import cozinha1 from "../images/cozinha1.jpeg"
import cozinha2 from "../images/cozinha2.jpeg"
import cozinha3 from "../images/cozinha3.jpeg"

export default function Space(){
    return (
        <div className="section-reserva">
              <p className="sections-title-reserva">CONHEÇA O NOSSO ESPAÇO</p>
              <div className="divison">
                <p className="division-title">JARDIM</p>
                <div className="pics">
                  <img src={jardim} className="space-pic"/>
                  <img src={jardim2} className="space-pic"/>
                  <img src={jardim1} className="space-pic"/>
                </div>
                
              </div>
              <h1 className="peso">|</h1>
              <div className="divison">
                <p className="division-title">SALA</p>
                <img src={sala} className="space-pic"/>
                <img src={sala1} className="space-pic"/>
                <img src={sala2} className="space-pic"/>
              </div>
              <h1 className="peso">|</h1>

              <div className="divison">
                <p className="division-title">QUARTOS</p>
                <img src={quarto1} className="space-pic"/>
                <img src={quarto} className="space-pic"/>
                <img src={quarto2} className="space-pic"/>
              </div>
              <h1 className="peso">|</h1>

              <div className="divison">              
                <p className="division-title">COZINHA</p>
                <img src={cozinha1} className="space-pic"/>
                <img src={cozinha3} className="space-pic"/>
                <img src={cozinha2} className="space-pic"/>
              </div>
        </div>
    )
}