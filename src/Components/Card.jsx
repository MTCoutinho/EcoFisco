import React from 'react';
import './Card.css';

/**
 * Componente Card
 * 
 * Componente reutilizável para exibir cards de funcionalidades
 * na área logada do sistema EcoFisco.
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.icon - Emoji ou ícone a ser exibido
 * @param {string} props.title - Título da funcionalidade
 * @param {string} props.description - Descrição da funcionalidade
 * @param {string} props.buttonText - Texto do botão (padrão: "Em Desenvolvimento")
 * @param {boolean} props.disabled - Se o botão está desabilitado (padrão: true)
 * @param {function} props.onClick - Função a ser executada ao clicar no botão
 * @param {string} props.className - Classes CSS adicionais
 */
function Card({ 
  icon, 
  title, 
  description, 
  buttonText = "Em Desenvolvimento", 
  disabled = true, 
  onClick,
  className = ""
}) {
  return (
    <div className={`feature-card ${className}`}>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button 
        className="card-button" 
        disabled={disabled}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;