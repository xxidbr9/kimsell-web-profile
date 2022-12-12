import Container from '@components/common/container'
import Navbar from '@components/navbar'
import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar activeLink="about" />
      <Container>
        <main className='bg-black'>

        </main>
      </Container>
    </React.Fragment>
  )
}

export default AboutPage