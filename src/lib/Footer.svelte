<script>
	import Icon from '@iconify/svelte';

	const links = [
		{
			icon: 'mdi:github',
			url: 'https://github.com/lundregan'
		},
		{
			icon: 'mdi:linkedin',
			url: 'https://www.linkedin.com/in/ethan-lundregan-0b1b3b1b1/'
		},
		{
			icon: 'mdi:twitter',
			url: 'https://twitter.com/lundregan'
		},
		{
			icon: 'mdi:email',
			url: 'mailto:contact@lundregan.com'
		}
	];
	
	const currentYear = new Date().getFullYear();
</script>

<footer class="py-12 relative">
	<!-- Futuristic background elements -->
	<div class="absolute -z-10 top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
	<div class="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px]"></div>
	<div class="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px]"></div>
	
	<!-- Animated circuit line -->
	<div class="absolute -z-10 top-0 left-0 w-full h-full opacity-20">
		<div class="absolute top-1/2 left-0 w-full h-[1px] bg-red-500">
		</div>
	</div>
	
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row justify-between items-center gap-8">
			<div class="mt-8 border-t border-red-900/30 pt-4">
				<div class="font-mono text-xs flex flex-wrap gap-x-1">
					<span class="text-red-500">></span>
					<span class="text-gray-400">ACCESS_GRANTED</span>
					<span class="text-gray-500">|</span>
					<span class="text-gray-400">COPYRIGHT</span>
					<span class="text-gray-500">|</span>
					<span class="text-red-500">{currentYear}</span>
					<span class="text-gray-500">|</span>
					<span class="text-gray-400">ALL_RIGHTS_RESERVED</span>
					<span class="text-red-500 animate-pulse">_</span>
				</div>
			</div>

			<div class="flex flex-col items-center md:items-end gap-4">
				<div class="flex items-center gap-4 mb-4">
					{#each links as link}
						<a 
							class="group p-2 bg-black/50 border border-red-900/30 hover:border-red-500/50 rounded-none transition-all" 
							href={link.url} 
							target="_blank" 
							rel="noopener noreferrer"
							aria-label={link.icon.replace('mdi:', '')}
						>
							<Icon 
								class="text-xl text-red-500 transition-all duration-300 group-hover:scale-110" 
								icon={link.icon} 
							/>
						</a>
					{/each}
				</div>
				
				<div class="flex flex-col items-center md:items-end">
					<span class="text-sm text-gray-400 font-mono">SYSTEM VERSION {currentYear}.03.07</span>
					<span class="text-xs text-red-500/70 font-mono mt-1">LUNDREGAN CORPORATION</span>
				</div>
			</div>
		</div>
		
		<!-- Terminal-like copyright -->
		
	</div>
</footer>

<style>
	@keyframes circuit {
		0% { transform: translateX(-100%); }
		100% { transform: translateX(100vw); }
	}
</style>
