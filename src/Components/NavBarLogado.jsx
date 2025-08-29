import React from 'react';
import './NavBarLogado.css';
import Logo from '../assets/Images/Logo.svg';

// Importações de ícones do Material-UI
import {
  EmojiEvents,
  Dashboard,
  Park,
  WorkspacePremium,
  Person,
  Settings,
  ExitToApp,
  Close
} from '@mui/icons-material';

// Importações do Material-UI para menu responsivo
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

// Importação do ícone de menu hambúrguer
import { HiOutlineBars3 } from 'react-icons/hi2';

/**
 * Componente NavBarLogado
 * 
 * Barra de navegação específica para usuários logados no sistema EcoFisco.
 * Inclui navegação entre as funcionalidades disponíveis e informações do usuário.
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.userName - Nome do usuário logado
 * @param {string} props.userCompany - Nome da empresa do usuário
 * @param {function} props.onNavigate - Função para navegação entre páginas
 * @param {function} props.onLogout - Função para logout
 */
function NavBarLogado({ 
  userName = "Usuário", 
  userCompany = "Empresa", 
  onNavigate,
  onLogout 
}) {
  // Estado para controlar a abertura/fechamento do menu responsivo
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    // Fechar menu móvel após navegação
    setOpenMenu(false);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar-logado">
      <div className="navbar-container">
        {/* Logo do Sistema */}
        <div className="navbar-brand" onClick={handleLogoClick} style={{cursor: 'pointer'}}>
          <img 
            src={Logo} 
            alt="Logo EcoFisco" 
            className="brand-logo"
            width="100" 
            height="80"
            loading="eager"
          />
        </div>

        {/* Menu de Navegação */}
        <div className="navbar-menu">
          <button 
            className="nav-item"
            onClick={() => handleNavigation('ranking')}
          >
            <EmojiEvents className="nav-icon" />
            <span className="nav-text">Ranking</span>
          </button>
          
          <button 
            className="nav-item"
            onClick={() => handleNavigation('dashboard')}
          >
            <Dashboard className="nav-icon" />
            <span className="nav-text">Dashboard</span>
          </button>
          
          <button 
            className="nav-item"
            onClick={() => handleNavigation('projetos')}
          >
            <Park className="nav-icon" />
            <span className="nav-text">Projetos</span>
          </button>
          
          <button 
            className="nav-item"
            onClick={() => handleNavigation('selos')}
          >
            <WorkspacePremium className="nav-icon" />
            <span className="nav-text">Selos</span>
          </button>
        </div>

        {/* Informações do Usuário */}
        <div className="navbar-user">
          <div className="user-info">
            <div className="user-details">
              <span className="user-name">{userName}</span>
              <span className="user-company">{userCompany}</span>
            </div>
            <div className="user-avatar">
              <Person className="avatar-icon" />
            </div>
          </div>
          
          <div className="user-actions">
            <button className="action-btn" title="Configurações">
              <Settings className="action-icon" />
            </button>
            <button 
              className="action-btn logout-btn" 
              onClick={handleLogout}
              title="Sair"
            >
              <ExitToApp className="action-icon" />
            </button>
          </div>
        </div>

        {/* Ícone do menu hambúrguer para dispositivos móveis */}
        <div className='navbar-menu-container'>
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
      </div>

      {/* Menu responsivo (drawer) que desliza da direita */}
      <Drawer 
        open={openMenu} 
        onClose={() => setOpenMenu(false)} 
        anchor='right'
        sx={{
          // Estilos personalizados para o papel do drawer
          '& .MuiDrawer-paper': {
            width: 280,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fffe 50%, #f0fff4 100%)',
            borderLeft: 'none',
            boxShadow: '-6px 0 35px rgba(0, 0, 0, 0.15), -2px 0 15px rgba(72, 182, 0, 0.12), inset 1px 0 0 rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(20px) saturate(180%)',
          },
          // Estilos para o backdrop (fundo escuro)
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px) saturate(120%)',
          }
        }}
        transitionDuration={350}
      >
        {/* Container principal do conteúdo do drawer */}
        <Box
          sx={{ 
            width: 280,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
          role="presentation"
        >
          {/* Cabeçalho do drawer com botão de fechar */}
          <Box sx={{ 
            padding: '1.25rem 1.25rem 0.75rem 1.25rem', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(72, 182, 0, 0.1)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
          }}>
            {/* Informações do usuário no drawer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '35px',
                height: '35px',
                background: 'linear-gradient(135deg, #48b600, #61e300)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(72, 182, 0, 0.2)'
              }}>
                <Person style={{ fontSize: '1rem', color: 'white' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#000' }}>{userName}</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>{userCompany}</div>
              </div>
            </div>
            
            {/* Botão para fechar o drawer */}
            <IconButton 
              onClick={() => setOpenMenu(false)}
              sx={{ 
                color: '#666',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '12px',
                padding: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(72, 182, 0, 0.1)',
                  color: '#48b600',
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 15px rgba(72, 182, 0, 0.2)'
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <Close />
            </IconButton>
          </Box>
          
          {/* Lista de itens do menu com animações */}
          <List 
            sx={{ 
              flex: 1, 
              padding: '0.75rem 1.25rem',
              paddingTop: '1.25rem',
              '& .MuiListItem-root': {
                cursor: 'pointer'
              }
            }}
          >
            {/* Itens de navegação */}
            {[
              { text: 'Ranking', icon: <EmojiEvents />, page: 'ranking' },
              { text: 'Dashboard', icon: <Dashboard />, page: 'dashboard' },
              { text: 'Projetos', icon: <Park />, page: 'projetos' },
              { text: 'Selos', icon: <WorkspacePremium />, page: 'selos' }
            ].map((item, index) => (
              <ListItem 
                key={item.text} 
                disablePadding
                sx={{
                  marginBottom: '0.5rem',
                  // Animação de entrada com delay baseado no índice
                  animation: `slideInRight 0.4s ease-out ${index * 0.1}s both`,
                  '@keyframes slideInRight': {
                    '0%': {
                      transform: 'translateX(30px)',
                      opacity: 0
                    },
                    '100%': {
                      transform: 'translateX(0)',
                      opacity: 1
                    }
                  }
                }}
              >
                <ListItemButton 
                  onClick={() => handleNavigation(item.page)}
                  sx={{
                    borderRadius: '16px',
                    padding: '0.875rem 1.125rem',
                    color: '#2c3e50',
                    fontWeight: 500,
                    background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      backgroundColor: 'rgba(72, 182, 0, 0.08)',
                      borderColor: 'rgba(72, 182, 0, 0.3)',
                      transform: 'translateX(2px)',
                      '& .MuiListItemIcon-root': {
                        color: '#48b600',
                      },
                      '& .MuiListItemText-primary': {
                        color: '#224c0a',
                      },
                    },
                    '&:active': {
                      transform: 'translateX(1px) translateY(0px) scale(0.98)',
                      boxShadow: '0 4px 15px rgba(72, 182, 0, 0.15)'
                    }
                  }}
                >
                  <ListItemIcon 
                    sx={{ 
                      color: '#7f8c8d',
                      minWidth: '38px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '& svg': {
                        fontSize: '1.25rem',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '1rem',
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                        transition: 'all 0.2s ease'
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            
            {/* Separador */}
            <Box sx={{ 
              height: '1px', 
              background: 'rgba(72, 182, 0, 0.1)', 
              margin: '1rem 0' 
            }} />
            
            {/* Ações do usuário */}
            <ListItem disablePadding sx={{ marginBottom: '0.5rem' }}>
              <ListItemButton 
                sx={{
                  borderRadius: '16px',
                  padding: '0.875rem 1.125rem',
                  color: '#2c3e50',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
                  border: '1px solid #e8e8e8',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: 'rgba(72, 182, 0, 0.08)',
                    borderColor: 'rgba(72, 182, 0, 0.3)',
                    transform: 'translateX(2px)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#7f8c8d', minWidth: '38px' }}>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Configurações" />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
              <ListItemButton 
                onClick={handleLogout}
                sx={{
                  borderRadius: '16px',
                  padding: '0.875rem 1.125rem',
                  color: '#dc3545',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
                  border: '1px solid rgba(220, 53, 69, 0.2)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: 'rgba(220, 53, 69, 0.08)',
                    borderColor: 'rgba(220, 53, 69, 0.3)',
                    transform: 'translateX(2px)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#dc3545', minWidth: '38px' }}>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}

export default NavBarLogado;