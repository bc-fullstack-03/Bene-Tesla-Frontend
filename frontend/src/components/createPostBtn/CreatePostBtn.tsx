import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean,
    children: ReactNode,
    className?: string
}


function Button({asChild, children, className, ...props}: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp 
        className={clsx(
            'inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-700 cursor-pointer',
            )} 
            {...props}>
            {children}
        </Comp>
    )
    
}
export default  Button 