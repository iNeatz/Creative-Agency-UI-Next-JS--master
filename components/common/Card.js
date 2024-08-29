import Link from 'next/link'
import { TitleSm } from './Title'
import { HiOutlineArrowRight } from 'react-icons/hi'

export const Card = ({ data, caption, show, path, target = '_self' }) => {
	return (
		<>
			<div className='card'>
				<div className='card-img'>
					<img src={data.cover} alt={data.title} />
				</div>
				<div className='card-details'>
					<Link href={`${path}`} className='title-link' target={target}>
						<TitleSm title={data.title} />
					</Link>
					{caption && (
						<Link href={`${path}/${data.id}`} target={target}>
							{caption} <HiOutlineArrowRight className='link-icon' />
						</Link>
					)}
					<div className='flex'>
						<span> {data.catgeory} </span>{' '}
						{data.date && <span> / {data.date}</span>}
					</div>

					{show && (
						<ul>
							{data.desc.map((text, i) => (
								<li key={i}> - {text.text}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	)
}
