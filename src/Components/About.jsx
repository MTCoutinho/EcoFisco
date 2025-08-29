// Importações de assets
import AboutBackground from '../assets/Images/about-background.svg'

/**
 * Componente About - Seção "Sobre Nós" da página inicial
 * 
 * Apresenta informações sobre a empresa EcoFisco, sua missão e valores,
 * incluindo uma imagem de fundo decorativa e um botão de call-to-action
 * para direcionamento à página de login/cadastro.
 * 
 * @returns {JSX.Element} Seção sobre a empresa
 */
const About = () => {
    return (
        // Container principal da seção About
        <div id="about" className="about-section-container">
            {/* Container da imagem de fundo decorativa */}
            <div className="about-background-image-container">
                <img 
                    src={AboutBackground} 
                    alt="Imagem de pessoas plantando árvore" 
                    width="430" 
                    height="400"
                    loading="lazy"
                />
            </div>

            {/* Container vazio para espaçamento (pode ser removido se não necessário) */}
            <div className="about-section-container"></div>

            {/* Container do conteúdo textual */}
            <div className="about-section-text-container">
                {/* Subtítulo da seção */}
                <p className="primary-subheading">Sobre Nós</p>
                
                {/* Título principal */}
                <h1 className="primary-heading">
                   Responsabilidade ambiental que transforma o futuro
                </h1>

                {/* Primeiro parágrafo descritivo */}
                <p className="primary-text">
                    Apoiamos empresas e pessoas a reduzir e compensar suas emissões de carbono, oferecendo benefícios fiscais para quem mantém suas emissões dentro dos limites estabelecidos.
                </p>

                {/* Segundo parágrafo sobre a história da empresa */}
                <p className="primary-text">
                    Nossa história começou com a paixão de criar um futuro sustentável, onde empresas e pessoas possam agir juntas para reduzir o impacto ambiental.
                </p>

                {/* Container do botão de call-to-action */}
                <div className="about-buttons-container">
                    <button 
                        className="secondary-button" 
                        onClick={() => {
                            // Previne comportamento de scroll
                            window.scrollTo(0, 0);
                            // Força navegação imediata para a página de login
                            window.history.pushState(null, null, '#login');
                            window.dispatchEvent(new HashChangeEvent('hashchange'));
                        }}
                    >
                        Junte-se a Nós
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About;