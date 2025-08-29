// Importações do React
import React from 'react';

/**
 * Componente PrimaryButton - Botão principal com estilo primário
 * 
 * @param {React.ReactNode} children - Conteúdo do botão (texto, ícones, etc.)
 * @param {string} className - Classes CSS adicionais
 * @param {string} type - Tipo do botão HTML ('button', 'submit', 'reset')
 * @param {boolean} disabled - Se o botão está desabilitado
 * @param {Function} onClick - Função chamada ao clicar no botão
 * @param {Object} props - Outras propriedades HTML do botão
 * @returns {JSX.Element} Botão com estilo primário
 */
const PrimaryButton = ({ 
  children, 
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...props 
}) => (
  // Botão principal com estilo primário
  <button 
    className={`primary-button ${className}`.trim()}
    type={type}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;