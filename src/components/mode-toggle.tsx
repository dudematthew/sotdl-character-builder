import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

interface ModeToggleProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function ModeToggle({ className, size = "icon" }: ModeToggleProps) {
  const { theme, setTheme } = useTheme()
  
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button 
      variant="outline" 
      size={size} 
      className={className}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="w-[1.2rem] h-[1.2rem] rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
      <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
      <span className="sr-only">
        {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      </span>
    </Button>
  )
} 