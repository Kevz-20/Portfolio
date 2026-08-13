"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedAvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function AnimatedAvatar({
  src,
  alt,
  size = 288,
}: AnimatedAvatarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent))",
        }}
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[6px] rounded-full bg-background" />
      <div className="absolute inset-[14px] overflow-hidden rounded-full border border-border">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      </div>
    </div>
  );
}
