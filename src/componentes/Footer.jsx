import './Footer.css';

export default function Footer(){
    return(
        <footer className='footer'>
            <h2>Contactos</h2>
            <div className='all-contact'>
                <div className='contact-item'>
                    <img src='/src/assets/symbol-email.png' alt='correo'/>
                    <p>correo123@gmail.com</p>
                </div>
                <div className='contact-item'>
                    <img src='/src/assets/symbol-phone.png' alt='telefono'/>
                    <p>+51 982 384 485</p>
                </div>
                <div className='contact-item'>
                    <img src='/src/assets/symbol-house.png' alt='direccion'/>
                    <p>Av.Jirones 989 Lima Peru</p>
                </div>
            </div>
            <div className='more-contacts'>
            <img className="img-hexa" src="/src/assets/youtube.png" alt="youtube" width="40px" height="auto"/>
            <img className="img-hexa" src="/src/assets/facebook.png" alt="facebook" width="40px" height="auto"/>
            <img className="img-hexa" src="/src/assets/instagram.png" alt="instagram" width="40px" height="auto"/>
            <img className="img-hexa" src="/src/assets/logmein.png" alt="logmein" width="40px" height="auto"/>
            <img className="img-hexa" src="/src/assets/tiktok.png" alt="tiktok" width="40px" height="auto"/>
            </div>
        </footer>
    );
}