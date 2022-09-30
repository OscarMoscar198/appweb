import Fondo from "/src/assets/img/FI-monster.jpg"
import '../assets/style/body.css'

function Body(){

    return (
        <body>
            <section class= "index-background">
                <div className='container'>
                    <img src={Fondo} alt="" class="imagen-fondo"/>
                </div>
                
                <div class="textbox-container">
                    <b><h3>CASO RACING</h3></b>
                </div>

                <div class="text-brand">
                    <h2>SIEMPRE PENSANDO EN LA VICTORIA</h2>
                </div>

                <div class="Button-brand">
                <a class="boton_mas" href="">VER MAS</a>
                </div>
            </section>
        </body>
    );
}

export default Body;