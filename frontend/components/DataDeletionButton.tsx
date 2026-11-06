"use client"

import { motion } from 'framer-motion'
import { Trash2, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

export function DataDeletionButton() {
  const [isDeleting, setIsDeleting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  
  const handleDeleteRequest = async () => {
    setIsDeleting(true)
    
    // Simulate API call to request data deletion
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real implementation, this would call an API endpoint
    console.log('Data deletion request submitted')
    
    setIsDeleting(false)
    setShowConfirm(false)
    
    // Show success message (would use toast/notification system)
    alert('Data deletion request submitted successfully. You will receive a confirmation email within 24 hours.')
  }
  
  if (showConfirm) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-rose-400" />
          <div className="text-sm text-rose-300">
            <p className="font-medium mb-1">Warning: This action is permanent</p>
            <p>Your personal data will be permanently deleted from our systems within 30 days.</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowConfirm(false)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
          >
            Cancel
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDeleteRequest}
            disabled={isDeleting}
            className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isDeleting ? (
              <>Processing...</>
            ) : (
              <>
                <Trash2 className="w-4 h-4" />
                Confirm Delete
              </>
            )}
          </motion.button>
        </div>
      </div>
    )
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setShowConfirm(true)}
      className="flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-400 hover:bg-rose-500/20 hover:text-white transition-all duration-300"
    >
      <Trash2 className="w-4 h-4" />
      Request Data Deletion
    </motion.button>
  )
}