<script>
	import { Accordion, AccordionItem, Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	// Stats Icons
	import IoMdRocket from 'svelte-icons/io/IoMdRocket.svelte'
	import FaServer from 'svelte-icons/fa/FaServer.svelte'
	import GoLink from 'svelte-icons/go/GoLink.svelte'
	
	// Proud to work with logos
	import LogoHoncho from '$lib/img/logo/honcho.svg?raw'
	import LogoOutwardbound from '$lib/img/logo/outwardbound.svg?raw'
	import LogoEckoh from '$lib/img/logo/eckoh.svg?raw'
	
	// Components
	import Collabs from '$lib/collabs.svelte'
	import Timeline from '$lib/Timeline.svelte'

	// sections
	import Hero from '$lib/sections/Hero.svelte'
	import Skills from '$lib/sections/Skills.svelte'
	import Projects from '$lib/sections/Projects.svelte';
	import About from '$lib/sections/About.svelte';

	const stats = [
		{
			value: '30+',
			name: 'Website Collaborations'
		},
		{
			value: '4+',
			name: 'Years Experience'
		}
	]

	const showcaseSkills = [
		{
			icon: IoMdRocket,
			heading: 'Frontend Excellence',
			text: 'Combining art with functionality, I craft visually engaging and user-centric interfaces.'
		},
		{
			icon: FaServer,
			heading: 'Backend Development',
			text: 'Engineering resilient, scalable, and efficient digital platforms that run smoothly and reliably.'
		},
		{
			icon: GoLink,
			heading: 'Full Stack Synergy',
			text: 'Marrying frontend artistry with backend reliability, delivering stellar UX/UI with optimal performance.'
		}
	]

	const proudToWorkWithList = [
		{
			logo: LogoOutwardbound,
			alt: 'Outwardbound Company Logo'
		},
		{
			logo: LogoHoncho,
			alt: 'Honcho Company Logo'
		},
		{
			logo: LogoEckoh,
			alt: 'Eckoh Company Logo',
			logoClass: 'pb-3'
		}
	]
</script>

<main class="h-full w-full flex flex-col gap-32 items-center container mx-auto pb-8 px-4 md:pb-40">
	<Hero />

	<section class="w-full">
		<h2 class="h3 dark:text-gray-400 px-8 text-left sm:text-center font-serif">
			Proudly worked with:
		</h2>
		<div class="py-8 flex flex-col sm:flex-row items-center mt-16 sm:mt-0 gap-16 text-secondary w-full justify-between">
			{#each proudToWorkWithList as company}
				<div class="{company.logoClass} text-gray-700 dark:text-gray-200 h-32">{@html company.logo}</div>
			{/each}
		</div>
	</section>

	<Projects />

	<Skills />

	<About />
</main>
