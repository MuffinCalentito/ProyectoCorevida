import './Footer.css';

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-content'>
                <h2 className='footer-title'>Contáctanos</h2>
                <div className='contact-info'>
                    <div className='contact-item'>
                        <img src='/src/assets/symbol-email.png' alt='Correo'/>
                        <p>correo123@gmail.com</p>
                    </div>
                    <div className='contact-item'>
                        <img src='/src/assets/symbol-phone.png' alt='Teléfono'/>
                        <p>+51 982 384 485</p>
                    </div>
                    <div className='contact-item'>
                        <img src='/src/assets/symbol-house.png' alt='Dirección'/>
                        <p>Av.Jirones 989 Lima Perú</p>
                    </div>
                </div>
                <div className='social-links'>
                    <a href="#" aria-label="YouTube"><img src="/src/assets/youtube.png" alt="youtube"/></a>
                    <a href="#" aria-label="Facebook"><img src="/src/assets/facebook.png" alt="facebook"/></a>
                    <a href="#" aria-label="Instagram"><img src="/src/assets/instagram.png" alt="instagram"/></a>
                    <a href="#" aria-label="LogMeIn"><img src="/src/assets/logmein.png" alt="logmein"/></a>
                    <a href="#" aria-label="TikTok"><img src="/src/assets/tiktok.png" alt="tiktok"/></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CoreVida. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}