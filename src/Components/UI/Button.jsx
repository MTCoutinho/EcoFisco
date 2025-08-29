// Importação do React
import React from 'react';

/**
 * Componente Button - Botão reutilizável com múltiplas variantes
 * 
 * @param {React.ReactNode} children - Conteúdo do botão (texto, ícones, etc.)
 * @param {string} variant - Variante visual do botão ('primary', 'secondary', 'login', 'signup')
 * @param {string} type - Tipo do botão HTML ('button', 'submit', 'reset')
 * @param {string} className - Classes CSS adicionais
 * @param {boolean} disabled - Se o botão está desabilitado
 * @param {Function} onClick - Função executada ao clicar no botão
 * @param {string} size - Tamanho do botão ('small', 'medium', 'large')
 * @param {Object} props - Outras propriedades HTML do botão
 * @returns {JSX.Element} Elemento de botão estilizado
 */
const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
  onClick,
  size = 'medium',
  ...props
}) => {
  /**
   * Gera as classes CSS baseadas nas props do componente
   * Combina classes de variante, tamanho e classes customizadas
   * @returns {string} String com todas as classes CSS aplicáveis
   */
  const getClassName = () => {
    const baseClass = 'btn';
    
    // Mapeamento das variantes para suas respectivas classes CSS
    const variantClass = {
      primary: 'primary-button',
      secondary: 'secondary-button',
      login: 'login-btn-unified',
      signup: 'signup-btn'
    }[variant];
    
    // Mapeamento dos tamanhos para suas respectivas classes CSS
    const sizeClass = {
      small: 'btn-small',
      medium: 'btn-medium',
      large: 'btn-large'
    }[size];
    
    // Combina todas as classes, removendo espaços extras
    return `${variantClass} ${sizeClass} ${className}`.trim();
  };

  return (
    <button
      type={type}
      className={getClassName()}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;