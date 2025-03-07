<script>
	import Heading from './Heading.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	
	const clients = [
		'Honcho',
		'CPI',
		'Outwardbound'
	];
	
	let visibleClients = [];
	
	onMount(() => {
		// Simulate staggered loading for visual effect
		clients.forEach((client, index) => {
			setTimeout(() => {
				visibleClients = [...visibleClients, client];
			}, index * 150);
		});
	});
</script>

<div class="py-16 relative" id="contact">
	<!-- Futuristic background elements -->
	<div class="absolute -z-10 bottom-1/3 right-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-[80px]"></div>
	<div class="absolute -z-10 left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
	<div class="absolute -z-10 left-0 top-0 w-[1px] h-64 bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
	
	<Heading text="AFFILIATIONS" />
	
	<div class="mt-8 relative">
		<!-- Decorative corner elements -->
		<div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500 z-10"></div>
		<div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500 z-10"></div>
		<div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500 z-10"></div>
		<div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500 z-10"></div>
		
		<div class="bg-black/50 backdrop-blur-sm border border-red-900/20 p-8 relative">
			<!-- System status indicator -->
			<div class="absolute top-4 right-4 flex items-center gap-2">
				<span class="text-xs text-red-500/70 font-mono">SECURE CONNECTION</span>
				<div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
			</div>
			
			<div class="mb-8">
				<h3 class="text-2xl font-bold text-red-500 font-mono tracking-wider mb-4">CORPORATE ENTITIES</h3>
				<p class="text-gray-300 max-w-2xl">
					Operational history includes successful collaborations with the following entities. 
					All interactions are governed by strict confidentiality protocols.
				</p>
			</div>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 gap-6">
				{#each visibleClients as client, i}
					<div 
						class="border border-red-900/30 p-4 flex flex-col items-center justify-center group hover:border-red-500/50 transition-all hover:shadow-[0_0_10px_rgba(255,0,0,0.2)] relative"
						in:fly={{y: 20, duration: 300, delay: i * 100}}
					>
						<!-- Decorative corner elements -->
						<div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
						<div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
						<div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
						<div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
						
						<h4 class="text-xl font-mono tracking-wider text-white group-hover:text-red-400 transition-colors">{client}</h4>
						<div class="text-xs text-red-500/70 font-mono mt-2">ENTITY-{i + 1}</div>
					</div>
				{/each}
			</div>
			
			<div class="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-red-900/30 pt-8">
				<div class="max-w-xl">
					<h3 class="text-xl font-bold text-red-500 font-mono tracking-wider mb-4">INITIATE COMMUNICATION PROTOCOL</h3>
					<p class="text-gray-300">
						Secure channels available for project inquiries and collaboration proposals. 
						Response time optimized for efficiency.
					</p>
				</div>
				
				<a 
					href="mailto:contact@lundregan.com" 
					class="btn bg-red-900/30 hover:bg-red-900/50 border border-red-900/50 hover:border-red-500 text-white font-mono tracking-wider group"
				>
					<span class="mr-2">ESTABLISH CONNECTION</span>
					<Icon icon="mdi:arrow-right" class="transition-transform group-hover:translate-x-1" />
				</a>
			</div>
		</div>
	</div>
</div>
