import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Users, Headphones } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import GlowEffect from '../ui/GlowEffect'

const DiscordSection: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare size={24} className="text-indigo-400" />,
      title: 'Chat Channels',
      description: 'Dedicated channels to rot with fellow BOPPA members',
    },
    {
      icon: <Users size={24} className="text-indigo-400" />,
      title: 'Community Events',
      description: "Regular in-house tournaments n' stuff",
    },
    {
      icon: <Headphones size={24} className="text-indigo-400" />,
      title: 'Voice Channels',
      description: 'High-quality voice chat to bless your ears',
    },
  ]

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
    <section id="discord" className="relative py-24 overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1 relative">
            <div className="relative rounded-lg overflow-hidden border-4 border-gray-800 shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-video bg-gradient-to-br from-indigo-900/40 to-indigo-600/20 backdrop-blur-sm flex items-center justify-center">
                <img
                  src="src\img\discussion.png"
                  alt="Gaming community"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 71 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80"
                  >
                    <path
                      d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-indigo-600/20 rounded-lg"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg opacity-30 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg opacity-20 blur-lg"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Join Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                Discord
              </span>{' '}
              Community
            </h2>
            <p className="text-gray-300 mb-8">Connect with other BOPPA members.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-boppa-dark/60 backdrop-blur-sm border border-gray-800 rounded-lg p-4"
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-medium text-gray-200 mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              href="https://discord.gg/boppa"
              target="_blank"
              className="w-full sm:w-auto"
            >
              Join Discord Server
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Glow effect */}
      <GlowEffect
        color="rgb(79, 70, 229)" // indigo color
        top="30%"
        right="5%"
        size="300px"
        opacity="0.12"
      />
    </section>
  )
}

export default DiscordSection
