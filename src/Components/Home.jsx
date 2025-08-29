// Importações de ícones
import { FiArrowRight } from "react-icons/fi"

// Importação de imagens
import BannerBackground from '../assets/images/home-banner-background.svg'
import BannerImage from '../assets/images/home-banner-image.svg'

// Importação dos componentes
import NavBar from "./NavBar.jsx"
import SecondaryButton from "./UI/SecondaryButton.jsx"

/**
 * Componente Home - Página inicial da aplicação
 * 
 * Apresenta a seção principal (hero) da plataforma EcoFisco com:
 * - Mensagem de boas-vindas e proposta de valor
 * - Botão de navegação para a seção "Nosso Trabalho"
 * - Imagem ilustrativa do conceito de sustentabilidade
 * 
 * Funcionalidades:
 * - Navegação suave para outras seções
 * - Layout responsivo
 * - Design atrativo com foco em sustentabilidade
 */
const Home = () => {
    return (
        <div id="home" className="home-container">
            {/* Barra de navegação */}
            <NavBar />

            {/* Container principal do banner/hero */}
            <div className="home-banner-container">
                {/* Container para imagem de fundo (atualmente comentado) */}
                <div className="home-bannerImage-container">
                    {/* <img src={BannerBackground} alt="Imagem de linhas ao fundo na home" /> */}
                </div>
                
                {/* Seção de texto principal */}
                <div className="home-text-section">
                    {/* Título principal da página */}
                    <h1 className="primary-heading-home">
                        Compensando hoje, preservando amanhã
                    </h1>
                    
                    {/* Descrição da proposta de valor */}
                    <p className="primary-text">
                        Participe do movimento de compensação de
                        carbono e ajude a reduzir os impactos
                        ambientais.
                    </p>

                    {/* Botão de call-to-action para navegar para seção "Nosso Trabalho" */}
                    <SecondaryButton onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>
                        Nosso Trabalho <FiArrowRight />
                    </SecondaryButton>

                    {/* Texto complementar motivacional */}
                    <p className="primary-text">
                        Cada ação conta para um futuro mais verde.
                    </p>
                </div>

                {/* Seção da imagem principal */}
                <div className="home-image-section">
                    <div className="home-primary-image">
                        <img 
                        src={BannerImage} 
                        alt="Imagem de homem segurando um balão verde da terra" 
                        width="732" 
                        height="590"
                        loading="eager"
                        fetchPriority="high"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home