import './Inicio.css'

export default function Inicio(){
    return (
        <div className="contenedor">
            <div className='contenedor1'>
                <h2 className='eslogan'>Transforma tu cuerpo, transforma tu vida. Bienvenido a CoreVida, tu espacio integral de bienestar.</h2>
            </div>
            <div className='contenedor2'>
                <img className="imgs-principal" src="/src/assets/img-principal.jpg" alt="Imagen-principal" height="750px" />
            </div>
            <div className='contenedor5'>
                <h2 className='eslogan'>Nos enfocamos en...</h2>
            
            <div className='contenedor3'>
                <img className="img-hexa" src="/src/assets/hexa-ejercicio.png" alt="hexa-ejercicio" width="320px" height="auto"/>
                <img className="img-hexa" src="/src/assets/hexa-recuperacion.png" alt="hexa-recuperacion" width="320px" height="auto"/>
                <img className="img-hexa" src="/src/assets/hexa-nutricion.png" alt="hexa-nutricion" width="320px" height="auto"/>
            </div>
            <div className='contenedor4'>
                <div className='columna'>
                    <img src='/src/assets/ejercicio-info.png' alt='ejercicio-info'/>
                    <p>El ejercicio previene enfermedades, mejora el ánimo y aumenta la energía. ¡Es clave para una vida saludable!</p>
                </div>
                <div className='columna'>
                    <img src='/src/assets/recuperacion-info.png' alt='recuperacion-info'/>
                    <p>En CoreVida, utilizamos Nutrixia y tecnología avanzada para ofrecerte un servicio único y eficaz, garantizando resultados y un acompañamiento constante. ¡Tu bienestar es nuestra prioridad!</p>
                </div>
                <div className='columna'>
                    <img src='/src/assets/nutricion-info.png' alt='nutricion-info'/>
                    <p>Gestionamos tu bienestar con planes personalizados, seguimiento constante y tecnología avanzada para asegurar resultados efectivos y sostenibles.</p>
                </div>
                </div>
            </div>
            
        </div>
    );
}