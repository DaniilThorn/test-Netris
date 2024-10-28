import { VideoPlayer } from './components/VideoPlayer'
import { EventList } from './components/EventList'

export const App = () => {
	return (
		<main style={{display: 'flex', flexDirection: 'column'}}>
			<VideoPlayer />
			<EventList />
		</main>
	)
}
