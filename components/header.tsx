"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Zap } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Technology", href: "/technology" },
  { name: "Impact", href: "/impact" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Sun className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <Zap className="h-4 w-4 text-accent absolute -bottom-1 -right-1" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none">Solar STEM AI</span>
                <span className="text-xs text-muted-foreground leading-none">🌱 Sustainable Education Technology</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Language switcher placeholder */}
              <select className="hidden sm:block text-sm bg-transparent border border-border rounded-md px-2 py-1">
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>

              <ModeToggle />

              <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90">
                <Link href="/pilot">Join Our Pilot Program</Link>
              </Button>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="pt-4 border-t">
                      <Button asChild className="w-full">
                        <Link href="/pilot">Join Our Pilot Program</Link>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
