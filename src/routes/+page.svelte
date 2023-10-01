<script>
	import { Accordion, AccordionItem, Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	// Stats Icons
	import IoMdRocket from 'svelte-icons/io/IoMdRocket.svelte'
	import FaServer from 'svelte-icons/fa/FaServer.svelte'
	
	// Proud to work with logos
	import LogoHoncho from '$lib/img/logo/honcho.svg?raw'
	import LogoOutwardbound from '$lib/img/logo/outwardbound.svg?raw'
	import LogoHubpay from '$lib/img/logo/hubpay.svg?raw'

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
			heading: 'Frontend',
			text: 'Crafting visually engaging and user-centric interfaces, I specialize in creating responsive and intuitive web designs.'
		},
		{
			icon: FaServer,
			heading: 'Backend',
			text: 'Engineering the backbone of your web applications, I deliver robust and scalable solutions to power your digital platforms.'
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

<main class="h-full w-full flex flex-col items-center container mx-auto pb-8">
	<section class="flex flex-col lg:flex-row-reverse gap-16 w-full px-4 justify-between items-center py-80">
			<Avatar
				src="https://i.ibb.co/RQMCdT4/public-profile-square-styled-blue.png"
				width="w-0 lg:w-80 w-0 lg:h-80"
				rounded="rounded-full"
			/>	
		
			<div class="max-w-xl">
				<h1 class="text-primary font-bold h1">Hey, I'm Ethan👋</h1>
				<p class="text-2xl dark:text-gray-400 font-medium text-gray-700 mt-8">A dynamic and passionate Developer with 3 years of experience in crafting seamless, responsive, and user-friendly web applications. Always eager to learn and take on interesting new challenges. </p>
			</div>
	</section>

	<!-- <section class="flex gap-10 text-center md:text-left">
		{#each stats as stat}
			<div class="space-y-1">
				<span class="font-heading-token text-7xl">{stat.value}</span>
				<p class="text-primary-500">{stat.name}</p>
			</div>
		{/each}
	</section> -->

	<section class="w-full">
		<h2 class="h3 text-gray-400 text-center">
			Proudly worked with:
		</h2>
		<div class="py-8 flex flex-col md:flex-row items-center gap-16 text-secondary w-full justify-between">
			{#each proudToWorkWithList as company}
				<div class="{company.logoClass}">{@html company.logo}</div>
			{/each}
		</div>
	</section>

	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-40">
		{#each showcaseSkills as skill}
			<div class="card p-4 flex flex-col gap-4 items-center">
				<div class="w-16 mx-auto text-primary-700">
					<svelte:component this={skill.icon} />
				</div>
					<h3 class="h3 font-medium">{skill.heading}</h3>
				<p class="font-medium dark:text-gray-100 text-gray-600">{skill.text}</p>
			</div>
		{/each}
	</section>
</main>
