import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
		<>
			<section className='expertise'>
				<div className='container'>
					<div className='heading-title'>
						<Title title='Our expertise' />
						<p>
							We specialize in SEO, content marketing, social media management,
							and PPC campaigns, using data-driven strategies to maximize your
							online impact.
						</p>
					</div>
					<div className='hero-content grid-4'>
						{expertise.map((item) => (
							<Card data={item} key={item.id} path="services" caption='learn more' />
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Expertise
