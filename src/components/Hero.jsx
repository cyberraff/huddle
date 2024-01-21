import illustration from '../assets/illustration-mockups.svg';
import logo from '../assets/logo.svg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';
export default function Hero() {
	return (
		<div className=' text-white text-center lg:text-start lg:flex justify-center items-center flex-col lg:flex-row lg:bg-bgDesktop bg-cover font-openSans h-screen'>
			<div className=' px-12 md:px-20 lg:pr-5 lg:pl-10  bg-bgMobile lg:bg-none  w-full bg-cover top lg:flex-auto lg:w-[45rem] '>
				<img className='w-[12rem] py-12 lg:pt-0 ' src={logo} alt='' />

				<img
					className=' py-10 w-full '
					src={illustration}
					alt='mobile background'
				/>
			</div>
			<div className='pt-10  px-12 md:px-20 lg:px-5 pb-10 lg:flex-auto lg:w-[30rem]  '>
				<h1 className='text-4xl lg:text-3xl font-bold lg:pt-24 font-pop'>
					Build The Community Your Fans Will Love
				</h1>
				<p className='text-lg lg:text-base mt-6 '>
					Huddle re-imagines the way we build communities. You have a
					voice, but so does your audience. Create connections with
					your users as you engage in genuine discussion.
				</p>
				<button
					type='button'
					className=' py-3 px-20 lg:px-14 rounded-full hover:bg-[#e882e8] hover:text-white text-[#674baf] bg-white text-sm m-8 lg:mx-0'>
					Register
				</button>
				<div className='flex justify-center lg:justify-end mt-10'>
					<FaFacebookF className=' w-8 h-8 p-[.4rem] rounded-full border mx-[.3rem]  hover:text-[#e882e8] hover:border-[#e882e8]' />

					<FaTwitter className=' w-8 h-8 p-[.4rem] rounded-full border mx-[.3rem]  hover:text-[#e882e8] hover:border-[#e882e8]' />
					<FaInstagram className=' w-8 h-8 p-[.4rem] rounded-full border mx-[.3rem]  hover:text-[#e882e8] hover:border-[#e882e8]' />
				</div>
			</div>
		</div>
	);
}
