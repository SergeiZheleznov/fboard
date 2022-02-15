<script lang="ts">
	export let width: number;
	export let idx: number;
</script>

<div style={`width: ${width}%`} class={`h-full flex items-center`}>
	<div class="grow h-6 flex items-center justify-center overflow-hidden">
		<div class="rounded-full bg-black opacity-70 h-6 w-6 border-1 border-stone-700 flex items-center justify-center text-sm font-bold text-white">
			{`${idx}`}
		</div>
	</div>
	<div class="h-full w-1" />
</div>
