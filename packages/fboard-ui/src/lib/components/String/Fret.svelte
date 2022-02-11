<script lang="ts">
	export let width;
	export let idx;
</script>

<div style={`width: ${width}%`} class={`h-full flex items-center`}>
	<div style="width: 4%;" class="h-full bg-stone-700" />
	<div class="grow h-6 flex items-center justify-center overflow-hidden">
		<div class="rounded-full bg-stone-800 h-6 w-6 border-1 border-stone-700 flex items-center justify-center text-sm font-bold text-white">{idx}</div>
	</div>
</div>
