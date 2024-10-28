import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { seekToTimestamp } from '../store/actions'
import { formatTime } from '../utils'
import { RootState } from '../types'

export const EventList = () => {
	const dispatch = useDispatch()
	const events = useSelector((state: RootState) => state.events)
	const loading = useSelector((state: RootState) => state.loading)
	const error = useSelector((state: RootState) => state.error)

	const handleEventClick = useCallback(
		(timestamp: number) => {
			dispatch(seekToTimestamp(timestamp))
		},
		[dispatch]
	)

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			maxWidth: '50%'
		}}>
			{events.length > 0 && (
				<ul
					style={{
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
						maxWidth: '650px',
						gap: 12,
					 }}
				>
					{events.map(event => (
						<li
							style={{borderColor: 'gray', padding: 12}}
							key={event.timestamp}
							onClick={() => handleEventClick(event.timestamp)}
						>
							{formatTime(event.timestamp)}
						</li>
					))}
				</ul>
			)}
			{error && <div>{error}</div>}
			{loading && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					Loading...
				</div>
			)}
		</div>
	)
}
