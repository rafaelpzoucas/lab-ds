import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    asChild?: boolean
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Component = asChild ? Slot : 'button'

    return (
        <Component 
            className={clsx(
                'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors duration-200 focus:ring-2 ring-white', 
                {
                    
                },
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    )
}