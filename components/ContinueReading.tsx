"use client"

import { useState } from "react"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { sendGAEvent } from "@/components/GoogleAnalytics"

interface ContinueReadingProps {
  children: React.ReactNode
  maxHeight?: number
}

export default function ContinueReading({ children, maxHeight = 700 }: ContinueReadingProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          !isExpanded && {
            "max-h-[700px]": true,
            "after:absolute": true,
            "after:bottom-0": true,
            "after:left-0": true,
            "after:right-0": true,
            "after:h-72": true,
            "after:bg-gradient-to-t": true,
            "after:from-background": true,
            "after:to-transparent": true,
          }
        )}
        style={{ maxHeight: isExpanded ? "none" : maxHeight }}
      >
        {children}
      </div>
      {!isExpanded && (
        <div className="mt-4 flex justify-center">
          <Button
            variant="outline"
            className="group text-sm font-medium bg-background hover:bg-accent text-foreground border border-foreground/20 hover:border-foreground/40 transition-all duration-300"
            onClick={() => {
              setIsExpanded(true)
              sendGAEvent('article_expand', {
                event_category: 'Article',
                event_label: 'Continue Reading',
                value: 1
              })
            }}
          >
            Continue Reading
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}
    </div>
  )
}

