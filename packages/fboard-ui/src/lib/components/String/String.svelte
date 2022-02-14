<script lang="ts">
	import { css, tw } from 'twind';
	import Fret from './Fret.svelte';

	type StringThikness = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

	export let fretCount = 24;
	export let thikness: StringThikness = 3;

	let frets = [];

	const calcHeight = (thikness: StringThikness) => {
		switch (thikness) {
			case 1:
				return '2px';
			case 2:
				return '3px';
			case 3:
				return '4px';
			case 4:
				return '4px';
			case 5:
				return '5px';
			case 6:
				return '6px';
			case 7:
				return '7px';
			case 8:
				return '7px';
		}
	};

	$: heightCss = tw(
		css({
			height: calcHeight(thikness)
		})
	);

	$: {
		let lengthRest = 100;
		const fretsLengths = [];
		for (let idx = 0; idx < fretCount; idx++) {
			const lng = lengthRest / 17.817;
			lengthRest = lengthRest - lng;
			fretsLengths[idx] = lng;
		}
		const minLength = lengthRest / fretCount;
		frets = fretsLengths.map((l) => {
			return parseFloat((l + minLength).toFixed(1));
		});

		let total = 0;
		frets.forEach((element) => {
			total = total + element;
		});
		console.log({ total });
	}
</script>

<div class="h-12 w-full relative flex items-center">
	<div class={`w-full dark:(bg-stone-700) ${heightCss}`} />
	<div class="absolute h-12 w-full top-0 left-0 flex">
		{#each frets as fretLenght, idx}
			<Fret width={fretLenght} idx={idx + 1} />
		{/each}
	</div>
</div>
