<script>
	import Heading from './Heading.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import image_cpi from '$lib/assets/screenshot_cpi.png';
	import image_honcho from '$lib/assets/screenshot_honcho.png';
	import image_ob from '$lib/assets/screenshot_ob.png';

	const works = [
		{
			client: 'Honcho',
			title: 'CPI',
			description:
				"Website refresh for CPI, a key tool for attracting new clients. Ensuring seamless functionality and a design that highlights the agency's strengths.",
			image: image_cpi,
			link: 'https://www.uk-cpi.com/'
		},
		{
			client: 'Honcho',
			title: 'Outwardbound',
			description:
				"Website refresh for OB, a key tool for attracting new clients. Ensuring seamless functionality and a design that highlights the agency's strengths.",
			image: image_ob,
			link: 'https://www.outwardbound.org.uk/'
		},
		{
			client: 'Honcho',
			title: 'Honcho',
			description:
				"Website refresh for Honcho's lead-generating website, a key tool for attracting new clients. Ensuring seamless functionality and a design that highlights the agency's strengths.",
			image: image_honcho,
			link: 'https://www.honcho.agency/'
		}
	];
	
	let visibleWorks = [];
	
	onMount(() => {
		// Simulate staggered loading for visual effect
		works.forEach((work, index) => {
			setTimeout(() => {
				visibleWorks = [...visibleWorks, work];
			}, index * 200);
		});
	});
</script>

<div class="py-16 relative">
	<!-- Futuristic background elements -->
	<div class="absolute -z-10 top-1/3 left-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-[80px]"></div>
	<div class="absolute -z-10 right-0 top-0 w-[1px] h-64 bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
	
	<Heading text="WORK" />

	<div class="flex flex-col gap-8 mt-8">
		{#each visibleWorks as work, i}
			<div 
				class="flex flex-col md:flex-row overflow-hidden border border-red-900/20 shadow-[0_0_15px_rgba(255,0,0,0.05)] hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] transition-all duration-300  relative"
				in:fly={{y: 20, duration: 400, delay: i * 100}}
			>
				<div class="absolute top-0 left-0 bg-red-900 text-white px-2 py-1 text-xs font-mono z-10">
					PROJ-{i + 1}-XR//{(i * 7) + 42}::EXEC
				</div>

				<div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500 z-10"></div>
				<div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500 z-10"></div>
				<div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500 z-10"></div>
				<div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500 z-10"></div>
				
				<div class="w-full md:w-1/2 lg:w-2/3 h-64 md:h-auto relative">	
					<img class="w-full h-full object-cover " src={work.image} alt={work.title} />
				</div>

				<div class="flex w-full md:w-2/3 flex-col gap-3 p-4 pl-8 bg-black/90 backdrop-blur-sm relative justify-between">
					<div>
						<div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
							<span class="text-gray-400 text-sm font-mono tracking-wider">CLIENT: {work.client}</span>
							<div class="badge bg-black border border-red-900/50 text-xs font-mono">SOURCECODE CLASSIFIED</div>
						</div>
						
						<h3 class="text-2xl md:text-3xl font-bold text-red-500 font-mono tracking-wider">{work.title}</h3>
						
						<p class="text-gray-300 font-light">{work.description}</p>
					</div>
					
					<div class="mt-4 flex justify-end gap-3">
						{#if work.link}
						<a href={work.link} target="_blank" rel="noopener noreferrer" class="btn btn-sm bg-red-900/30 hover:bg-red-900/50 border border-red-900/50 hover:border-red-500 text-white font-mono tracking-wider">
							<span class="mr-1">ACCESS</span>
							<Icon icon="mdi:arrow-right" />
						</a>
						{/if}
						
						{#if work.liveLink}
							<a href={work.link} target="_blank" rel="noopener noreferrer" class="btn btn-sm bg-red-900/30 hover:bg-red-900/50 border border-red-900/50 hover:border-red-500 text-white font-mono tracking-wider">
								<span class="mr-2">ACCESS_GRANTED LIVE SITE</span>
								<Icon icon="mdi:arrow-right" />
							</a>
						{:else}
							<button disabled class="btn btn-sm bg-black/50 border border-red-900/30 text-gray-500 font-mono tracking-wider line-through opacity-70 cursor-not-allowed relative group">
								<span class="mr-2">ACCESS_DENIED SOURCE CODE</span>
								<Icon icon="mdi:lock" />
								<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
									<span class="text-red-500 text-xs">CLASSIFIED</span>
								</div>
							</button>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
