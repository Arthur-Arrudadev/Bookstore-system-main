/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { cn } from '@utils/clsx'

const FormLink = ({ value, link, ...props }) => (
    <Link {...props} to={link} className={cn(`flex justify-center text-form-link-text hover:underline hover:text-form-link-text_hover`, props.className)}>
        {value}
    </Link>
)

export default FormLink