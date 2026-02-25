import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const enhancedButtonVariants = cva(
  "relative overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary-600 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40",
        gradient: "bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 hover:from-primary-600 hover:via-primary-500 hover:to-primary-700 text-white shadow-lg",
        glass: "glass hover:bg-background/90",
        shine: "bg-primary hover:bg-primary-600 text-white overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  loading?: boolean
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <Button
        className={cn(enhancedButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Button>
    )
  }
)
EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton, enhancedButtonVariants }
