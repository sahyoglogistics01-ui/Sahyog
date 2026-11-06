"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function OTPWave({ onComplete }: { onComplete: (code: string) => void }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value !== "" && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    // Check if complete
    if (newOtp.every((v) => v !== "") && index === 5) {
      triggerSuccess(newOtp.join(""));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const triggerSuccess = (code: string) => {
    setIsSuccess(true);
    setTimeout(() => {
      onComplete(code);
    }, 1200); // Wait for the wave animation to finish
  };

  return (
    <div className="flex gap-2 justify-center my-6">
      {otp.map((data, index) => (
        <motion.div
          key={index}
          animate={
            isSuccess
              ? { 
                  y: [0, -10, 0], 
                  borderColor: "#fcd34d", // Champagne Yellow
                  boxShadow: "0px 0px 15px rgba(252, 211, 77, 0.5)" 
                }
              : {}
          }
          transition={{
            duration: 0.4,
            delay: isSuccess ? index * 0.1 : 0, // The Wave effect (staggered)
            ease: "easeInOut",
          }}
        >
          <input
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={data}
            ref={(el) => { inputs.current[index] = el; }}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold text-white bg-slate-900/80 border border-white/20 rounded-xl focus:border-rose-500 focus:outline-none transition-colors"
          />
        </motion.div>
      ))}
    </div>
  );
}