'use client'

import { useState, useRef, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { LineChart, ChevronDown, ChevronUp } from 'lucide-react'
import * as Separator from '@radix-ui/react-separator'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentTop, setContentTop] = useState(0)

  const toggleContent = () => {
    if (contentRef.current) {
      setContentTop(contentRef.current.offsetTop)
    }
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      window.scrollTo({
        top: contentTop,
        behavior: 'smooth'
      })
    }
  }, [isExpanded, contentTop])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b w-full">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <LineChart className="h-6 w-6 text-primary" />
            <span className="font-semibold">ChaToken Insights</span>
          </div>
          <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:underline">
            Privacy Policy
          </Link>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="container px-4 py-8 md:py-12 lg:py-16 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:divide-x">
            {/* Main Content */}
            <div className="space-y-6" ref={contentRef}>
              <div>
                <h1 className="mb-4 text-2xl font-bold tracking-tight lg:text-3xl">Research Article Title</h1>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/avatar.jpg"
                    alt="Author avatar"
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-medium">Jane Doe</div>
                    <div className="text-sm text-muted-foreground">April 23rd, 2024</div>
                  </div>
                </div>
              </div>
              <Separator.Root className="h-px bg-border" />
              <div className="prose prose-gray max-w-none">
                <p>
                  My summary of UiPath before using it — UiPath is an automation platform and I expect to be able to create agents
                  that can do specific tasks.
                </p>
                <h2>How does UiPath explain itself in the first minute?</h2>
                <p>
                  &ldquo;AI breakthroughs, Groundbreaking research, Leading AI researchers. All at UiPath.ai.&rdquo;
                </p>
                <h2>How does UiPath work?</h2>
                <p>
                  The first step as part of onboarding onto UiPath is to create a workspace, from where I and colleagues can create
                  and manage automations. I was sent (by the department I work in as well as my services I use e.g. Microsoft Teams or RocketMFD) to receive recommendations about the best tools to use.
                </p>
                {isExpanded && (
                  <>
                    <h2>What will you be able to read in this blog?</h2>
                    <p>
                      I will cover what are the main considerations for you to think about before making a more data management.
                      This includes understanding your current data infrastructure, identifying key stakeholders, and outlining
                      your data governance strategy.
                    </p>
                    <h2>Key Takeaways</h2>
                    <ul>
                      <li>UiPath is a powerful automation platform for creating task-specific agents.</li>
                      <li>The platform emphasizes AI breakthroughs and cutting-edge research.</li>
                      <li>Getting started involves creating a workspace and receiving tailored recommendations.</li>
                      <li>Effective data management requires careful planning and consideration of various factors.</li>
                    </ul>
                    <p>
                      As we delve deeper into the world of automation and data management, it&rsquo;s crucial to understand that these
                      tools are not just about efficiency, but about transforming how we interact with and utilize information.
                      The journey with platforms like UiPath is as much about technological advancement as it is about reimagining
                      our approach to work and decision-making processes.
                    </p>
                  </>
                )}
                <div className="mt-8">
                  <Button
                    variant="outline"
                    onClick={toggleContent}
                    aria-expanded={isExpanded}
                    aria-controls="expandable-content"
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Continue Reading <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-4 lg:pl-8">
              <Card className="p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">$0.3026</span>
                    <span className="text-sm text-green-500">+4.65%</span>
                  </div>
                </div>
                <div className="aspect-[4/3] w-full bg-muted" />
                <div className="mt-4 flex space-x-2">
                  <Button size="sm" className="w-full">Buy in USD</Button>
                  <Button size="sm" variant="outline" className="w-full">Buy in crypto</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

