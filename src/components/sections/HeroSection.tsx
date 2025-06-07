import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import GlowEffect from '../ui/GlowEffect'

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-boppa-primary to-boppa-accent">
                BOPPA
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            What is a BOPPA?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" href="#minecraft" className="group">
              Join Minecraft Server
              <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="https://discord.gg/boppa"
              target="_blank"
              className="group"
            >
              Join Discord
              <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        ></motion.div>
      </Container>

      {/* Glow effects */}
      <GlowEffect color="rgb(109, 40, 217)" top="20%" left="20%" size="400px" />
      <GlowEffect color="rgb(236, 72, 153)" bottom="10%" right="15%" size="350px" />
    </section>
  )
}

export default HeroSection
