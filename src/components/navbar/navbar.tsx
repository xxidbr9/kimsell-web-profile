
import Container from '@components/common/container'
import Button from '@components/common/button'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'

type Key = "home" | "about" | "service"
type Props = {
  activeLink: Key | "contact"
}

/* 
? TODO
- [ ] mobile navbar
- [ ] desktop navbar
*/


type MenuItemProps = {
  children: React.ReactNode
  active: "active" | "inactive"
}
const MenuItem: React.FC<MenuItemProps & JSX.IntrinsicElements['a']> = (props) => {
  const isActive = props.active === "active"
  const activeClass = isActive ? 'text-opacity-100' : 'text-opacity-70 hover:text-opacity-100'

  return (
    <li className={"text-white" + " " + activeClass}>
      <a className="" {...props}>{props.children}</a>
    </li>
  )
}


type menuType = {
  title: string
  href: string
  key: Key
}

const menu: menuType[] = [
  {
    title: 'Home',
    href: '/',
    key: 'home'
  },
  {
    title: 'About',
    href: '/about',
    key: 'about'
  },
  {
    title: 'Services',
    href: '/service',
    key: 'service'
  },
]


const Navbar: React.FC<Props> = (props) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='bg-black fixed w-full h-auto'>
      {/* Mobile */}
      <Container>
        <div className='laptop:hidden mobile:flex py-2 justify-between items-center relative'>
          <a className='text-white text-xl font-medium' href='/'>
            PT. Kimsell.
          </a>
          <button className='' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoMdClose color="#fff" size={24} /> : <BiMenuAltRight color="#fff" size={24} />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        // create list menu down

        <ul className='absolute text-white w-full z-[999]'>
          <Container className='py-4 gap-2 flex flex-col'>
            {menu.map((item) => (
              <li key={item.key}>
                <a href={item.href}>
                  {item.title}
                </a>
              </li>)


            )}
            <li>
              <a href="/contact">
                Contact Us
              </a>
            </li>
          </Container>
        </ul>
      )}

      {isMenuOpen && (
        <div className='w-full h-screen filter backdrop-blur-lg z-40'/>
      )}



      <Container>
        <div className='mobile:hidden laptop:flex justify-between items-center py-6'>
          <a className='text-white text-xl font-medium' href='/'>
            Kim Sell.
          </a>
          <ul className='flex justify-center items-center gap-10'>
            {menu.map((item, index) => (
              <MenuItem
                active={item.key === props.activeLink ? "active" : "inactive"}
                key={index}
                href={item.href}
              >
                {item.title}
              </MenuItem>
            ))}
          </ul>
          <div>
            <a href="/contact">
              <Button>
                Contact
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar