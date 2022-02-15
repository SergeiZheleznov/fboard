<script lang="ts">
	import { initFboardUi } from '@fboard-svelte/ui';
	initFboardUi();

	import { browser } from '$app/env';
	export let dark = true;

	$: if (browser) document.getElementsByTagName('html')[0].classList.toggle('dark', dark);
</script>

<div class="w-full h-screen">
	<slot />
</div>
