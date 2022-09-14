import Image from "next/image";
import gitImage from '../../public/assets/github.svg'
import instaImage from '../../public/assets/instagram.svg'
import linkImage from '../../public/assets/linkedin.svg'

const Social: React.FC = () => {    
  return (
    <div className="social-content">
        <ul className="social-list">
            <li className="social-item">
                <a href="https://github.com/MarcoAntunes37/">
                    <span className="social-icon">
                        <Image src={gitImage} width={20} height={20} alt={'Github-image'}/>
                    </span>
                </a>
            </li>
            <li className="social-item">
                <a href="https://www.instagram.com/marcoantunes9/">
                    <span className="social-icon">
                        <Image src={instaImage} width={20} height={20} alt={'Instagram-image'}/>
                    </span>
                </a>
            </li>
            <li className="social-item">
                <a href="https://www.linkedin.com/in/marco-aurélio-antunes-junior-0b11526a/">
                    <span className="social-icon">
                        <Image src={linkImage} width={20} height={20} alt={'Linkedin-image'}/>
                    </span>
                </a>
            </li>            
        </ul>
        <div className="container-fluid d-flex">
            <div className="vr ms-4"/>
        </div>            
    </div>
  )
}

export default Social;