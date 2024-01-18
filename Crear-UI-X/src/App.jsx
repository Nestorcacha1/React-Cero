import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
const users = [
	{ username: 'midudev', isfollwing: true, name: 'Miguel Ángel Duran' },
	{ username: 'soydalto', isfollwing: false, name: 'Dalto' },
	{ username: 'mouredev', isfollwing: true, name: 'Brais Moure' },
	{ username: 'juandav', isfollwing: false, name: 'Juan David' },
]
export function App() {
	// const format = (username) => `@${username}`
	// const midudev = { isFollwing: true, username: "midudev" };
	// const braismoure = { isFollwing: false, username: "braismoure" };
	return (
		<section className='App'>
			{users.map(user => {
				const { username, isfollwing, name } = user
				return (
					<TwitterFollowCard
						key={username}
						username={username}
						initialIsFollwing={isfollwing}
					>
						{name}
					</TwitterFollowCard>
				)
			})}
		</section>
	)
}

export default App
