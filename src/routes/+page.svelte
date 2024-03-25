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
	import LogoHubpay from '$lib/img/logo/hubpay.svg?raw'
	
	// Components
	import Collabs from '$lib/collabs.svelte'
	import Timeline from '$lib/Timeline.svelte'

	// sections
	import Hero from '$lib/sections/Hero.svelte'
	import Skills from '$lib/sections/Skills.svelte'
	import Projects from '$lib/sections/Projects.svelte';

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
			logo: LogoHubpay,
			alt: 'Hubpay Company Logo',
			logoClass: 'pt-4'
		},	
		{
			logo: LogoHoncho,
			alt: 'Honcho Company Logo'
		}
	]
</script>

<main class="h-full w-full flex flex-col gap-32 items-center container mx-auto pb-8 px-4 md:pb-40">
	<Hero />

	<section class="w-full">
		<h2 class="h3 dark:text-gray-400 px-8 text-left sm:text-center font-serif">
			Proudly worked with:
		</h2>
		<div class="py-8 flex flex-col sm:flex-row items-center mt-16 sm:mt-0 gap-32 sm:gap-16 text-secondary w-full justify-between">
			{#each proudToWorkWithList as company}
				<div class="{company.logoClass} text-gray-700 dark:text-gray-200">{@html company.logo}</div>
			{/each}
		</div>
	</section>

	<Projects />

	<Skills />

	<section class="flex flex-col gap-16" id="anchor-about">
		<div class="text-xl font-medium w-full">
			<div class="relative">
				<h1 class="h1 font-medium mb-8 font-serif">About</h1>
				<!-- <span class="absolute left-0 top-0 -translate-y-20 pl-8 opacity-30 z-[-10] text-[200px] text-gray-800">About</span> -->
			</div>
			<div class="flex flex-col gap-10">
				<div class="flex flex-col gap-6 text-2xl font-medium font-league">
					<p>
						I'm a web developer from the UK and have always been passionate about
						technology and have dedicated my career to building beautiful and functional websites.
					</p>

					<p>
						I have worked with a variety of clients, creating websites for businesses, non-profits, and
						individuals. In my free time, you can find me tinkering with new technologies, learning
						about design principles, or staying up-to-date on industry trends.
					</p>
					
					<p>
						<span>You can always</span>
						<a
							href="mailto:contact@lundregan.com?subject=Hello Ethan - Contacted from  From Lundregan.com"
							class="dark:text-blue-300 hover:underline font-medium"
						>
							Get in touch
						</a>
						<span>if you have any questions or want to collaborate on a project.</span>
					</p>
				</div>
			</div>
		</div>
		
		<Timeline />

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			{#each showcaseSkills as skill}
				<div class="card variant-ringed-primary p-4 flex flex-col gap-4 items-center hover:scale-105 transition-transform">
					<div class="w-16 mx-auto text-primary-500 py-4">
						<svelte:component this={skill.icon} />
					</div>
					<h2 class="h3 font-bold text-center font-serif">{skill.heading}</h2>
					<p class="font-medium dark:text-gray-100 text-gray-600 px-4 text-center text-xl font-league">{skill.text}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Honcho Request - Remove honcho projects from portfolio site -->
	<!-- <section class="w-full mt-40">
		<Collabs />
	</section> -->
</main>
