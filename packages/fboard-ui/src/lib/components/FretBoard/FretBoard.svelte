<script lang="ts">
	import type { IFret } from '../';
	import { calculateFretWidths } from '../../utils';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	export let fretCount = 24;

	let frets: IFret[] = [];
	const baseWrapper: Writable<HTMLDivElement> = writable(null);
	const fretBoardWrapper: Writable<HTMLDivElement> = writable(null);

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
		// $fretBoardWrapper.style.height = $baseWrapper.clientHeight + 'px';
	});
</script>

<div bind:this={$baseWrapper} class="base-wrapper@(relative z-10)">
	<slot />
</div>
<div bind:this={$fretBoardWrapper} class="fboard-wrapper@(w-full overflow-hidden flex absolute bg-stone-900 top-0 left-0 z-0)">
	{#each frets as fret}
		<div style={`width: ${fret.width}%`} class="@(flex h-full)">
			<div class="@(grow flex items-center justify-center)">
				{#if [5, 7, 9, 12, 15, 17, 19, 21].includes(fret.idx)}
					<div class="h-5 w-5 rounded-full bg-stone-300" />
				{/if}
			</div>
			<div class="w-1 bg-stone-500" />
		</div>
	{/each}
</div>
