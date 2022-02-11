<script lang="ts">
	import Fret from './Fret.svelte';
	export let fretCount = 24;

	// $: fretsWidths = [...Array(fretCount)].map((_, idx) => {
	// 	const n = 17.817;
	// //		const length =
	// })

	let frets = [];

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
	<div class="h-1 w-full dark:(bg-stone-700)" />
	<div class="absolute h-12 w-full top-0 left-0 flex">
		{#each frets as fretLenght, idx}
			<Fret width={fretLenght} idx={idx + 1} />
		{/each}
	</div>
</div>
