/* eslint-disable react/prop-types */
import { cn } from '@utils/clsx'

const FormButton = ({ value, ...props }) => (
    <button {...props} className={cn(`bg-form-button-bg flex justify-center text-form-button-text w-20 md:w-full font-semibold py-2 rounded-sm`, props.className)}>{value}</button>
)

export default FormButton