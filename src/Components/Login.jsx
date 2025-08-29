// Importações do React
import React, { useState } from 'react';

// Importações de ícones do Material-UI
import { Person, Lock } from '@mui/icons-material';

// Importação dos estilos globais
import '../Globals.css';

// Importação dos componentes de layout
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

// Importação dos componentes de UI
import Input from './UI/Input.jsx';
import VariantButton from './UI/VariantButton.jsx';
import Checkbox from './UI/Checkbox.jsx';
import Link from './UI/Link.jsx';

/**
 * Componente de Login/Autenticação
 * 
 * Permite que usuários existentes façam login na plataforma EcoFisco.
 * Inclui opções de "lembrar de mim" e recuperação de senha.
 * 
 * Funcionalidades:
 * - Formulário de login com validação
 * - Opção "Lembrar de mim"
 * - Link para recuperação de senha
 * - Interface responsiva
 */
const Login = () => {
  // Estado para armazenar os dados do formulário de login
  const [formData, setFormData] = useState({
    email: '',        // E-mail do usuário
    password: '',     // Senha do usuário
    rememberMe: false // Opção para manter login ativo
  });

  /**
   * Manipula mudanças nos campos do formulário
   * Atualiza o estado do formulário com os novos valores
   * @param {Event} e - Evento de mudança do input
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Atualiza o estado do formulário com o novo valor
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Manipula o envio do formulário de login
   * Processa a autenticação do usuário
   * @param {Event} e - Evento de submit do formulário
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Implementar integração com API de autenticação
    console.log('Login attempt:', formData);
  };

  return (
    <div className="unified-login-page">
      {/* Barra de navegação */}
      <NavBar />
      
      {/* Container principal da página */}
      <div className="unified-login-container">
        {/* Seção de boas-vindas */}
        <div className="welcome-section">
          <div className="welcome-content">
            <div className="welcome-header">
              <h1 className="welcome-title">Bem-vindo<br />de volta!</h1>
              <h2 className="welcome-subtitle">Sua plataforma de compensação de carbono com incentivo fiscal</h2>
            </div>
            <div className="welcome-description">
              <p>Acesse e acompanhe suas iniciativas sustentáveis, monitore suas emissões e conquiste reconhecimento por suas ações em prol do meio ambiente.</p>
            </div>
          </div>
        </div>
        
        {/* Área do formulário de login */}
        <div className="login-form-area">
          <div className="login-card-unified">
            {/* Cabeçalho do formulário */}
            <div className="login-header-unified">
              <h2 className="login-title-unified">Fazer Login</h2>
              <p className="login-subtitle-unified">Insira suas credenciais para acessar</p>
            </div>

            {/* Formulário de login */}
            <form className="login-form-unified" onSubmit={handleSubmit}>
              {/* Campo: E-mail */}
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleInputChange}
                icon={Person}
                validation="email"
                required
              />

              {/* Campo: Senha */}
              <Input
                type="password"
                id="password"
                name="password"
                label="Senha"
                value={formData.password}
                onChange={handleInputChange}
                icon={Lock}
                showPasswordToggle
                required
              />

              {/* Opções de login: Lembrar de mim e Esqueceu a senha */}
              <div className="login-options-unified">
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  label="Lembrar de mim"
                />
                <Link href="#forgot" variant="forgot">
                  Esqueceu a senha?
                </Link>
              </div>

              {/* Botão de envio do formulário */}
              <VariantButton type="submit" variant="login">
                Acessar
              </VariantButton>
            </form>

            {/* Seção para usuários que não possuem conta */}
            <div className="signup-section-unified">
              <p className="signup-text-unified">
                Não possui conta? 
                <Link href="#register" variant="signup">
                  Cadastre-se aqui
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rodapé da página */}
      <Footer />
    </div>
  );
};

export default Login;