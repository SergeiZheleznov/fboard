<script lang="ts">
	import { calculateFretWidths } from '../../utils';

	import { css, tw } from 'twind';
	import Fret from './Fret.svelte';
	import type { IFret, StringId } from './types';

	export let frets: IFret[] = [];
	export let id: StringId = 3;

	const calcHeight = (thikness: StringId) => {
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
			height: calcHeight(id)
		})
	);

	$: frets = calculateFretWidths(frets);
</script>

<div class="h-12 w-full relative flex items-center">
	<div class={`w-full dark:(bg-stone-700) ${heightCss}`} />
	<div class="absolute h-12 w-full top-0 left-0 flex">
		{#each frets as fret}
			<Fret width={fret.width} idx={fret.idx} badge={fret.badge} />
		{/each}
	</div>
</div>
