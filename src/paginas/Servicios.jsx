import './Servicios.css'
export default function Servicios(){
    return (
        <div className='contenedor-principal'>
            <h2 className='titulo'>Gimnasio</h2>
            <div className='contenedores-1'>
                <img src='/src/assets/servicio-gimnasio.jpeg' alt='servicio-gimnasio'/>
                <p>En CoreVida, ofrecemos un servicio de gimnasio integral y personalizado, que combina entrenamientos adaptados a tus necesidades, el acompañamiento de expertos y el uso de tecnología avanzada. Contamos con un equipo multidisciplinario de entrenadores, fisioterapeutas y nutricionistas para asegurarnos de que cada cliente alcance sus objetivos de salud y bienestar de forma efectiva y sostenible. Además, nuestra plataforma Nutrixia te permite seguir tu progreso y ajustar tu plan en tiempo real, tanto desde el gimnasio como desde la comodidad de tu hogar.</p>
            </div>
            <h2 className='titulo'>Fisioterapia</h2>
            <div className='contenedores-2'>
                <p>En CoreVida, nuestro servicio de fisioterapia está diseñado para ayudarte a recuperarte de lesiones, mejorar tu movilidad y prevenir futuros problemas físicos. Contamos con un equipo de fisioterapeutas altamente capacitados que trabajan contigo de manera personalizada, utilizando técnicas avanzadas y equipos especializados para acelerar tu recuperación y optimizar tu bienestar físico. Ya sea para rehabilitación o para mantener un cuerpo sano, nuestro enfoque integral te brinda el apoyo necesario en cada etapa.</p>
                <img src='/src/assets/servicio-fisioterapia.png' alt='servicio-fisioterapia'/>
            </div>
            <h2 className='titulo'>Nutricionista</h2>
            <div className='contenedores-3'>
                <img src='/src/assets/servicio-nutricionista.jpg' alt='servicio-nutricionista'/>
                <p>En CoreVida, ofrecemos un servicio de nutrición personalizado que se adapta a tus necesidades y objetivos de salud. Nuestros nutricionistas trabajan contigo para diseñar planes alimenticios equilibrados y sostenibles, basados en tus metas, nivel de actividad y preferencias. Te guiamos en cada paso del proceso, asegurándonos de que tu alimentación impulse tu rendimiento físico y bienestar general. Con CoreVida, lograr un estilo de vida saludable y una nutrición adecuada es más fácil y efectivo.</p>
            </div>
        </div>
    );
}