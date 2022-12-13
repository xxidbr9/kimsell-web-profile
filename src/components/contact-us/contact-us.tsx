import Button from '@components/common/button';
import Container from '@components/common/container';
import React from 'react'

type Props = {}

const ContactUsSection = () => {
  return (
    <section className='laptop:py-10 mobile:py-6 bg-blue-500'>
      <Container className='flex laptop:flex-row mobile:flex-col items-center justify-between mobile:gap-y-4'>
        <h1 className='text-white laptop:text-5xl mobile:text-2xl font-medium'>
          Want to know more...?
        </h1>
        <a href="/contact">
          <Button variant='tarsier'>
            Contact Us
          </Button>
        </a>
      </Container>
    </section>
  )
};

export default ContactUsSection;