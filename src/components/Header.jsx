import React, { useContext, useState } from 'react'
import Logo from '../img/logo.png'
import { SlBag } from 'react-icons/sl'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'
import CategoryNavMobile from './CategoryNavMobile'
import Cart from './Cart'
import { CartContext } from '../context/CartContext'

const Header = () => {
	const { isOpen, setIsOpen } = useContext(CartContext)
	const [catNavMobile, setCatNavMobile] = useState(false)

	return (
		<header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-10'>
			<div className='container'>
				<div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
					{/* menu */}
					<div
						onClick={() => setCatNavMobile(true)}
						className='text-3xl xl:hidden cursor-pointer'
					>
						<FiMenu />
					</div>
					{/* category nav mobile */}
					<div
						className={`${
							catNavMobile ? 'left-0' : '-left-full'
						} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-300`}
					>
						<CategoryNavMobile setCatNavMobile={setCatNavMobile} />
					</div>
					{/* logo */}
					<Link to='/'>
						<img src={Logo} alt='logo' className='' />
					</Link>
					{/* searchform - show only on desktop */}
					<div className='hidden w-full xl:flex xl:max-w-[734px]'>
						<SearchForm />
					</div>
					{/* phone & cart */}
					<div className='flex items-center gap-x-3'>
						{/* phone */}
						<div className='hidden xl:flex uppercase '>
							need help? 123 456 789
						</div>
						{/*  cart icon*/}
						<div
							className='relative cursor-pointer'
							onClick={() => setIsOpen(!isOpen)}
						>
							<SlBag className='text-2xl' />
							{/* amount */}
							<div className='bg-accent text-primary absolute w-5 h-5 rounded-full flex items-center justify-center top-3 -right-1 text-sm tracking-tighter'>
								2
							</div>
						</div>
						{/* cart */}
						<div
							className={`
                ${isOpen ? 'right-0' : '-right-full'}
                bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-2xl transition-all duration-300`}
						>
							<Cart />
						</div>
					</div>
				</div>
				{/* search form shown on mobile only */}
				<div className='xl:hidden'>
					<SearchForm />
				</div>
			</div>
		</header>
	)
}

export default Header
