import Button from '@components/common/button'
import Container from '@components/common/container'
import FooterSection from '@components/footer'
import Navbar from '@components/navbar'
import React from 'react'

type Props = {}

/* 
Bpk. Eko Rudy Santoso :
+62 812 6827 3114
+62 812 70 579 728 (Whatsapp)

Bpk. Ilman Arif Wahyudi:
 +62 812 4489 3244

Call Center:

+62 778 7490 805
Location :
Batam
Jalan Ahmad Yani
Ruko Alexandria Blok B8 #27 Batam Center Batam 29453

*/

const ContactPage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar activeLink="contact" />
      <main className='bg-black'>
        {/* write contact page */}
        <Comp />
        <FooterSection />
      </main>
    </React.Fragment>
  )
}

export default ContactPage

const Comp = () => {
  return (
    <Container>

      <div className="mobile:pt-10 flex items-top justify-center min-h-screen bg-black dark:bg-black sm:items-center sm:pt-0">
        <div className=" mx-auto">
          <div className="mt-8 overflow-hidden">
            <div className="laptop:py-6 mr-2  sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-bold tracking-tight">
                Get in touch
              </h1>
              <p className="text-base font-medium text-white dark:text-white mt-2">
                If you have any questions or comments, we'd love to hear from you. Please contact us with this information below to get in touch, and we'll do our best to respond as soon as possible
              </p>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">

              <div className="laptop:py-6 flex flex-col justify-center">

                <div className="flex items-center mt-4 text-white dark:text-white">
                  <div className=" text-md tracking-wide font-semibold">
                    Bpk. Eko Rudy Santoso :
                    <div className='mt-2'>
                      <p>
                        +62 812 6827 3114
                      </p>
                      <p>+62 812 70 579 728 (Whatsapp)</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-4 text-white dark:text-white">
                  <div className=" text-md tracking-wide font-semibold">
                    Bpk. Ilman Arif Wahyudi
                    <div className='mt-2'>
                      <p>
                        +62 812 4489 3244
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-4 text-white dark:text-white">
                  <div className=" text-md tracking-wide font-semibold">
                    Call Center
                    <div className='mt-2'>
                      <p>
                        +62 778 7490 805
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="laptop:py-6 flex flex-col">


                <div className="flex items-center mt-8 text-white dark:text-white">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    Batam
                    Jalan Ahmad Yani
                    Ruko Alexandria Blok B8 #27 Batam Center Batam 29453
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </Container>
  )
}