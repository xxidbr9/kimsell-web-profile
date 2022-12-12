import type React from 'react'

type Props = {
  children?: React.ReactNode
}

const Container: React.FC<Props & JSX.IntrinsicElements['div']> = (props) => {
  return (
    <div {...props} className={"desktop:mx-auto desktop:max-w-screen-desktop mobile:px-5 desktop:px-0" + " " + props.className} />
  )
}

export default Container