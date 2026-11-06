"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NotificationProps {
  type: 'success' | 'error' | 'warning'
  title: string
  message: string
  isVisible: boolean
  onClose: () => void
}

export function Notification({ type, title, message, isVisible, onClose }: NotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])
  
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-rose-400" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-400" />
    }
  }
  
  const getColors = () => {
    switch (type) {
      case 'success':
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100'
      case 'error':
        return 'bg-rose-500/10 border-rose-500/30 text-rose-100'
      case 'warning':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-100'
    }
  }
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-4 right-4 z-[2000] px-6 py-4 rounded-xl border shadow-lg max-w-md ${getColors()}`}
        >
          <div className="flex items-start gap-3">
            {getIcon()}
            <div className="flex-1">
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-sm opacity-90">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 hover:opacity-70 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}