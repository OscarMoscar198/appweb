import '../assets/style/footer.css'
import Logoa from "/src/assets/img/logo_abajo.jpg"
 
 
 function Footer(){
    return(
        <footer>
            <div className='texto-abajo'>
                <nav>
                <a className='acercad'>ACERCA DE</a>
                <a className='contacto'>CONTACTANOS</a>
                <a className='trabajos'>TRABAJOS</a>
                <a className='terminos'>TERMINOS DE USO</a>
                <a className='politicasp'>POLITICAS DE PRIVACIDAD</a>
                <a className='politicasc'>POLITICA DE COOKIES</a>
                </nav>
                <img src={Logoa} alt="" className='logo_foot'/>
            </div>
        </footer>
    )
 }
 export default Footer;