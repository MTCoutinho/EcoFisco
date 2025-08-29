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
export { default as Button } from './Button';                 // Botão genérico com variantes
export { default as PrimaryButton } from './PrimaryButton';   // Botão com estilo primário
export { default as SecondaryButton } from './SecondaryButton'; // Botão com estilo secundário

// Componentes de formulário
export { default as Input } from './Input';                   // Campo de entrada com validação
export { default as Checkbox } from './Checkbox';             // Caixa de seleção personalizada

// Componentes de navegação
export { default as Link } from './Link';                     // Link com variantes de estilo

// === RE-EXPORTAÇÕES PARA ACESSO COMPLETO ===
// Permite acesso a todas as exportações nomeadas dos módulos
export * from './Button';
export * from './PrimaryButton';
export * from './SecondaryButton';
export * from './Input';
export * from './Checkbox';
export * from './Link';