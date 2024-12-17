/* eslint-disable react/prop-types */
import { cn } from '@utils/clsx'

const FormHeader = ({ title, ...props }) => (
    <header {...props} className={cn(`py-6`, props.className)}>
        <span className='font-bold text-2xl text-form-header-title'>{title}</span>
    </header>
)

export default FormHeader