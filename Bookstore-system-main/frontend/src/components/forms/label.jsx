/* eslint-disable react/prop-types */
import { cn } from '@utils/clsx'

const FormLabel = ({ children, ...props }) => (
    <label {...props} className={cn(`text-form-label-text flex flex-col font-light text-sm`, props.className)}>
        {children}
    </label>
)

export default FormLabel