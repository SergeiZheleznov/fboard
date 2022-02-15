<script lang="ts">
	export let width: number;
	export let idx: number;
	export let badge: string = undefined;
</script>

<div style={`width: ${width}%`} class={`h-full flex items-center`}>
	<div class="grow h-6 flex items-center justify-center overflow-hidden">
		<div class="rounded-full bg-stone-900 h-6 w-6 flex items-center justify-center text-sm font-bold text-amber-400">
			{`${badge || idx}`}
		</div>
	</div>
	<div class="h-full w-1" />
</div>
