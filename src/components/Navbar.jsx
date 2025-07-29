import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <nav className="bg-purple-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between h-16">
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >

          <motion.img
            src="/img/Logo.png"
            alt="Logo"
            className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />

        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar