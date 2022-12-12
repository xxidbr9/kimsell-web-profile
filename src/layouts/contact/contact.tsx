import Container from '@components/common/container'
import Navbar from '@components/navbar'
import React from 'react'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar activeLink="contact" />
      <Container>
        <main className='bg-black'>

        </main>
      </Container>
    </React.Fragment>
  )
}

export default ContactPage