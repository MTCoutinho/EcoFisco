// Importações do React
import React, { useState } from 'react';

// Importações de ícones do Material-UI
import { Person, Business, Email, Lock, LockOutlined } from '@mui/icons-material';

// Importação dos estilos globais
import '../Globals.css';

// Importação dos componentes de layout
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

// Importação dos componentes de UI
import Input from './UI/Input.jsx';
import VariantButton from './UI/VariantButton.jsx';
import Link from './UI/Link.jsx';

/**
 * Componente de Registro/Cadastro
 * 
 * Permite que novos usuários criem uma conta na plataforma EcoFisco.
 * Inclui validação em tempo real, máscaras de input e verificação de senhas.
 * 
 * Funcionalidades:
 * - Formulário de cadastro com validação
 * - Validação em tempo real de confirmação de senha
 * - Máscaras para CNPJ e nome
 * - Interface responsiva
 */
const Register = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    responsibleName: '', // Nome do responsável pela empresa
    cnpj: '',           // CNPJ da empresa
    email: '',          // E-mail de acesso
    password: '',       // Senha de acesso
    confirmPassword: '' // Confirmação da senha
  });

  // Estado para armazenar erros de validação
  const [errors, setErrors] = useState({});

  /**
   * Valida se a senha e confirmação de senha são iguais
   * @param {string} password - Senha principal
   * @param {string} confirmPassword - Confirmação da senha
   * @returns {boolean} - True se as senhas coincidem
   */
  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  /**
   * Manipula mudanças nos campos do formulário
   * Atualiza o estado do formulário e executa validações em tempo real
   * @param {Event} e - Evento de mudança do input
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Atualiza o estado do formulário com o novo valor
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpa erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Validação em tempo real para confirmação de senha
    if (name === 'confirmPassword' || (name === 'password' && formData.confirmPassword)) {
      const password = name === 'password' ? value : formData.password;
      const confirmPassword = name === 'confirmPassword' ? value : formData.confirmPassword;
      
      // Verifica se as senhas coincidem
      if (confirmPassword && !validateConfirmPassword(password, confirmPassword)) {
        setErrors(prev => ({
          ...prev,
          confirmPassword: 'As senhas não coincidem'
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          confirmPassword: ''
        }));
      }
    }
  };

  /**
   * Manipula o envio do formulário de cadastro
   * Executa validação final e processa os dados do formulário
   * @param {Event} e - Evento de submit do formulário
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação final antes do envio
    const newErrors = {};
    
    // Verifica se as senhas coincidem
    if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    
    // Se houver erros, exibe-os e interrompe o envio
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // TODO: Implementar integração com API de cadastro
    console.log('Register attempt:', formData);
  };

  return (
    <div className="unified-login-page">
      {/* Barra de navegação */}
      <NavBar />
      
      {/* Container principal da página */}
      <div className="unified-login-container">
        {/* Seção de boas-vindas com informações sobre a plataforma */}
        <div className="welcome-section">
          <div className="welcome-content">
            <div className="welcome-header">
              <h1 className="welcome-title">Faça parte<br />da Mudança!</h1>
              <h2 className="welcome-subtitle">Sua plataforma de compensação de carbono com incentivo fiscal</h2>
            </div>
            <div className="welcome-description">
              <p>Crie sua conta e comece a fazer a diferença para o meio ambiente enquanto obtém benefícios fiscais para sua empresa.</p>
            </div>
          </div>
        </div>
        
        {/* Área do formulário de cadastro */}
        <div className="login-form-area">
          <div className="login-card-unified">
            {/* Cabeçalho do formulário */}
            <div className="login-header-unified">
              <h2 className="login-title-unified">Criar Conta</h2>
              <p className="login-subtitle-unified">Preencha os dados para se cadastrar</p>
            </div>

            {/* Formulário de cadastro */}
            <form className="login-form-unified" onSubmit={handleSubmit}>
              {/* Campo: Nome do responsável */}
              <Input
                type="text"
                id="responsibleName"
                name="responsibleName"
                label="Nome do Responsável"
                value={formData.responsibleName}
                onChange={handleInputChange}
                icon={Person}
                validation="name"
                mask="name"
                required
              />

              {/* Campo: CNPJ da empresa */}
              <Input
                type="text"
                id="cnpj"
                name="cnpj"
                label="CNPJ"
                value={formData.cnpj}
                onChange={handleInputChange}
                icon={Business}
                mask="cnpj"
                validation="cnpj"
                required
              />

              {/* Campo: E-mail de acesso */}
              <Input
                type="email"
                id="email"
                name="email"
                label="Endereço de e-mail"
                value={formData.email}
                onChange={handleInputChange}
                icon={Email}
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
                validation="password"
                showPasswordToggle
                required
              />

              {/* Campo: Confirmação de senha */}
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                label="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                icon={LockOutlined}
                showPasswordToggle
                errorMessage={errors.confirmPassword}
                showError={!!errors.confirmPassword}
                required
              />

              {/* Botão de envio do formulário */}
              <VariantButton type="submit" variant="login">
                Criar Conta
              </VariantButton>
            </form>

            {/* Seção para usuários que já possuem conta */}
            <div className="signup-section-unified">
              <p className="signup-text-unified">
                Já possui conta? 
                <Link href="#login" variant="signup">
                  Faça login aqui
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

export default Register;