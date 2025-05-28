import './Nosotros.css'
export default function Nosotros(){
    return (
        <div className='contenedor-principals'>
            <div className='contenedor-1'>
                <h2>Sobre Nosotros</h2>
                <div className='contenido'>
                    <img src='/src/assets/nosotros-img.png' alt='contenido-img'/>
                    <p>En CoreVida, somos un gimnasio comprometido con tu bienestar integral. Combinamos experiencia, tecnología y un enfoque personalizado para ayudarte a alcanzar tus objetivos de salud y transformación de manera efectiva y sostenible.</p>
                </div>
            </div>
            <div className='contenedor-5'>
            <div className='contenedor-2'>
                <h2>Misión</h2>
                <h2>Visión</h2>
            </div>
            <div className='contenedor-3'>
                <p>Brindar un espacio integral de entrenamiento físico y bienestar, donde cada persona encuentre el acompañamiento profesional, la motivación y las herramientas necesarias para transformar su estilo de vida de manera saludable, sostenible y personalizada.</p>
                <p>Ser reconocidos a nivel nacional como el gimnasio líder en transformación física y hábitos saludables, destacando por la innovación en nuestros programas, la cercanía con nuestros clientes y el impacto positivo en su calidad de vida.</p>
            </div>
            </div>
            <div className='contenedor-4'>
                <h2>Objetivos</h2>
                <div className='informacion'>
                    <ul className='objetivos'>
                        <li>Mejorar la salud física y mental de nuestros clientes</li>
                        <li>Otorgar experiencias motivadoras y atención de calidad</li>
                        <li>Implementar tecnología de punta para nuestros clientes</li>
                        <li>Construir la mejor comunidad hacia un cambio saludable</li>
                        <li>Aumentar nuestros centros</li>
                    </ul>
                    <img src='/src/assets/objetivos-img.jpg' alt='objetivos-img'/>
                </div>
            </div>
        </div>
    );
}