import Container from '@components/common/container'
import ContactUsSection from '@components/contact-us'
import FooterSection from '@components/footer'
import Navbar from '@components/navbar'
import CompanyProfile from '../../assets/misc/Kimsell Company Profile Brochure.pdf'
import HeroImage from '../../assets/images/content/Hero.png';
import homeImage1 from '../../assets/images/content/Home-1.png';
import homeImage2 from '../../assets/images/content/Home-2.png';
import homeImage3 from '../../assets/images/content/Home-3.png';
import homeImage4 from '../../assets/images/content/Home_big.png';

import React from 'react'
import Button from '@components/common/button'
import { ListInfoItem, missions } from '../home/home'

type Props = {}

const AboutPage = (props: Props) => {
  const aboutRef = React.useRef<HTMLDivElement>(null)


  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <React.Fragment>
      <Navbar activeLink="about" />
      <main className='bg-black'>
        <section className='h-screen' id="hero">
          <Container className=''>
            <div className='text-white laptop:pt-32 mobile:pt-24'>
              <span>About</span>
              <h1 className='laptop:text-7xl mobile:text-3xl font-medium'>
                Who We Are
              </h1>
              <div className='laptop:grid laptop:grid-cols-12'>
                <div className='laptop:col-span-5 flex flex-col laptop:gap-y-8 laptop:mt-8 laptop:pb-24 mobile:gap-y-4 mobile:mt-4 mobile:pb-12'>
                  <p className=' text-gray-400'>
                    We <span className='text-blue-400 font-bold'>PT. KIMSELL Marine Survey</span> Is an independent marine surveyor who conducts inspections,
                    surveys or examinations of marine vessels to assess, monitor and
                    report on their condition and the products on them, as well as
                    inspects damage caused to both vessels and cargo Your requests is
                    our top priority and we make sure that we meet you want. We serve
                    in 24H/7D with all the matter you might face.
                  </p>
                  <div className='flex gap-x-2'>
                    <Button variant='link' className='flex gap-x-1' onClick={() => handleScroll(aboutRef)}>
                      Learn More <span className='mobile:hidden laptop:block'>About Us</span>
                    </Button>
                    <div className='text-gray-400'>
                      |
                    </div>
                    <a href={CompanyProfile} download>
                      <Button variant='link'>
                        Download Our Profile
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <hr className='border border-gray-500 w-full' />
          <Container className='mt-20'>
            <img src={HeroImage} alt="" className='w-full object-cover laptop:h-[420px] mobile:h-52' />
          </Container>
        </section>


        <section className='bg-white' id='about' ref={aboutRef}>
          <Container className='laptop:pt-[280px] mobile:pt-40'>
            <div className='laptop:text-7xl text-center mobile:text-xl font-medium flex flex-col laptop:gap-y-4 mobile:gap-y-2'>
              <h1 className=''>
                Professional Shipping Agency
              </h1>
              <h1>
                And Certified Forwarder
              </h1>
            </div>
            <div className='laptop:mt-20 mobile:hidden laptop:grid grid-cols-12'>
              <div className='col-span-1' />
              <div className='col-span-10 flex flex-col'>
                <div className='grid grid-cols-11'>
                  <ListInfoItem className='col-span-5' number={1} title={missions[0].title} description={missions[0].description} />
                  <div className='flex justify-center'>
                    <div className='border border-l-0 w-[1.5px] mb-0 col-span-1' />
                  </div>
                  <ListInfoItem className='col-span-5' number={2} title={missions[1].title} description={missions[1].description} />
                </div>
                <hr className='h-[1.5px] border' />
                <div className='grid grid-cols-11'>
                  <ListInfoItem className='col-span-5' number={3} title={missions[2].title} description={missions[2].description} />
                  <div className='flex justify-center'>
                    <div className='border border-l-0 w-[1.5px] mb-0 col-span-1' />
                  </div>
                  <ListInfoItem className='col-span-5' number={4} title={missions[3].title} description={missions[3].description} />
                </div>
              </div>
              <div className='col-span-1' />
            </div>
            <div className='laptop:hidden mobile:mt-4 mobile:block'>
              {missions.map((mission, index) => (
                <ListInfoItem key={index} number={index + 1} title={mission.title} description={mission.description} />
              ))}
            </div>
            <div className='pt-14 pb-11 text-center'>
              {/* <a href="/about">
                <Button variant='secondary'>
                  More About Us
                </Button>
              </a> */}
            </div>
          </Container>
          <hr className='border border-gray-200 w-full' />
        </section>
        <ContactUsSection />
        <FooterSection />
      </main>
    </React.Fragment>
  )
}

export default AboutPage