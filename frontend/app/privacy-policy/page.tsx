"use client"

import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-400 mb-6">Last updated: November 6, 2026</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-slate-300 mb-4">
              We collect information you provide directly when using our services, including your name, email address, and any logistics data you submit through our platform.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-300 mb-4">
              Your information is used to provide and improve our logistics platform, connect you with donors and NGOs, and facilitate the movement of surplus goods to those in need.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
            <p className="text-slate-300 mb-4">
              We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Your Rights</h2>
            <p className="text-slate-300 mb-4">
              You have the right to access, update, or delete your personal information. You can manage your data through your account settings or contact us for assistance.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
            <p className="text-slate-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@sahyog.org.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}