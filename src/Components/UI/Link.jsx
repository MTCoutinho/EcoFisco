// Importações do React
import React from 'react';

/**
 * Componente Link - Link reutilizável com diferentes variantes de estilo
 * 
 * @param {string} href - URL de destino do link
 * @param {React.ReactNode} children - Conteúdo do link
 * @param {string} className - Classes CSS adicionais
 * @param {string} variant - Variante do estilo ('default', 'forgot', 'signup', 'nav')
 * @param {Function} onClick - Função chamada ao clicar no link
 * @param {Object} props - Outras propriedades HTML do elemento âncora
 * @returns {JSX.Element} Link estilizado
 */
const Link = ({
  href,
  children,
  className = '',
  variant = 'default',
  onClick,
  ...props
}) => {
  /**
   * Gera as classes CSS baseadas na variante e classes adicionais
   * @returns {string} String com todas as classes CSS
   */
  const getClassName = () => {
    const baseClass = 'link';
    
    // Mapeamento das variantes para suas respectivas classes CSS
    const variantClass = {
      default: '',                    // Estilo padrão
      forgot: 'forgot-link-unified',  // Estilo para link "Esqueci minha senha"
      signup: 'signup-link-unified',  // Estilo para link de cadastro
      nav: 'nav-link'                 // Estilo para links de navegação
    }[variant];
    
    return `${baseClass} ${variantClass} ${className}`.trim();
  };

  return (
    // Link principal com classes dinâmicas
    <a
      href={href}
      className={getClassName()}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;