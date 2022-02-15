<script lang="ts">
	import { ViewPort, Str, FretBoard, IFret } from '$lib/components';
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
		<Str id={6} {frets} />
		<Str id={5} {frets} />
		<Str id={4} {frets} />
		<Str id={3} {frets} />
		<Str id={2} {frets} />
		<Str id={1} {frets} />
	</FretBoard>
</ViewPort>
