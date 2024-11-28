"use client"

import Image from "next/image"
import { useTheme } from "@/hooks/useTheme"

export default function ThemeLogo() {
  const isDark = useTheme()

  return (
    <Image
      src={isDark ? "/logo-dark.png" : "/logo.png"}
      alt="ChaToken Insights Logo"
      width={200}
      height={40}
      priority
      className="transition-opacity duration-300"
    />
  )
}

