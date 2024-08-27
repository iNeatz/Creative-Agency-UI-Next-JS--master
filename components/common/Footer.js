import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
		<>
			<footer>
				<div className='container'>
					<div className='grid-4'>
						<div className='logo'>
							<TitleLogo title='creative' caption='7' className='logobg' />
							<br />
							<span>
								Questions? Reach us <br /> Sunday – Friday from 9 am to 6 pm
							</span>
							<br />
							<br />
							<h3>+977 984-8578-704</h3>
							<br />
						</div>
						<ul>
							<h3>COMPANY</h3>
							<li>
								<Link href='/agency'>About agency</Link>
							</li>
							<li>
								<Link href='team/'>Our team</Link>
							</li>
							<li>
								<Link href='/showcase'>Showcase</Link>
							</li>
							<li>
								<Link href='/'>Blog</Link>
							</li>
						</ul>
						<ul>
							<h3>SERVICES</h3>
							<li>
								<Link href='/services'>Web Design & Development</Link>
							</li>
							<li>
								<Link href='/services'>Logo Design</Link>
							</li>
							<li>
								<Link href='/services'>Digital Marketing</Link>
							</li>
							<li>
								<Link href='/services'>Video Creation</Link>
							</li>
						</ul>
						<ul>
							<h3>CONNECT</h3>
							<div className='connect'>
								<li>
									<Link href='/'>
										<BsFacebook size={25} />
									</Link>
								</li>
								<li>
									<Link href='https://www.instagram.com/bullsmarketin/' target="_blank">
										<AiFillInstagram size={25} />
									</Link>
								</li>
								<li>
									<Link href='/'>
										<AiFillLinkedin size={25} />
									</Link>
								</li>
							</div>
						</ul>
					</div>
					<div className='legal connect py'>
						<div className='text'>
							<span>© 2024 THE BULLS. ALL RIGHTS RESERVED.</span>
						</div>
						<div className='connect'>
							<span>BULLS COMPANY</span>
							<span> &nbsp; | &nbsp; </span>
							<span>TERMS & CONDITIONS</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
