import React from 'react';
import './HomeAreaLogada.css';
import Card from './Card.jsx';
import NavBarLogado from './NavBarLogado.jsx';

// Importações de ícones do Material-UI
import {
  EmojiEvents,
  Dashboard,
  Park,
  WorkspacePremium
} from '@mui/icons-material';

/**
 * Componente HomeAreaLogada
 * 
 * Página principal da área logada do sistema EcoFisco.
 * Exibe informações de boas-vindas, funcionalidades disponíveis
 * e estatísticas do sistema para usuários autenticados.
 */
function HomeAreaLogada() {
  const handleNavigation = (page) => {
    // Função para navegação entre páginas
    console.log('Navegando para:', page);
    // Aqui você pode implementar a lógica de navegação
  };

  const handleLogout = () => {
    // Função para logout
    console.log('Fazendo logout...');
    // Aqui você pode implementar a lógica de logout
  };

  return (
    <div className="home-area-logada">
      <NavBarLogado 
        userName="João Silva"
        userCompany="EcoTech Solutions"
        onNavigate={handleNavigation}
        onLogout={handleLogout}
      />


      {/* Seção de Funcionalidades */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Funcionalidades Disponíveis</h2>
          <div className="features-grid">
            <Card
              icon={<EmojiEvents />}
              title="Ranking de Empresas"
              description="Veja quais empresas estão liderando em conformidade com os parâmetros de emissão estabelecidos."
              buttonText="Em Desenvolvimento"
              disabled={true}
            />

            <Card
              icon={<Dashboard />}
              title="Dashboard de Emissões"
              description="Monitore suas emissões mensais, limites estabelecidos e proximidade dos targets anuais de emissão."
              buttonText="Em Desenvolvimento"
              disabled={true}
            />

            <Card
              icon={<Park />}
              title="Projetos"
              description="Explore projetos disponíveis para compensação de carbono e contribua para um futuro mais sustentável."
              buttonText="Em Desenvolvimento"
              disabled={true}
            />

            <Card
              icon={<WorkspacePremium />}
              title="Resgate de Selos"
              description="Resgate selos de reconhecimento para empresas que mantêm emissões dentro da média anual estabelecida."
              buttonText="Em Desenvolvimento"
              disabled={true}
            />
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="stats-section">
        <div className="container">
          <h2 className="stats-title">Impacto do EcoFisco</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Empresas Atendidas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50M+</div>
              <div className="stat-label">CO₂ Compensado (kg)</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">250+</div>
              <div className="stat-label">Projetos Financiados</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeAreaLogada;