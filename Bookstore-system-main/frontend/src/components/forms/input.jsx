/* eslint-disable react/prop-types */
import { cn } from '@utils/clsx'

const FormInput = (props) => (
    <input {...props} className={cn("px-4 bg-form-input-bg py-2 w-24 md:w-full text-base text-form-input-text", props.className)} />
)

export default FormInput