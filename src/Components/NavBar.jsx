// Importações do React
import React from 'react'

// Importações de assets
import Logo from '../assets/Images/Logo.svg'

// Importações de ícones
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';

// Importações do Material-UI
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

// Importações de componentes UI personalizados
import { Link, VariantButton } from './UI/index.js';

/**
 * Componente NavBar - Barra de navegação principal da aplicação
 * 
 * Funcionalidades:
 * - Navegação principal com links para diferentes seções
 * - Logo clicável que redireciona para a home
 * - Botão de login
 * - Menu responsivo (drawer) para dispositivos móveis
 * - Animações e estilos personalizados
 * 
 * @returns {JSX.Element} Componente da barra de navegação
 */
const NavBar = () => {
    // Estado para controlar a abertura/fechamento do menu responsivo
    const [openMenu, setOpenMenu] = React.useState(false)
    // Configuração das opções do menu responsivo
    // Cada item contém texto, ícone e link de destino
    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            href: '#'
        },
        {
            text: "Sobre Nós",
            icon: <InfoIcon />,
            href: '#about'
        },
        {
            text: "Nosso Trabalho",
            icon: <HomeWorkIcon />,
            href: '#work'
        },
        {
            text: "Contato",
            icon: <PhoneRoundedIcon />,
            href: '#contact'
        },
        {
            text: "Login",
            icon: <LoginIcon />,
            href: '#login'
        },
    ]

    return (
        // Container principal da barra de navegação
        <nav className='navbar'>
            {/* Logo da empresa - clicável para voltar à home */}
            <div className="nav-logo-container" onClick={() => window.location.hash = ''} style={{ cursor: 'pointer' }}>
                <img 
                    src={Logo} 
                    alt="Imagem de Logo EcoFisco" 
                    width="140" 
                    height="140"
                    loading="eager"
                />
            </div>

            {/* Container dos links de navegação principal */}
            <div className='navbar-links-container'>
                <Link href="#" variant="nav">Home</Link>
                <Link href="#about" variant="nav">Sobre Nós</Link>
                <Link href="#work" variant="nav">Nosso Trabalho</Link>
                <Link href="#contact" variant="nav">Contato</Link>
            </div>

            {/* Container do botão de login */}
            <div className='navbar-login-container'>
                <VariantButton variant="primary" onClick={() => window.location.hash = 'login'}>LOGIN</VariantButton>
            </div>

            {/* Ícone do menu hambúrguer para dispositivos móveis */}
            <div className='nav-bar-menu-container'>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
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
                        boxShadow: '-6px 0 35px rgba(0, 0, 0, 0.15), -2px 0 15px rgba(76, 175, 80, 0.12), inset 1px 0 0 rgba(255, 255, 255, 0.2)',
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
                        justifyContent: 'flex-end',
                        borderBottom: '1px solid rgba(76, 175, 80, 0.1)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                    }}>
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
                                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                    color: '#4CAF50',
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 4px 15px rgba(76, 175, 80, 0.2)'
                                },
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <CloseIcon />
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
                        onClick={() => setOpenMenu(false)}
                        onKeyDown={() => setOpenMenu(false)}
                    >
                        {/* Mapeamento dos itens do menu com animação escalonada */}
                        {menuOptions.map((item, index) => (
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
                                {/* Botão clicável do item do menu */}
                                <ListItemButton 
                                    component="a" 
                                    href={item.href}
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
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(76, 175, 80, 0.1), transparent)',
                            transition: 'left 0.5s ease'
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(76, 175, 80, 0.08)',
                            borderColor: 'rgba(76, 175, 80, 0.3)',
                            transform: 'translateX(2px)',
                            '& .MuiListItemIcon-root': {
                                color: '#4CAF50',
                            },
                            '& .MuiListItemText-primary': {
                                color: '#2E7D32',
                            },
                        },
                        '&:active': {
                            transform: 'translateX(1px) translateY(0px) scale(0.98)',
                            boxShadow: '0 4px 15px rgba(76, 175, 80, 0.15)'
                        }
                                    }}
                                >
                                    {/* Ícone do item do menu */}
                                    <ListItemIcon 
                                        sx={{ 
                                            color: '#7f8c8d',
                                            minWidth: '38px',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            position: 'relative',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                width: '0',
                                                height: '0',
                                                borderRadius: '50%',
                                                background: 'radial-gradient(circle, rgba(76, 175, 80, 0.3) 0%, transparent 70%)',
                                                transform: 'translate(-50%, -50%)',
                                                transition: 'all 0.4s ease',
                                                zIndex: -1
                                            },
                                            '& svg': {
                                                fontSize: '1.25rem',
                                                filter: 'drop-shadow(0 0 0 transparent)',
                                                transition: 'all 0.3s ease'
                                            }
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    {/* Texto do item do menu */}
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
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}

export default NavBar