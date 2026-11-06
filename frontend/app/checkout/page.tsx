"use client"

import { motion } from 'framer-motion'
import { CreditCard, Shield, Lock, Check, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { DataDeletionButton } from '@/components/DataDeletionButton'
import { Notification } from '@/components/Notification'

export default function CheckoutPage() {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationType, setNotificationType] = useState<'success' | 'error' | 'warning'>('success')
  const [notificationTitle, setNotificationTitle] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  
  const showNotificationMessage = (type: 'success' | 'error' | 'warning', title: string, message: string) => {
    setNotificationType(type)
    setNotificationTitle(title)
    setNotificationMessage(message)
    setShowNotification(true)
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate payment processing
    showNotificationMessage('success', 'Payment Successful', 'Your order has been placed successfully. You will receive a confirmation email shortly.')
  }
  
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Secure Checkout</h1>
          <p className="text-slate-400">Complete your purchase with confidence</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Card Number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:border-rose-500/50 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-600 focus:border-rose-500/50 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-600 focus:border-rose-500/50 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Billing Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Billing Information</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-600 focus:border-rose-500/50 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-600 focus:border-rose-500/50 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-600 focus:border-rose-500/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Security Features */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-sm font-medium text-emerald-300">Secure Connection</p>
                      <p className="text-xs text-emerald-400/80">Your payment information is protected by 256-bit SSL encryption</p>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-rose-500 text-white font-medium py-4 rounded-xl shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:bg-rose-600 transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  Pay Now
                </motion.button>
              </form>
            </motion.div>
          </div>
          
          {/* Order Summary & Security */}
          <div className="space-y-6">
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-slate-300">
                  <span>Product A - Premium Plan</span>
                  <span className="text-white">$49.00</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Tax (10%)</span>
                  <span className="text-white">$4.90</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between text-lg font-bold text-white">
                  <span>Total</span>
                  <span>$53.90</span>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">30-day money-back guarantee</span>
                </div>
                <p className="text-xs text-slate-400">
                  If you're not completely satisfied within 30 days, we'll refund your payment - no questions asked.
                </p>
              </div>
            </motion.div>
            
            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Security Features</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">PCI DSS Compliant</p>
                    <p className="text-xs text-slate-400">Your payment data is encrypted and stored securely</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Fraud Protection</p>
                    <p className="text-xs text-slate-400">Advanced fraud detection systems</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Data Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Your Data is Safe</h3>
              
              <div className="space-y-4">
                <p className="text-sm text-slate-300">
                  We are committed to protecting your privacy and data. Your personal information is never sold to third parties.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>GDPR compliant data handling</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Encrypted data transmission</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Regular security audits</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm font-medium text-white mb-3">Request Data Deletion</p>
                  <DataDeletionButton />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Notification
        type={notificationType}
        title={notificationTitle}
        message={notificationMessage}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </div>
  )
}