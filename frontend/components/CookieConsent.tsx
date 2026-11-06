"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])
  
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }
  
  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-[1000]"
        >
          <h3 className="text-lg font-bold text-white mb-2">Cookie Consent</h3>
          <p className="text-sm text-slate-400 mb-4">
            We use cookies to enhance your experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.
          </p>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={acceptCookies}
              className="flex-1 bg-rose-500 text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-rose-600 transition-colors"
            >
              Accept
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={declineCookies}
              className="flex-1 bg-white/5 border border-white/10 text-slate-300 py-2 px-4 rounded-lg font-medium text-sm hover:bg-white/10 transition-colors"
            >
              Decline
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}