<script lang="ts">
	import { ViewPort, FretBoard, Str, IFret } from '@fboard-svelte/ui';
	import { Range, Midi } from '@tonaljs/tonal';

	const tune = ['E4', 'B4', 'G3', 'D3', 'A2', 'E2'];
	const fretsCount = 24;

	const strings = tune.map((note) => {
		const midiNote = Midi.toMidi(note);
		console.log({ midiNote });
		const range = Range.numeric([midiNote, midiNote + fretsCount - 1]);
		const frets: IFret[] = range.map((el, idx) => {
			const note = Midi.midiToNoteName(el, { pitchClass: true, sharps: true });
			return {
				idx,
				badge: note
			};
		});

		return frets;
	});

	console.log({ strings });
</script>

<ViewPort>
	<FretBoard fretCount={fretsCount}>
		{#each strings as frets, idx}
			<Str id={4} {frets} />
		{/each}
	</FretBoard>
</ViewPort>
