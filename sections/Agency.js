import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
		<>
			<section className='agency bg-top'>
				<div className='container'>
					<div className='heading-title'>
						<TitleSm title='ABOUT AGENCY' /> <br />
						<br />
						<Title
							title='The last digital agency you will ever need!'
							className='title-bg'
						/>
					</div>

					<div className='content flex1'>
						<div className='left w-60 py'>
							<TitleSm title='Turning your business ideas into smart digital products since 2001' />
							<p className='desc-p'>
								Bulls Marketing is a results-driven digital marketing agency
								dedicated to helping businesses thrive online. With expertise in
								SEO, social media management, content creation, and PPC
								advertising, we tailor strategies to boost your brand's
								visibility and drive growth. Our mission is to deliver
								measurable results and exceptional service to our clients.
							</p>
							<div className='grid-3'>
								<div className='box'>
									<h1 className='indigo'>5+</h1>
									<h3>Team Experts</h3>
								</div>
								<div className='box'>
									<h1 className='indigo'>3+</h1>
									<h3>Successful cases</h3>
								</div>
								<div className='box'>
									<h1 className='indigo'>10+</h1>
									<h3>Showcases</h3>
								</div>
							</div>
						</div>
						<div className='right w-40 ml'>
							<img
								src='/images/s1.jpg'
								alt='Img'
								className='round'
								width='100%'
								height='100%'
							/>
						</div>
					</div>

					<div className='content flex'>
						<div className='left w-40 py'>
							<img
								src='/images/s4.jpg'
								alt='Img'
								className='round'
								width='100%'
								height='100%'
							/>
						</div>
						<div className='right w-60 ml'>
							<TitleSm title='Our mission' />
							<br />
							<p className='misson-p'>
								Our mission at Bulls Marketing is to empower businesses to
								achieve their full potential online. We are committed to
								delivering innovative, data-driven marketing solutions that not
								only enhance brand visibility but also drive tangible results.
								By building lasting relationships with our clients, we aim to
								help them grow, succeed, and lead in their industries.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Brand />
			<Testimonial />
			<Banner />
			<br />
			<br />
			<br />
			<br />
		</>
	)
}

export default Agency
