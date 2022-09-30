import logo from '../assets/img/CSR_toro.jpg'
import '../assets/style/header.css'
import Buscar from "/src/assets/img/buscar.png"

function Header() {
  return (
    <header>
        <div>
          <img src={logo}></img>
        </div>

        <button className='proyectos'>PROYECTOS</button>
        <button className='popular'>LO MAS POPULAR</button>
        <button className='acerca'>ACERCA DE</button>
        <button className='futuro'>FUTURO</button>
        <a class="boton_login" href="login.html">LOGIN</a>
        <img src={Buscar} alt="" class='lupa'/>
    </header>
    
  );
}
export default Header;
