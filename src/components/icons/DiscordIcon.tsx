import { siDiscord } from 'simple-icons';
import { SVGProps, forwardRef } from 'react';
import { cn } from '@/lib/utils';

// This component follows the Lucide icon pattern
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
}

const DiscordIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 24, strokeWidth = 2, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('', className)}
        {...props}
      >
        {/* Extract path from simple-icons and transform it to match Lucide styling */}
        <path
          d={siDiscord.path}
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }
);

DiscordIcon.displayName = 'DiscordIcon';

export { DiscordIcon }; 