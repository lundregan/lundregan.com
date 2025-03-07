<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	
	let scrolled = false;
	let menuOpen = false;
	
	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
	
	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<div class="fixed flex justify-center top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-black/90 backdrop-blur-md border-b border-red-900/30' : 'bg-transparent'}" in:fade={{duration: 300}}>
	<div class="container max-w-7xl py-4 flex items-center justify-between">
		<a href="/" class="flex items-center gap-2 group">
			<svg class="text-red-600 transition-transform group-hover:rotate-12 duration-300" width="32" height="28" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.500004L21.5 37.5L43 0.5L0 0.500004ZM3.00537 2.42294L21.5 33.2563L39.9946 2.42294L3.00537 2.42294Z" fill="currentColor"/>
				<path d="M21.4341 2.50776C27.0053 2.50776 31.5378 7.01114 31.5378 12.5465C31.5378 18.0819 27.0053 22.5853 21.4341 22.5853C15.863 22.5853 11.3305 18.0819 11.3305 12.5465C11.3305 7.01114 15.863 2.50776 21.4341 2.50776ZM21.4341 0.500003C14.7385 0.500003 9.30978 5.89383 9.30978 12.5465C9.30978 19.1992 14.7385 24.593 21.4341 24.593C28.1298 24.593 33.5585 19.1992 33.5585 12.5465C33.5585 5.89383 28.1298 0.500003 21.4341 0.500003ZM20.4238 16.562L14.3616 13.6156V11.4764L20.4238 8.53101V10.7385L16.746 12.5465L20.4238 14.3495V16.562ZM22.4445 8.53101V10.7385L26.1222 12.5465L22.4445 14.3495V16.562L28.5067 13.6156V11.4764L22.4445 8.53101Z" fill="currentColor"/>
			</svg>

			<span class="text-xl font-mono tracking-wider">LUNDREGAN</span>
		</a>
		
		<div class="flex items-center gap-4">
			<div class="badge bg-black border border-red-900 shadow-lg">	
				<div class="inline-grid *:[grid-area:1/1]">
					<div class="status status-success animate-ping scale-125"></div>
					<div class="status status-success scale-125"></div>
				</div>
				<span class="whitespace-nowrap text-xs font-mono">Available</span> 
			</div>
			
			<button class="md:hidden btn btn-sm btn-ghost text-red-500" on:click={toggleMenu}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					{#if menuOpen}
						<path d="M18 6L6 18M6 6l12 12"></path>
					{:else}
						<path d="M3 12h18M3 6h18M3 18h18"></path>
					{/if}
				</svg>
			</button>
		</div>
	</div>
	
	{#if menuOpen}
		<div class="md:hidden bg-black/95 border-t border-red-900/30 py-4 px-4" transition:fade={{duration: 200}}>
			<div class="flex flex-col gap-4 font-mono">
				<a href="#projects" class="py-2 px-4 hover:bg-red-900/20 rounded-md flex items-center gap-2" on:click={toggleMenu}>
					<Icon icon="mdi:chevron-right" class="text-red-500" />
					PROJECTS
				</a>
				<a href="#skills" class="py-2 px-4 hover:bg-red-900/20 rounded-md flex items-center gap-2" on:click={toggleMenu}>
					<Icon icon="mdi:chevron-right" class="text-red-500" />
					SKILLS
				</a>
				<a href="#work" class="py-2 px-4 hover:bg-red-900/20 rounded-md flex items-center gap-2" on:click={toggleMenu}>
					<Icon icon="mdi:chevron-right" class="text-red-500" />
					WORK
				</a>
				<a href="#contact" class="py-2 px-4 hover:bg-red-900/20 rounded-md flex items-center gap-2" on:click={toggleMenu}>
					<Icon icon="mdi:chevron-right" class="text-red-500" />
					CONTACT
				</a>
			</div>
		</div>
	{/if}
</div>

<!-- Spacer to prevent content from being hidden under the navbar -->
<div class="h-16"></div>
