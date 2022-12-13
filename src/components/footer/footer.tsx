import React from "react"
import Container from "@components/common/container"

const FooterSection = () => {
  const menus = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About Us',
      link: '/about'
    },
    {
      title: 'Services',
      link: '/service'
    },
    {
      title: 'Contact Us',
      link: '/contact'
    }
  ]
  return (
    <footer className='py-10'>
      <Container className='flex laptop:flex-row mobile:flex-col-reverse justify-between mobile:gap-y-4'>
        <ul className='text-white flex flex-col laptop:gap-y-2 mobile:gap-y-1'>{menus.map((e, i) => <a key={i} href={e.link}><li>{e.title}</li></a>)}</ul>
        <div className='laptop:self-end'>
          <a className='text-white text-xl font-medium' href='/'>
            Kim Sell.
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default FooterSection;