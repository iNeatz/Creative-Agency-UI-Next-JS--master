import React from 'react'
import { Title } from './common/Title'
import { caseStudy } from '@/assets/data/dummydata'
import { Card } from './common/Card'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'

const ShowCase = () => {
	return (
		<>
			<section className='showcase'>
				<div className='container'>
					<div className='heading-title'>
						<Title title='Case Study' />
					</div>
					<div className='hero-content grid-3 py'>
						{caseStudy.map((item) => (
							<Card data={item} path={item.path} target="_blank" key={item.id} />
						))}
					</div>
					{/* <div className='card links'>
            <Link href='/'>
              VIEW ALL CASES <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div> */}
				</div>
			</section>
		</>
	)
}

export default ShowCase
