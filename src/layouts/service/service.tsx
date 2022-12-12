import Container from '@components/common/container'
import Navbar from '@components/navbar'
import React from 'react'

type Props = {}

const ServicePage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar activeLink="service" />
      <Container>
        <main className='bg-black'>

        </main>
      </Container>
    </React.Fragment>
  )
}

export default ServicePage