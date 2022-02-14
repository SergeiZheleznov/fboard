<script lang="ts">
	import { onMount } from 'svelte';

	export let fretCount = 24;

	let frets = [];
	let baseWrapper: HTMLDivElement;
	let fretBoardWrapper: HTMLDivElement;

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
	}

	onMount(() => {
		fretBoardWrapper.style.height = baseWrapper.clientHeight + 'px';
	});
</script>

<div bind:this={baseWrapper} class="relative z-10">
	<slot />
</div>
<div bind:this={fretBoardWrapper} class="w-full overflow-hidden flex absolute bg-stone-900 top-0 left-0 z-0">
	{#each frets as fret, idx}
		<div style={`width: ${fret}%`} class="flex h-full">
			<div class="grow flex items-center justify-center">
				{#if [5, 7, 9, 12, 15, 17, 19, 21].includes(idx)}
					<div class="h-3 w-3 rounded-full bg-white" />
				{/if}
			</div>
			<div class="w-1 bg-stone-500" />
		</div>
	{/each}
</div>
