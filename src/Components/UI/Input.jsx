// Importações do React
import React, { useState } from 'react';

// Importações de ícones do Material-UI
import { Visibility, VisibilityOff } from '@mui/icons-material';

/**
 * Função para aplicar máscara de CNPJ no formato 00.000.000/0000-00
 * @param {string} value - Valor a ser mascarado
 * @returns {string} Valor com máscara aplicada
 */
const applyCNPJMask = (value) => {
  // Remove todos os caracteres não numéricos
  const cleanValue = value.replace(/\D/g, '');
  
  // Aplica a máscara 00.000.000/0000-00
  if (cleanValue.length <= 2) {
    return cleanValue;
  } else if (cleanValue.length <= 5) {
    return cleanValue.replace(/(\d{2})(\d+)/, '$1.$2');
  } else if (cleanValue.length <= 8) {
    return cleanValue.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2.$3');
  } else if (cleanValue.length <= 12) {
    return cleanValue.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, '$1.$2.$3/$4');
  } else {
    return cleanValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, '$1.$2.$3/$4-$5');
  }
};

// ===== FUNÇÕES DE VALIDAÇÃO =====

/**
 * Valida formato de email
 * @param {string} email - Email a ser validado
 * @returns {boolean} True se o email é válido
 */
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida senha com critérios de segurança
 * Mínimo 8 caracteres, pelo menos uma maiúscula, uma minúscula e um número
 * @param {string} password - Senha a ser validada
 * @returns {boolean} True se a senha atende aos critérios
 */
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Valida CNPJ usando algoritmo oficial brasileiro
 * @param {string} cnpj - CNPJ a ser validado (com ou sem máscara)
 * @returns {boolean} True se o CNPJ é válido
 */
const validateCNPJ = (cnpj) => {
  // Remove caracteres não numéricos
  const cleanCNPJ = cnpj.replace(/\D/g, '');
  
  // Verifica se tem 14 dígitos
  if (cleanCNPJ.length !== 14) return false;
  
  // Verifica se não são todos os dígitos iguais
  if (/^(\d)\1{13}$/.test(cleanCNPJ)) return false;
  
  // Validação dos dígitos verificadores
  let sum = 0;
  let weight = 5;
  
  // Primeiro dígito verificador
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanCNPJ[i]) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  
  let digit1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (parseInt(cleanCNPJ[12]) !== digit1) return false;
  
  // Segundo dígito verificador
  sum = 0;
  weight = 6;
  
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleanCNPJ[i]) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  
  let digit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return parseInt(cleanCNPJ[13]) === digit2;
};

/**
 * Valida nome com critério mínimo de caracteres
 * @param {string} name - Nome a ser validado
 * @returns {boolean} True se o nome tem pelo menos 2 caracteres
 */
const validateName = (name) => {
  return name.trim().length >= 2;
};

/**
 * Componente Input - Campo de entrada reutilizável com validação e máscaras
 * 
 * @param {string} type - Tipo do input HTML ('text', 'email', 'password', etc.)
 * @param {string} id - ID único do input
 * @param {string} name - Nome do campo para formulários
 * @param {string} label - Rótulo do campo
 * @param {string} placeholder - Texto de placeholder
 * @param {string} value - Valor atual do input
 * @param {Function} onChange - Função chamada quando o valor muda
 * @param {boolean} required - Se o campo é obrigatório
 * @param {React.Component} icon - Ícone a ser exibido no campo
 * @param {string} className - Classes CSS adicionais
 * @param {boolean} showPasswordToggle - Se deve mostrar botão de alternar visibilidade da senha
 * @param {string} mask - Tipo de máscara a aplicar ('cnpj', 'name')
 * @param {string} validation - Tipo de validação ('email', 'password', 'cnpj', 'name')
 * @param {string} errorMessage - Mensagem de erro personalizada
 * @param {boolean} showError - Se deve forçar exibição de erro
 * @param {Object} props - Outras propriedades HTML do input
 * @returns {JSX.Element} Campo de entrada estilizado com validação
 */
