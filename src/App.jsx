// Importações do React
import { useState, useEffect } from 'react'

// Importação dos estilos globais
import './Globals.css'

// Importação dos componentes principais
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Work from './Components/Work.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

// Importação dos componentes de autenticação
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import HomeAreaLogada from './Components/HomeAreaLogada.jsx'

/**
 * Componente principal da aplicação EcoFisco
 * 
 * Gerencia o roteamento baseado em hash da URL e renderiza
 * os componentes apropriados baseado na página atual.
 * 
 * Páginas disponíveis:
 * - home: Página inicial com todas as seções
 * - home-logada: Área logada após autenticação
 * - login: Página de login
 * - register: Página de cadastro
 */
function App() {
  // Estado para controlar a página atual baseada no hash da URL
  const [currentPage, setCurrentPage] = useState('home')

  /**
   * Effect para gerenciar mudanças no hash da URL
   * Configura o listener para mudanças de hash e define a página inicial
   */
  useEffect(() => {
    /**
     * Função para lidar com mudanças no hash da URL
     * Extrai o hash da URL e define como página atual
     */
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'home'
      setCurrentPage(hash)
    }

    // Define a página inicial baseada no hash atual
    handleHashChange()
    
    // Adiciona listener para mudanças de hash
    window.addEventListener('hashchange', handleHashChange)
    
    // Cleanup: remove o listener quando o componente é desmontado
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Renderização condicional para página de login
  if (currentPage === 'login') {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }

  // Renderização condicional para página de cadastro
  if (currentPage === 'register') {
    return (
      <div className="App">
        <Register />
      </div>
    )
  }

  // Renderização condicional para área logada
  if (currentPage === 'home-logada') {
    return (
      <div className="App">
        <HomeAreaLogada />
      </div>
    )
  }

  // Renderização da página principal com todas as seções
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App