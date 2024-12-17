import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export const cn = (...classes) => twMerge(clsx(classes))