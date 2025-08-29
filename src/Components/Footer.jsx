// Importações dos ícones das redes sociais
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { FaCopyright } from 'react-icons/fa'

// Importação do logo da empresa
import Logo from '../Assets/Images/logo.svg'

/**
 * Componente Footer - Rodapé da aplicação
 * 
 * Apresenta informações da empresa, links de navegação, contatos,
 * redes sociais e políticas. Inclui também informações de copyright.
 * 
 * @returns {JSX.Element} Rodapé completo da aplicação
 */
const Footer = () => {
    return (
        // Container principal do rodapé
        <div className="footer-wrapper">
            {/* Conteúdo principal do rodapé */}
            <div className="footer-main-content">
                {/* Primeira seção: Logo e redes sociais */}
                <div className="footer-section-one">
                    {/* Container do logo da empresa */}
                    <div className="footer-logo-container">
                        <img 
                            src={Logo} 
                            alt="Imagem de logo da EcoFisco" 
                            width="200" 
                            height="160"
                            loading="lazy"
                        />
                    </div>
                    
                    {/* Ícones das redes sociais */}
                    <div className='footer-icons'>
                        {/* Link para Twitter */}
                        <a href="#" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', cursor: 'pointer'}}>
                            <BsTwitter />
                        </a>
                        
                        {/* Link para LinkedIn */}
                        <a href="#" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', cursor: 'pointer'}}>
                            <SiLinkedin />
                        </a>
                        
                        {/* Link para YouTube */}
                        <a href="#" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', cursor: 'pointer'}}>
                            <BsYoutube />
                        </a>
                        
                        {/* Link para Facebook */}
                        <a href="#" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', cursor: 'pointer'}}>
                            <FaFacebookF />
                        </a>
                    </div>
                </div>

                {/* Segunda seção: Links organizados em colunas */}
                <div className="footer-section-two">
                    {/* Coluna de navegação */}
                    <div className="footer-section-columns">
                        <span style={{cursor: 'default'}}><strong>Navegação:</strong></span>
                        <span><a href="#" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>Home</a></span>
                        <span><a href="#about" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>Sobre Nós</a></span>
                        <span><a href="#work" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>Nosso trabalho</a></span>
                        <span><a href="#contact" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>Contato</a></span>
                    </div>
                    
                    {/* Coluna de informações de contato */}
                    <div className="footer-section-columns">
                        <span style={{cursor: 'default'}}><strong>Contato:</strong></span>
                        <span>(11) 4002-8922</span>
                        <span><a href="mailto:sac@ecofisco.com" style={{textDecoration: 'none', color: 'inherit'}}>sac@ecofisco.com</a></span>
                        <span><a href="mailto:contato@ecofisco.com" style={{textDecoration: 'none', color: 'inherit'}}>contato@ecofisco.com</a></span>
                        <span><a href="mailto:suporte@ecofisco.com" style={{textDecoration: 'none', color: 'inherit'}}>suporte@ecofisco.com</a></span>
                    </div>

                    {/* Coluna de políticas e termos */}
                    <div className="footer-section-columns">
                        <span style={{cursor: 'default'}}><strong>Políticas:</strong></span>
                        <span><a href="#terms" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>Termos & Condições</a></span>
                        <span><a href="#privacy" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>Política de Privacidade</a></span>
                        <span><a href="#cookies" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>Política de Cookies</a></span>
                    </div>
                </div>
            </div>
            
            {/* Seção de copyright */}
            <div className="footer-copyright">
                <FaCopyright /> <span>2025 EcoFisco. Todos os direitos reservados.</span>
            </div>
        </div>
    )
}

export default Footer