import Button from '@components/common/button'
import Container from '@components/common/container'
import Navbar from '@components/navbar'
import React from 'react'
import CompanyProfile from '../../assets/misc/Kimsell Company Profile Brochure.pdf'
import HeroImage from '../../assets/images/content/Hero.png';
import homeImage1 from '../../assets/images/content/Home-1.png';
import homeImage2 from '../../assets/images/content/Home-2.png';
import homeImage3 from '../../assets/images/content/Home-3.png';
import homeImage4 from '../../assets/images/content/Home_big.png';


type Props = {}


const missions: { title: string, description: string }[] = [
  {
    title: "Delivering Quality Shipping Solutions ",
    description: "Our mission is to provide reliable, efficient and cost-effective shipping solutions to our customers. We strive to provide the best customer service, innovative solutions and superior performance to ensure that our customers’ needs are met."
  },
  {
    title: "Global Connectivity and Connectedness ",
    description: "Our vision is to create global connectivity and connectedness through the delivery of our shipping services. We aim to build strong partnerships with our customers and to create value through the use of innovative technologies and strategic alliances"
  },
  {
    title: "Enhancing Customer Experiences ",
    description: "Our mission is to provide our customers with the highest quality of service and to enhance their experiences with our shipping solutions. We strive to exceed their expectations in the areas of safety, security, timeliness, and cost",

  },
  {
    title: "A Sustainable and Innovative Shipping Industry ",
    description: "Our vision is to create a sustainable and innovative shipping industry that is focused on providing the highest quality of service and solutions. We strive to reduce our environmental footprint and to create innovative solutions that will benefit our customers and the industry as a whole."
  }
]

const HomePage = (props: Props) => {

  const aboutRef = React.useRef<HTMLDivElement>(null)

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <React.Fragment>
      <Navbar activeLink="home" />
      <main className='bg-black'>
        <section className='h-screen' id="hero">
          <Container className=''>
            <div className='text-white laptop:pt-32 mobile:pt-24'>
              <h1 className='laptop:text-7xl mobile:text-3xl font-medium'>
                Reliable & Express Logistic
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
              <a href="/about">
                <Button variant='secondary'>
                  More About Us
                </Button>
              </a>
            </div>
          </Container>
          <hr className='border border-gray-200 w-full' />
        </section>

        <section className='bg-white laptop:pt-20 mobile:pt-10'>
          <Container>
            <div className='laptop:grid grid-cols-12 mobile:flex mobile:flex-col mobile:gap-y-4'>
              <div className='flex flex-col col-span-7 gap-y-4'>
                <h1 className='font-medium'>
                  Our Services
                </h1>
                <h1 className='font-medium text-4xl'>
                  We Provide World Class Shipping Service
                </h1>
              </div>
              <div className='col-span-5 self-end'>
                <p>To provide the best quality in every service in the shipping world to get a sense of security and comfort.</p>
              </div>
            </div>

            <div className='laptop:pt-16 laptop:grid grid-cols-12 laptop:gap-6 mobile:flex mobile:flex-col mobile:gap-y-4 mobile:pt-6'>
              <div className='col-span-4 flex flex-col gap-y-4' >
                <img src={homeImage1} alt="" className='w-full object-cover laptop:h-96 mobile:h-52' />
                <h1 className='font-medium'>BULK CARGO SURVEY CARGO-NICKEL ORE</h1>
              </div>

              <div className='col-span-4 flex flex-col gap-y-4' >
                <img src={homeImage2} alt="" className='w-full object-cover laptop:h-96 mobile:h-52' />
                <h1 className='font-medium'>MARINE SURVEY</h1>
              </div>

              <div className='col-span-4 flex flex-col gap-y-4' >
                <img src={homeImage3} alt="" className='w-full object-cover laptop:h-96 mobile:h-52' />
                <h1 className='font-medium'>MARINE CONSULTANT</h1>
              </div>
            </div>

            <div className='laptop:py-12 mobile:py-8 text-center '>
              <a href="/service">
                <Button variant='secondary'>
                  More Services
                </Button>
              </a>
            </div>

          </Container>

          <hr className='border border-gray-200 w-full' />
        </section>

        <section className='laptop:py-20 mobile:py-10 bg-white'>
          <Container className='laptop:grid laptop:grid-cols-12 laptop:gap-6'>
            <div className='mobile:hidden laptop:flex col-span-6'>
              <img src={homeImage4} className="w-full" />
            </div>
            <div className='laptop:pt-10 mobile:pt-0 col-span-6 flex flex-col laptop:gap-y-10 mobile:gap-y-6'>
              <div className='flex flex-col gap-y-10'>
                <h1 className='text-4xl font-medium'>
                  Global and Indonesia Cargo Solutions
                </h1>
                <p>
                  The benefit from our company is to provide the best service that upholds values of honesty, solubility, and effectiveness based on competence and qualifications in each area of the service we provide.
                </p>
              </div>
              <a href="/service" className='laptop:text-left mobile:text-center'>
                <Button variant='secondary'>
                  Learn More
                </Button>
              </a>
            </div>
          </Container>
        </section>
        <ContactUsSection />
        <FooterSection />
      </main>
    </React.Fragment>
  )
}


type ListInfoItemProps = {
  number: number,
  title: string,
  description: string
  className?: string
}

const ListInfoItem = (props: ListInfoItemProps) => {
  return (
    <div className={'laptop:p-6 mobile:py-2 flex flex-col laptop:gap-y-4 mobile:gap-y-2' + " " + props.className}>
      <div className='flex flex-row laptop:gap-x-6 mobile:gap-x-1 laptop:items-start mobile:items-start'>
        <span className='laptop:text-xl mobile:text-base font-medium text-gray-500'>0{props.number}.</span>
        <span className='laptop:text-2xl mobile:text-base font-light'>{props.title}</span>
      </div>
      <div className='flex flex-row laptop:gap-x-6 mobile:gap-x-1 items-center'>
        <span className='laptop:text-xl mobile:text-base font-medium text-gray-500 opacity-0'>0{props.number}.</span>
        <p className='text-gray-500'>{props.description}</p>
      </div>
    </div>
  )
}

export default HomePage

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