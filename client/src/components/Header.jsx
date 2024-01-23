import { Link, useLocation } from 'react-router-dom';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { FcBinoculars } from "react-icons/fc";
import { RiSearch2Line } from "react-icons/ri";

export default function Header() {
    const path = useLocation().pathname
    return (
        <Navbar className='bg-gray-100 w-100 fixed left-0 right-0 top-0'>
          <Navbar.Brand as={'div'}>
            <Link to={'/'} className='whitespace-nowrap flex items-center mr-5'>
              <FcBinoculars  className='w-10 h-8 ' />
              <h1 className='text-xl font-semibold pl-1 font-mono '> World-i </h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle  className='order-2'/>
          <Navbar.Collapse className=''>
            <Navbar.Link as={'div'} active={ path === '/posts'}>
              <Link to={'/posts'}>Posts</Link>
            </Navbar.Link> 
            <Navbar.Link as={'div'} active={ path === '/videos'}>
              <Link to={'/videos'}>Videos</Link>
            </Navbar.Link> 
            <Navbar.Link as={'div'} active={ path === '/podcasts'}>
              <Link to={'/podcasts'}>Podcasts</Link>
            </Navbar.Link>
            <Navbar.Link as={'div'} active={ path === '/channels'}>
              <Link to={'/channels'}>Channels</Link>
            </Navbar.Link>
          </Navbar.Collapse>

          <div className="flex gap-2">
            <Link to={'/search'}> 
              <Button className='p-0 md:hidden ' color='gray'  pill > 
                <RiSearch2Line className=' text-gray-400' />
              </Button>
            </Link>
            <div className="hidden md:inline">
              <form> 
                <TextInput className='' type='search' placeholder='Search...' id='search' rightIcon={RiSearch2Line}/>
              </form>
            </div>  
            
          </div>
          <div className="">
            <Link to={'/sign-in'}>
                <Button gradientDuoTone='purpleToBlue' outline className='w-auto whitespace-nowrap' size='md'> Sign in </Button> 
            </Link>
          </div>
        </Navbar>
    )
}
