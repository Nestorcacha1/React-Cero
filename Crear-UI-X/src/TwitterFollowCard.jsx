import { useState } from 'react'
export function TwitterFollowCard({ children, username, initialIsFollwing }) {
	const [isFollwing, setFollwing] = useState(initialIsFollwing)

	const imgeScr = `https://unavatar.io/${username}`

	const text = isFollwing ? 'Siguiendo' : 'Seguir'

	const buttonClass = isFollwing
		? 'tw-followCard-button is-following'
		: 'tw-followCard-button'
	function handleClieck() {
		setFollwing(!isFollwing)
	}
	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img className='tw-followCard-avatar' src={imgeScr} alt='avatar' />
				<div className='tw-followCard-info'>
					<strong>{children}</strong>
					<span className='tw-followCard-infoUserName'>@{username}</span>
				</div>
			</header>
			<section>
				<button className={buttonClass} onClick={handleClieck}>
					<span className='tw-followCard-text '>{text}</span>
					<span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
				</button>
			</section>
		</article>
	)
}
