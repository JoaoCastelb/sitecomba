import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Space from "./components/Space";
import Around from "./components/Around";
import Reserv from "./components/Reserv";
import Contactos from "./components/Contactos";
import logo from "./components/logoST.png";
import certifacte from "./images/Digital-Award-TRA-2023.png"

function App() {
  return (
    <>
      <header className="header">
        <Link to="/"><img src={logo} className="main-logo"/></Link>
        <div className="options-section">
          <Link to="/space" className="clicable">ESPAÇO</Link>
          <Link to="/around" className="clicable">À NOSSA VOLTA</Link>
          <Link to="/contacts" className="clicable">CONTACTOS</Link>
          <Link to="/reserva" className="clicable reserva">RESERVE JÁ</Link>
        </div>
      </header>
      <Routes>
        <Route path="/sitecomba" element={<Home />}></Route>
        <Route path="space" element={<Space />}></Route>
        <Route path="reserva" element = {< Reserv/>}></Route>
        <Route path="contacts" element={<Contactos />}></Route>
        <Route path="around" element={<Around />}></Route>
      </Routes> 
      <footer className="footer">
        <div className="footer-section">
          <h3>Contactos</h3>
          <p>Luis Castel-Branco</p>
          <p>Telefone: 968479344</p>
          <p>Mail: luiscastelb@gmail.com</p>
        </div>
        <div className="footer-section">
        <h3>Morada</h3>
          <p> Rua Padre Franklim Coimbra nº 12 , 3440-389 Santa Comba Dão</p>

        </div>
        <div className="footer-section">
          <h3>Verifcação</h3>
          <img src={certifacte} className="certificado" />
        </div>
      </footer>
    </>
  );
}

export default App;
