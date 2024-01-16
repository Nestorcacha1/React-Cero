import './App.css'
import { TwitterFollwCard } from './TwitterFollowCard'

function App() {
	// const format = (username) => `@${username}`
	// const midudev = { isFollwing: true, username: "midudev" };
	// const braismoure = { isFollwing: false, username: "braismoure" };
	return (
		<section className='App'>
			<TwitterFollwCard initialIsFollwing={true} username='midudev'>
				Miguel Angel Duran
			</TwitterFollwCard>
			<TwitterFollwCard isFollwing username='mouredev'>
				Brais Moure
			</TwitterFollwCard>
		</section>
	)
}

export default App
