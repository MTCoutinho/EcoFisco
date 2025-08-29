// Importações do React
import React from 'react';

/**
 * Componente Checkbox - Caixa de seleção reutilizável com estilo personalizado
 * 
 * @param {string} id - ID único do checkbox
 * @param {string} name - Nome do campo para formulários
 * @param {boolean} checked - Estado de seleção do checkbox
 * @param {Function} onChange - Função chamada quando o estado muda
 * @param {string} label - Texto do rótulo do checkbox
 * @param {string} className - Classes CSS adicionais
 * @param {Object} props - Outras propriedades HTML do input checkbox
 * @returns {JSX.Element} Checkbox estilizado com rótulo
 */
const Checkbox = ({
  id,
  name,
  checked,
  onChange,
  label,
  className = '',
  ...props
}) => {
  return (
    // Container principal do checkbox com label
    <label className={`checkbox-unified ${className}`}>
      {/* Input checkbox nativo (oculto pelo CSS) */}
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {/* Checkmark personalizado visível */}
      <span className="checkmark-unified"></span>
      {/* Texto do rótulo */}
      {label}
    </label>
  );
};

export default Checkbox;