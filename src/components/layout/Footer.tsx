import React from 'react'
import Container from '../ui/Container'
import { Github, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-boppa-darker py-8 border-t border-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/src/img/boppa_icon.png"
              alt="Boppa Logo"
              style={{ width: '43px', height: '35px' }}
              className="mr-2"
            />
            <span className="font-display text-xl font-bold text-white">BOPPA</span>
          </div>

          <div className="text-gray-400 text-sm">
            <p className="mt-1 text-center">© {currentYear} BOPPA. All rights reserved.</p>
          </div>

          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="https://github.com/joobert/BOPPAnet"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
