<script>
	import '../app.css';
	import '@fontsource/tomorrow';
	
	let { children } = $props();
</script>

<svelte:head> 
	<link rel="preload" as="font" href="/fonts/custom-font.woff2" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<div class="navbar bg-base-100 shadow-sm">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl">Lundregan</a>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
		</button>
	</div>
</div>

<div class="px-[10vw]">
	{@render children()}
</div>
