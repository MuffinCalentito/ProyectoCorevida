import './Nosotros.css'
export default function Nosotros(){
    return (
        <div className='about-container'>
            <section className='about-us-section'>
                <h2 className='section-title'>Sobre Nosotros</h2>
                <div className='about-content'>
                    <img src='/src/assets/nosotros-img.png' alt='Equipo de CoreVida'/>
                    <p>En CoreVida, somos un gimnasio comprometido con tu bienestar integral. Combinamos experiencia, tecnología y un enfoque personalizado para ayudarte a alcanzar tus objetivos de salud y transformación de manera efectiva y sostenible.</p>
                </div>
            </section>

            <section className='mission-vision-section'>
                <div className='mission-vision-grid'>
                    <div className='mission-card'>
                        <h2 className='card-title'>Misión</h2>
                        <p>Brindar un espacio integral de entrenamiento físico y bienestar, donde cada persona encuentre el acompañamiento profesional, la motivación y las herramientas necesarias para transformar su estilo de vida de manera saludable, sostenible y personalizada.</p>
                    </div>
                    <div className='vision-card'>
                        <h2 className='card-title'>Visión</h2>
                        <p>Ser reconocidos a nivel nacional como el gimnasio líder en transformación física y hábitos saludables, destacando por la innovación en nuestros programas, la cercanía con nuestros clientes y el impacto positivo en su calidad de vida.</p>
                    </div>
                </div>
            </section>

            <section className='objectives-section'>
                <h2 className='section-title'>Nuestros Objetivos</h2>
                <div className='objectives-content'>
                    <ul className='objective-list'>
                        <li>Mejorar la salud física y mental de nuestros clientes.</li>
                        <li>Ofrecer experiencias motivadoras y atención de calidad.</li>
                        <li>Implementar tecnología de punta para nuestros clientes.</li>
                        <li>Construir la mejor comunidad hacia un cambio saludable.</li>
                        <li>Aumentar nuestros centros a nivel nacional.</li>
                    </ul>
                    <img src='/src/assets/objetivos-img.jpg' alt='Personas celebrando objetivos'/>
                </div>
            </section>
        </div>
    );
}