const Input = ({
  type = 'text',
  id,
  name,
  label,
  placeholder = ' ',
  value,
  onChange,
  required = false,
  icon: Icon,
  className = '',
  showPasswordToggle = false,
  mask,
  validation,
  errorMessage,
  showError = false,
  ...props
}) => {
  // Estados do componente
  const [showPassword, setShowPassword] = useState(false);     // Controla visibilidade da senha
  const [isValid, setIsValid] = useState(true);                // Controla estado de validação
  const [validationError, setValidationError] = useState('');  // Mensagem de erro de validação

  // Determina o tipo do input baseado no estado de visibilidade da senha
  const inputType = type === 'password' && showPasswordToggle && showPassword ? 'text' : type;
  const isPasswordField = type === 'password' && showPasswordToggle;

  /**
   * Manipula evento de perda de foco do input
   * Executa validação se houver valor no campo
   */
  const handleBlur = (e) => {
    // Valida no blur apenas se há valor
    if (e.target.value) {
      validateInput(e.target.value);
    }
    if (props.onBlur) props.onBlur(e);
  };

  /**
   * Executa validação do valor do input baseado no tipo especificado
   * @param {string} value - Valor a ser validado
   * @returns {boolean} True se o valor é válido
   */
  const validateInput = (value) => {
    if (!validation || !value) {
      setIsValid(true);
      setValidationError('');
      return true;
    }

    let valid = true;
    let error = '';

    // Switch para diferentes tipos de validação
    switch (validation) {
      case 'email':
        valid = validateEmail(value);
        error = valid ? '' : 'Por favor, insira um email válido';
        break;
      case 'password':
        valid = validatePassword(value);
        error = valid ? '' : 'A senha deve ter pelo menos 8 caracteres, incluindo maiúscula, minúscula e número';
        break;
      case 'cnpj':
        valid = validateCNPJ(value);
        error = valid ? '' : 'Por favor, insira um CNPJ válido';
        break;
      case 'name':
        valid = validateName(value);
        error = valid ? '' : 'O nome deve ter pelo menos 2 caracteres';
        break;
      default:
        valid = true;
        error = '';
    }

    // Atualiza estados de validação
    setIsValid(valid);
    setValidationError(error);
    return valid;
  };

  /**
   * Manipula mudanças no valor do input
   * Aplica máscaras, executa validação e chama onChange
   * @param {Event} e - Evento de mudança do input
   */
  const handleChange = (e) => {
    let newValue = e.target.value;
    
    // Aplica máscara se especificada
    if (mask === 'cnpj') {
      newValue = applyCNPJMask(newValue);
      // Limita a 18 caracteres (14 dígitos + 4 caracteres de formatação)
      if (newValue.length > 18) {
        newValue = newValue.substring(0, 18);
      }
    } else if (mask === 'name') {
      // Remove números e caracteres especiais, mantém apenas letras, espaços e acentos
      newValue = newValue.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    }
    
    // Valida o input
    validateInput(newValue);
    
    // Cria um novo evento com o valor mascarado
    const maskedEvent = {
      ...e,
      target: {
        ...e.target,
        value: newValue,
        name: e.target.name
      }
    };
    
    // Chama função onChange do componente pai
    onChange(maskedEvent);
  };

  const hasError = showError || (!isValid && validationError);
  const displayError = errorMessage || validationError;

  return (
    // Container principal do input
    <div className={`input-group-unified ${className} ${hasError ? 'error' : ''}`}>
      {/* Campo de entrada principal */}
      <input
        type={inputType}
        id={id}
        name={name}
        className={`input-unified ${hasError ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        {...props}
      />
      {/* Label do campo */}
      {label && (
        <label htmlFor={id} className="input-label-unified">
          {label}
        </label>
      )}
      {/* Ícone do campo */}
      {Icon && (
        <span className="input-icon-unified">
          <Icon />
        </span>
      )}
      {/* Botão de alternar visibilidade da senha */}
      {isPasswordField && (
        <button
          type="button"
          className="password-toggle-unified"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </button>
      )}
      {/* Mensagem de erro de validação */}
      {hasError && displayError && (
        <span className="input-error-message">{displayError}</span>
      )}
    </div>
  );
};

export default Input;