interface EventRectProps {
	zone: {
		left: number
		top: number
		width: number
		height: number
	}
}

export const EventRect = ({ zone }: EventRectProps) => {
	return (
		<div
			style={{
				top: zone.top,
				left: zone.left,
				width: zone.width,
				height: zone.height,
				backgroundColor: 'red',
				boxSizing: 'border-box',
				position: 'absolute',
			}}
		/>
	)
}
