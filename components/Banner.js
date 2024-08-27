import React from "react"
import { Title, TitleLogo } from "./common/Title"
import { RiPhoneFill } from "react-icons/ri"

const Banner = () => {
  return (
		<>
			<section className='banner'>
				<div className='container'>
					<div>
						<Title title='We are looking forward to start a new project' />{' '}
						<br />
						<TitleLogo title='Lets take your business to the next level!' />
					</div>
					<div>
						<button className='button-primary cta-butn'>
							<RiPhoneFill />
							<span>+977 984-8578-704</span>
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Banner
