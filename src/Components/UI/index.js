/**
 * Arquivo de exportação centralizada dos componentes de UI
 * 
 * Este arquivo facilita a importação dos componentes de UI em outras partes da aplicação.
 * Permite importar múltiplos componentes de uma só vez:
 * 
 * Exemplo de uso:
 * import { Button, Input, Checkbox } from '../Components/UI';
 */

// === EXPORTAÇÕES NOMEADAS DOS COMPONENTES ===
// Componentes de botão
export { default as VariantButton } from './VariantButton';                 // Botão genérico com variantes
export { default as ActionButton } from './ActionButton'; // Botão com estilo secundário

// Componentes de formulário
export { default as Input } from './Input';                   // Campo de entrada com validação
export { default as Checkbox } from './Checkbox';             // Caixa de seleção personalizada

// Componentes de navegação
export { default as Link } from './Link';                     // Link com variantes de estilo

// === RE-EXPORTAÇÕES PARA ACESSO COMPLETO ===
// Permite acesso a todas as exportações nomeadas dos módulos
export * from './VariantButton';
export * from './ActionButton';
export * from './Input';
export * from './Checkbox';
export * from './Link';