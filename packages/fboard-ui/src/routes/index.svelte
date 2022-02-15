<script lang="ts">
	import { ViewPort, String, FretBoard, IFret } from '$lib/components';
	const frets = Array(24)
		.fill(0)
		.map((el, idx) => {
			return {
				idx: idx + 1,
				badge: `${idx}`,
				onBadgeClick: () => {
					console.log('click');
				},
				status: 'default'
			} as IFret;
		});
	console.log({ frets });
</script>

<ViewPort>
	<FretBoard fretCount={frets.length}>
		<String thikness={6} {frets} />
		<String thikness={5} {frets} />
		<String thikness={4} {frets} />
		<String thikness={3} {frets} />
		<String thikness={2} {frets} />
		<String thikness={1} {frets} />
	</FretBoard>
</ViewPort>
