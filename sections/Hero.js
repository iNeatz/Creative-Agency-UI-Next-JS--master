import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { Brand } from "@/components/router"
import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
		<>
			<section className='hero'>
				<div className='container'>
					<Image
						src='/images/logo/logo_white.png'
						alt='Bulls'
						className="logo"
						width={300}
						height={300}
					/>
					<h1 className='hero-title'>WE BUILD DIGITAL EXPERIENCES</h1>

					<div className='sub-heading'>
						<TitleSm title='WEBSITES' /> <span>.</span>
						<TitleSm title='BRANDING' /> <span>.</span>
						<TitleSm title='DIGITAL MARKETING' />
					</div>
				</div>
			</section>
			<section className='hero-sec'>
				<div className='container'>
					<div className='heading-title'>
						<Title title='The last digital agency you ll ever need' />
						<p>
							Our digital marketing services include SEO, content creation,
							social media management, and PPC advertising, designed to boost
							your online presence and drive targeted traffic to your business.
						</p>
					</div>
					<div className='hero-content grid-4'>
						{home.map((item, i) => (
							<div className='box' key={i}>
								<span className='green'>{item.icon}</span> <br />
								<br />
								<h3>{item.title}</h3>
							</div>
						))}
					</div>
				</div>
			</section>
			<Expertise />
			<Banner />
			<Testimonial />
			<ShowCase />
			<Brand />
		</>
	)
}

export default Hero
