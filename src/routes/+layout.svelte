<script>
	import '../app.css';
	import '@fontsource/tomorrow';
	
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head> 
	<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css">
</svelte:head>

<Navbar />

<div class="px-[10vw]">
	{@render children()}
</div>

<Footer />
