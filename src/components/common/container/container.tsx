import type React from 'react'

type Props = {
  children?: React.ReactNode
}

const Container: React.FC<Props & JSX.IntrinsicElements['div']> = (props) => {
  return (
    <div {...props} className={"mx-auto desktop:max-w-screen-desktop mobile:px-5 desktop:px-6" + " " + props.className} />
  )
}

export default Container