// Importações dos componentes de UI
import SecondaryButton from "./UI/SecondaryButton.jsx"
import Input from "./UI/Input.jsx"

/**
 * Componente Contact - Seção de contato da página inicial
 * 
 * Apresenta um formulário simples para os usuários entrarem em contato
 * com a empresa, contendo um campo de email e botão de envio.
 * 
 * @returns {JSX.Element} Seção de contato com formulário
 */
const Contact = () => {
    return(
        // Container principal da seção de contato
        <div id="contact" className="contact-page-wrapper">
            {/* Subtítulo da seção */}
            <p className="primary-subheading">Contate-nos</p>
            
            {/* Título principal */}
            <h1 className="primary-heading">Tem uma pergunta em mente?</h1>
            
            {/* Título secundário comentado - pode ser usado futuramente */}
            {/* <h2 className="primary-heading">Deixe-nos ajuda-los</h2> */}

            {/* Container do formulário de contato */}
            <div className="contact-form-container">
                {/* Campo de entrada para email */}
                <Input 
                    type="email" 
                    placeholder="seu_email@gmail.com"
                    className="contact-input"
                />
                
                {/* Botão de envio do formulário */}
                <SecondaryButton>Enviar</SecondaryButton>
            </div>
        </div>
    )
}

export default Contact