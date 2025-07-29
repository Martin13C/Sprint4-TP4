import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

function Bienvenida({ onFinalizar }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinalizar(); // le avisa al padre que terminó
    }, 4000); // 3 segundos

    // Deshabilita el scroll mientras se muestra la bienvenida
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    };
  }, [onFinalizar]);

    return (


       <AnimatePresence>
      {visible && (
        <motion.div
          className="relative h-screen w-full overflow-hidden bg-neutral-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/VideoFondo.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40 z-5" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-6">
            <motion.img
              src="/img/Logo.png"
              alt="Logo"
              className="w-40 h-40 md:w-48 md:h-48 lg:h-90 lg:w-90 object-contain drop-shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>


    )
}

export default Bienvenida