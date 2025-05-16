import './Inicio.css'

export default function Inicio(){
    return (
        <div className="contenedor">
            <div className='contenedor1'>
                <img className="imgs-principal" src="/src/assets/img-principal.jpg" alt="Imagen-principal" max-width="100%" height="auto"/>
            </div>
            
            <div className='contenedor2'>
                <h2>Transforma tu cuerpo, transforma tu vida. Bienvenido a CoreVida, tu espacio integral de bienestar.</h2>
                <div className='columna1'></div>
                <div className='columna2'></div>
                <div className='columna3'></div>    
            </div>
            
        </div>
    );
}