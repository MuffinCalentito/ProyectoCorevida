import './Servicios.css'
export default function Servicios(){
    return (
        <div className='services-container'>
            <h1 className='page-title'>Nuestros Servicios</h1>

            <section className='service-section gym-service'>
                <h2 className='service-title'>Gimnasio</h2>
                <div className='service-content'>
                    <img src='/src/assets/servicio-gimnasio.jpeg' alt='Gimnasio CoreVida'/>
                    <p>En CoreVida, ofrecemos un servicio de gimnasio integral y personalizado, que combina entrenamientos adaptados a tus necesidades, el acompañamiento de expertos y el uso de tecnología avanzada. Contamos con un equipo multidisciplinario de entrenadores, fisioterapeutas y nutricionistas para asegurarnos de que cada cliente alcance sus objetivos de salud y bienestar de forma efectiva y sostenible. Además, nuestra plataforma Nutrixia te permite seguir tu progreso y ajustar tu plan en tiempo real, tanto desde el gimnasio como desde la comodidad de tu hogar.</p>
                </div>
            </section>

            <section className='service-section physiotherapy-service'>
                <h2 className='service-title'>Fisioterapia</h2>
                <div className='service-content reverse-order'>
                    <p>En CoreVida, nuestro servicio de fisioterapia está diseñado para ayudarte a recuperarte de lesiones, mejorar tu movilidad y prevenir futuros problemas físicos. Contamos con un equipo de fisioterapeutas altamente capacitados que trabajan contigo de manera personalizada, utilizando técnicas avanzadas y equipos especializados para acelerar tu recuperación y optimizar tu bienestar físico. Ya sea para rehabilitación o para mantener un cuerpo sano, nuestro enfoque integral te brinda el apoyo necesario en cada etapa.</p>
                    <img src='/src/assets/servicio-fisioterapia.png' alt='Fisioterapia CoreVida'/>
                </div>
            </section>

            <section className='service-section nutritionist-service'>
                <h2 className='service-title'>Nutricionista</h2>
                <div className='service-content'>
                    <img src='/src/assets/servicio-nutricionista.jpg' alt='Nutricionista CoreVida'/>
                    <p>En CoreVida, ofrecemos un servicio de nutrición personalizado que se adapta a tus necesidades y objetivos de salud. Nuestros nutricionistas trabajan contigo para diseñar planes alimenticios equilibrados y sostenibles, basados en tus metas, nivel de actividad y preferencias. Te guiamos en cada paso del proceso, asegurándonos de que tu alimentación impulse tu rendimiento físico y bienestar general. Con CoreVida, lograr un estilo de vida saludable y una nutrición adecuada es más fácil y efectivo.</p>
                </div>
            </section>
        </div>
    );
}