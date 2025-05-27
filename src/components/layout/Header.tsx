import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { NavItem } from '../../types'

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Minecraft', href: '#minecraft' },
  { label: 'Discord', href: '#discord' },
]

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-boppa-darker/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/img/boppa_icon.png"
              alt="Boppa Logo"
              style={{ width: '51px', height: '42px' }}
              className="mr-2"
            />
            <span className="font-display text-2xl font-bold text-white tracking-wider">BOPPA</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="accent" size="sm" href="https://discord.gg/boppa" target="_blank">
                Join Discord
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white font-medium transition-colors block py-2"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  variant="accent"
                  size="sm"
                  href="https://discord.gg/boppa"
                  target="_blank"
                  className="w-full"
                >
                  Join Discord
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
