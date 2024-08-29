import { showcase } from '@/assets/data/dummydata'
import { Card } from '@/components/common/Card'
import { Title, TitleSm } from '@/components/common/Title'
import React from 'react'

const ShowCase = () => {
	return (
		<>
			<section className='showcase bg-top mb'>
				<div className='container'>
					<div className='heading-title'>
						<TitleSm title='SHOWCASE' /> <br />
						<br />
						<Title
							title='Fresh ideas. Bold design. Smart realisation.'
							className='title-bg'
						/>
					</div>
					<br />
					<br />
					<div className='grid-3'>
						{showcase.map((item) => (
							<Card
								data={item}
								path={item.path}
								target='_blank'
								key={item.id}
								caption={item.post}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default ShowCase
