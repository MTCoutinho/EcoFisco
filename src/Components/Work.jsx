// Importações de ícones do FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faSeedling,    // Ícone de planta/sustentabilidade
    faChartLine,   // Ícone de gráfico/dashboard
    faPercent,     // Ícone de porcentagem/benefícios fiscais
    faAward        // Ícone de prêmio/certificação
} from '@fortawesome/free-solid-svg-icons';

/**
 * Componente Work - Seção "Nosso Trabalho" da página inicial
 * 
 * Apresenta os principais serviços e soluções oferecidos pela EcoFisco,
 * incluindo compensação de carbono, certificações, dashboard de monitoramento
 * e benefícios fiscais sustentáveis.
 * 
 * @returns {JSX.Element} Seção com os serviços da empresa
 */
const Work = () => {
    /**
     * Dados dos serviços oferecidos pela EcoFisco
     * Cada item contém ícone, título e descrição detalhada do serviço
     */
    const WorkInfoData = [
        {
            image: <FontAwesomeIcon icon={faSeedling} />,
            title: "Compensação de Carbono",
            text: <>
                Apoiamos instituições que realizam projetos de compensação de carbono para reduzir emissões.<br /><br />
                1 - Reflorestamento – plantio de árvores.<br /><br />
                2 - Energia Renovável – apoio a fontes limpas.<br /><br />
                3 - Eficiência Energética – redução de consumo e desperdício.
            </>
        },
        {
            image: <FontAwesomeIcon icon={faAward} />,
            title: "Selo de Reconhecimento Verde",
            text: <>
                Certificação oficial para empresas que mantêm suas emissões de CO2 dentro dos limites estabelecidos durante o ano.<br /><br />
                • Reconhecimento público da responsabilidade ambiental<br />
                • Diferencial competitivo no mercado<br />
                • Validação de práticas sustentáveis<br /><br />
                Um símbolo de compromisso com o futuro sustentável e responsabilidade corporativa.
            </>
        },
        {
            image: <FontAwesomeIcon icon={faChartLine}/>,
            title: "Dashboard de Monitoramento",
            text: <>
                Oferecemos um painel interativo que apresenta dados como:<br /><br />
                • Emissões mensais<br />
                • Status em relação ao limite estabelecido<br />
                • Entre Outros...<br /><br />
                Dessa forma, permitindo o acompanhamento transparente, desempenho ambiental e tomada de decisões estratégicas
            </>
        },
        {
            image: <FontAwesomeIcon icon={faPercent} />,
            title: "Benefícios Fiscais Sustentáveis",
            text: <>
                Oferecemos benefícios fiscais estratégicos para empresas que mantêm suas emissões de carbono dentro dos limites estabelecidos.<br /><br />
                Nosso propósito é tornar a sustentabilidade um diferencial competitivo, unindo vantagem financeira e responsabilidade ambiental.
            </>
        }
    ];

    return (
        // Container principal da seção Work
        <div id="work" className="work-section-wrapper">
            {/* Seção superior com título e descrição geral */}
            <div className="work-section-top">
                {/* Subtítulo da seção */}
                <p className="primary-subheading">Nosso Trabalho</p>
                
                {/* Título principal */}
                <h1 className="primary-heading">Como apoiamos sua jornada</h1>
                
                {/* Descrição geral dos serviços */}
                <p className="primary-text">
                    Proporcionar às empresas soluções integradas de sustentabilidade, combinando projetos de compensação de carbono, 
                    benefícios fiscais para emissões dentro do limite e dashboards que permitem acompanhar o desempenho ambiental de forma clara e estratégica.
                </p>
            </div>

            {/* Seção inferior com cards dos serviços */}
            <div className="work-section-bottom">
                {/* Mapeamento dos dados para criar cards de serviços */}
                {WorkInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        {/* Container do ícone do serviço */}
                        <div className="info-boxes-img-container">{data.image}</div>
                        
                        {/* Título do serviço */}
                        <h2>{data.title}</h2>
                        
                        {/* Descrição detalhada do serviço */}
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;