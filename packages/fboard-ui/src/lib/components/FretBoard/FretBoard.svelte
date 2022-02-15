<script lang="ts">
	import type { IFret } from '$lib';
	import { calculateFretWidths } from '$lib/utils';
	import { onMount } from 'svelte';
	export let fretCount = 24;

	let frets: IFret[] = [];
	let baseWrapper: HTMLDivElement;
	let fretBoardWrapper: HTMLDivElement;

	$: {
		frets = calculateFretWidths(
			Array(fretCount)
				.fill(0)
				.map(
					(el, idx) =>
						({
							idx
						} as IFret)
				)
		);
	}

	onMount(() => {
		fretBoardWrapper.style.height = baseWrapper.clientHeight + 'px';
	});
</script>

<div bind:this={baseWrapper} class="relative z-10">
	<slot />
</div>
<div bind:this={fretBoardWrapper} class="w-full overflow-hidden flex absolute bg-stone-900 top-0 left-0 z-0">
	{#each frets as fret}
		<div style={`width: ${fret.width}%`} class="flex h-full">
			<div class="grow flex items-center justify-center">
				{#if [5, 7, 9, 12, 15, 17, 19, 21].includes(fret.idx)}
					<div class="h-3 w-3 rounded-full bg-white" />
				{/if}
			</div>
			<div class="w-1 bg-stone-500" />
		</div>
	{/each}
</div>
