import React from 'react'
import { motion } from 'framer-motion'
import { Cuboid as Cube, Server, AlertTriangle } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import GlowEffect from '../ui/GlowEffect'

const MinecraftSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="minecraft" className="relative py-24 overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Minecraft
              </span>{' '}
              Server
            </h2>
            <p className="text-gray-300 mb-6">
              Join our private modded Minecraft server where we've created an immersive world for
              our community. Build, explore, and connect with fellow BOPPA members in this carefully
              crafted modpack.
            </p>
            <div className="bg-boppa-dark/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-8">
              <h3 className="flex items-center text-xl font-medium mb-4 text-gray-100">
                <Server className="mr-2 text-emerald-400" size={20} />
                Server Details
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-24 text-gray-400">Address:</span>
                  <span className="font-mono bg-gray-800 px-2 py-1 rounded text-sm">
                    mc.boppa.net
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-24 text-gray-400">Version:</span>
                  <span>1.21.4</span>
                </li>
                <li className="flex items-center">
                  <span className="w-24 text-gray-400">Type:</span>
                  <span>Survival</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="text-amber-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-amber-500 font-medium mb-1 flex items-center font-extrabold">
                    Important Notice
                  </h4>
                  <p className="text-amber-100/80 text-sm">
                    You must be connected to the private Radmin VPN reverse tunnel to access the
                    server. Join the Discord server for detailed connection instructions.
                  </p>
                </div>
              </div>
            </div>
            <Button
              variant="primary"
              size="lg"
              icon={<Cube />}
              href="minecraft://connect/mc.boppa.net"
              className="w-full sm:w-auto"
            >
              Connect to Server
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-lg overflow-hidden border-4 border-gray-800 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-video bg-gradient-to-br from-emerald-900/40 to-emerald-600/20 backdrop-blur-sm flex items-center justify-center">
                <img
                  src="img\literally_tom.png"
                  alt="Minecraft landscape"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cube size={80} className="text-white opacity-80" />
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-emerald-600/20 rounded-lg"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg opacity-30 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg opacity-20 blur-lg"></div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Glow effects */}
      <GlowEffect
        color="rgb(16, 185, 129)" // emerald color
        bottom="10%"
        left="5%"
        size="300px"
        opacity="0.12"
      />
    </section>
  )
}

export default MinecraftSection
