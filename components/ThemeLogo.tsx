"use client"

// import { useTheme } from "@/hooks/useTheme"

export default function ThemeLogo() {
  // const isDark = useTheme()

  return (
    <div className="font-['IBM_Plex_Mono',_monospace] font-bold text-2xl">
      <span className="text-[rgb(40,39,40)] dark:text-[rgb(210,209,210)]">ChaToken</span>
      <span className="text-[#8B9D83] dark:text-[#A0B2A0]">Insights</span>
    </div>
  )
}


