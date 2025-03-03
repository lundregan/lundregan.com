<script>
	import '../app.css';
	import '@fontsource/tomorrow';
	
	import Navbar from '$lib/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head> 
	<link rel="preload" as="font" href="/fonts/custom-font.woff2" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<Navbar />

<div class="px-[10vw]">
	{@render children()}
</div>
