import '../assets/style/formulario.css'
import fondof from "/src/assets/img/fondoF.jpg"

function Formulario(){
    return(
 <section className='formulario'>
    <div className='blockd'>
    </div>

    <div>
    <img src={fondof} alt='' className='fondoF'></img>
    </div>

    <div className='blockf'>
    </div>

    <div class='textoFormulario'>
            <h3 className='Login'>LOGIN</h3>
            <h3 className='UsuarioL'>Usuario</h3>
            <input type="text" className='UsuarioLT'/>
            <h3 className='ContraL'>Contraseña</h3>
            <input type="password" className='ContraLT' />
            <a class="boton_login" href="">INICIAR SESION</a>

            <h3 className='Registro'>REGISTRO</h3>
            <h3 className='UsuarioR'>Usuario</h3>
            <input type="text" className='UsuarioRT' />
            <h3 className='EmailR'>Email</h3>
            <input type="text" className='EmailRT' />
            <h3 className='ContraR'>Contraseña</h3>
            <input type="password" className='ContraRT'/>
            <h3 className='ConfirmarR'>Confirmar Contraseña</h3>
            <input type="password" className='ConfirmarRT' />
            <h3 className='Sexo'>Sexo</h3>
            <h3 className='SMasc'>Masculino</h3>
            <input type="radio" className='SMascR'/>
            <h3 className='SFem'>Femenino</h3>
            <input type="radio" className='SFemR'/>
            <a class="boton_signup" href="">REGISTRARSE</a>
    </div>
 </section>
    );
}
export default Formulario;