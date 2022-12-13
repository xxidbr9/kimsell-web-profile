import Button from '@components/common/button'
import Container from '@components/common/container'
import ContactUsSection from '@components/contact-us';
import FooterSection from '@components/footer';
import Navbar from '@components/navbar'
import React from 'react'
import HeroImage from '../../assets/images/content/Hero.png';



const serviceList = [
  {
    title: "Bulk Cargo Survey Cargo Nickel Ore",
    description: "Our team of experts can provide a thorough inspection and analysis of your bulk cargo of nickel ore, ensuring that it is in good condition and ready for transport."
  },
  {
    title: "Marine Survey",
    description: "We offer a range of marine survey services to provide clients with expert analysis and inspection of their cargo, ships, and other maritime assets."
  },
  {
    title: "Marine Consultant",
    description: "Our team of experienced professionals can provide expert consulting services for a variety of maritime needs, offering advice and guidance to help clients make informed decisions"
  },
  {
    title: "Discharging Supervision",
    description: "We can provide supervision and oversight during the discharging process to ensure that it is carried out safely and efficiently."
  },
  {
    title: "On Hire / Off Hire Survey",
    description: "We offer on hire/off hire surveys to provide clients with a detailed analysis of a vessel's condition at the start and end of a charter period."
  },
  {
    title: "Pre-Loading and Loading Supervision",
    description: "Our team can provide supervision and oversight during the pre-loading and loading process to ensure that it is carried out safely and efficiently."
  },
  {
    title: "Draft Survey",
    description: "Our Draft Survey service provides accurate measurements of a ship's draft, allowing for the proper loading and unloading of cargo."
  },
  {
    title: "Bunker Survey",
    description: "Our Bunker Survey service involves inspecting and measuring the quantity of fuel on board a ship."
  },
  {
    title: "Marine Casualty Investigation",
    description: "In the event of a marine accident, our team can conduct a thorough investigation to determine the cause and identify any potential liabilities."
  },
  {
    title: "P&I Pre-Entry Survey",
    description: "Our P&I Pre-Entry Survey service involves conducting a comprehensive inspection of a vessel before it is entered into a Protection and Indemnity insurance policy."
  },
  {
    title: "H&M Survey",
    description: "Our H&M Survey service involves conducting a detailed inspection of a vessel to assess its suitability for Hull and Machinery insurance coverage."
  },
  {
    title: "New Building Supervision",
    description: "Our team can provide expert supervision during the construction of a new vessel to ensure it is built to the highest standards."
  },
  {
    title: "Stowage and Lashing Survey",
    description: "ur Stowage and Lashing Survey service involves inspecting a ship's cargo-handling equipment and lashing systems to ensure they are safe and effective."
  },
  {
    title: "Cargo Survey (Containers, Breakbulk, Solid and Liquid Bulk Cargoes)",
    description: "Our team can conduct surveys of various types of cargo, including containers, breakbulk, solid bulk, and liquid bulk cargoes."
  },
  {
    title: "Ship Management",
    description: "Our Ship Management service provides comprehensive support for shipowners, including technical and crew management, as well as financial and regulatory compliance."
  },
  {
    title: "Aby Other Maritime Services",
    description: " In addition to the services listed above, we also offer a wide range of other maritime services, including naval architecture, engineering, and consultancy. If you have a specific need, please contact us to discuss how we can help."
  },
];


type Props = {}


function ServiceCard(props: { service: any, index: number }) {
  return (<li className="flex flex-col gap-y-2">
    {/* <img src={`https://source.unsplash.com/random/${props.index}`} alt={props.service.title} /> */}
    <h2 className='text-xl font-medium'>{props.service.title}</h2>
    <p>{props.service.description}</p>
  </li>);
}


const ServicePage = (props: Props) => {

  const servicesRef = React.useRef<HTMLDivElement>(null)

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <React.Fragment>
      <Navbar activeLink="service" />
      <main className='bg-black'>
        <section className='h-screen' id="hero">
          <Container className=''>
            <div className='text-white laptop:pt-32 mobile:pt-24'>
              <span>Services</span>
              <h1 className='laptop:text-6xl mobile:text-3xl font-medium '>
                We Provide World Class <h1 className='laptop:mt-4 mobile:mt-1'> Shipping Service</h1>
              </h1>
              <div className='laptop:grid laptop:grid-cols-12'>
                <div className='laptop:col-span-5 flex flex-col laptop:gap-y-8 laptop:mt-8 laptop:pb-24 mobile:gap-y-4 mobile:mt-4 mobile:pb-12'>
                  <p className=' text-gray-400'>
                    Our company provides world-class shipping services to clients around the world. With a team of experienced professionals and a fleet of reliable vehicles, we are able to handle shipments of all sizes and types. Whether you need to transport goods across the country or around the world, we have the expertise and resources to get the job done right.
                  </p>
                  <div className='flex gap-x-2'>
                    <Button variant='link' className='flex gap-x-1' onClick={() => handleScroll(servicesRef)}>
                      See More <span className='mobile:hidden laptop:block'>Our Services</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <hr className='border border-gray-500 w-full' />
          <Container className='laptop:my-20 mobile:my-10'>
            <img src={HeroImage} alt="" className='w-full object-cover laptop:h-[420px] mobile:h-52' />
          </Container>
        </section>
        <section className='h-auto bg-white laptop:pt-96 mobile:pt-52 mobile:pb-20' ref={servicesRef}>
          <Container className='flex flex-col laptop:gap-y-8 mobile:gap-y-4'>
            <h1 className='text-black laptop:text-4xl mobile:text-2xl font-medium'>
              Our Services
            </h1>
            <div className='grid laptop:grid-cols-2 mobile:grid-cols-1 gap-x-10'>
              {/* add random image for each service from serviceList using source.unsplash.com/random/:index */}
              <ul className='flex flex-col gap-x-8 gap-y-9'>
                {serviceList.slice(0, serviceList.length / 2).map((service, index) => (
                  <ServiceCard
                    key={index}
                    service={service}
                    index={index} />
                ))}
              </ul>
              <ul className='flex flex-col gap-x-8 gap-y-9'>
                {serviceList.slice(serviceList.length / 2, serviceList.length).map((service, index) => (
                  <ServiceCard
                    key={index}
                    service={service}
                    index={index} />
                ))}
              </ul>
            </div>
          </Container>
        </section>
        <ContactUsSection />
        <FooterSection />
      </main>
    </React.Fragment>
  )
}

export default ServicePage