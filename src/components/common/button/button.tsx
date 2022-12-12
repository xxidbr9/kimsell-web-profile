import type React from "react"

type Props = JSX.IntrinsicElements['button'] & {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'link' | 'tarsier'
}

const classNameObject = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl active:scale-90',
  secondary: 'bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-full active:scale-90',
  link: 'font-medium py-0 px-0 ',
  tarsier: 'bg-white hover:bg-white text-black font-medium py-3 px-6 rounded-xl active:scale-90',
}

const Button: React.FC<Props> = (props) => {
  const { variant = 'primary', ...rest } = props
  let className = classNameObject[variant] || classNameObject['primary'];

  return (
    <button {...rest} className={`${className} ${props.className} duration-150`} />
  )
}

export default Button