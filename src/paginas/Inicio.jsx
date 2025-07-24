import './Inicio.css';

export default function Inicio(){
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-slogan">Transforma tu cuerpo, transforma tu vida. Bienvenido a CoreVida, tu espacio integral de bienestar.</h1>
                </div>
                <div className="hero-image-wrapper">
                    <img className="hero-image" src="/src/assets/img-principal.jpg" alt="Personas entrenando en gimnasio" />
                </div>
            </section>

            <section className="focus-section">
                <h2 className="section-title">Nos enfocamos en...</h2>
                <div className="focus-items">
                    <div className="focus-item">
                        <img className="focus-icon" src="/src/assets/hexa-ejercicio.png" alt="Icono de Ejercicio"/>
                        <p>El ejercicio previene enfermedades, mejora el ánimo y aumenta la energía. ¡Es clave para una vida saludable!</p>
                    </div>
                    <div className="focus-item">
                        <img className="focus-icon" src="/src/assets/hexa-recuperacion.png" alt="Icono de Recuperación"/>
                        <p>En CoreVida, utilizamos Nutrixia y tecnología avanzada para ofrecerte un servicio único y eficaz, garantizando resultados y un acompañamiento constante. ¡Tu bienestar es nuestra prioridad!</p>
                    </div>
                    <div className="focus-item">
                        <img className="focus-icon" src="/src/assets/hexa-nutricion.png" alt="Icono de Nutrición"/>
                        <p>Gestionamos tu bienestar con planes personalizados, seguimiento constante y tecnología avanzada para asegurar resultados efectivos y sostenibles.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}