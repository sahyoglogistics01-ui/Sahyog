"use client"

import { motion } from 'framer-motion'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-400 mb-6">Last updated: November 6, 2026</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-300 mb-4">
              By accessing or using the Sahyog platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use License</h2>
            <p className="text-slate-300 mb-4">
              Permission is granted to use this platform for legitimate purposes related to surplus logistics and social good initiatives, subject to all applicable laws and these terms.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Responsibilities</h2>
            <p className="text-slate-300 mb-4">
              Users must provide accurate information, maintain the security of their accounts, and use the platform in compliance with all applicable laws and regulations.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Prohibited Uses</h2>
            <p className="text-slate-300 mb-4">
              You may not use this platform for illegal activities, fraud, harassment, or any other prohibited purpose. Violation of these terms may result in immediate termination of your access.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-slate-300 mb-4">
              Sahyog is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform or inability to use it.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Changes to Terms</h2>
            <p className="text-slate-300 mb-4">
              We reserve the right to modify these terms at any time. Continued use of the platform after changes are posted constitutes your acceptance of the modified terms.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contact Us</h2>
            <p className="text-slate-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at legal@sahyog.org.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}