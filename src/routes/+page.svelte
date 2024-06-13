<script>
	// sections
	import Hero from '$lib/sections/Hero.svelte'
	import Skills from '$lib/sections/Skills.svelte'
	import Projects from '$lib/sections/Projects.svelte';
	import About from '$lib/sections/About.svelte';
	import Affiliates from '$lib/sections/Affiliates.svelte';
</script>

<main class="h-full w-full flex flex-col gap-32 items-center container mx-auto pb-8 px-4 md:pb-40">
	<Hero />

	<Affiliates />

	<Projects />

	<Skills />

	<About />
</main>
