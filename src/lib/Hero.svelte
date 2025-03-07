<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	const subheading = 'UK, Ethan Lundregan';
	const heading = 'Front-end developer, half a decade of experience';

	let typedText = '';
	let cursorVisible = true;
	let typingComplete = false;

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

	const textToType =
		'Specializing in creating advanced user interfaces with cutting-edge technologies. Delivering projects with precision and attention to detail. Committed to transforming your vision into an exceptional digital experience';
	onMount(() => {
		let i = 0;
		const typingInterval = setInterval(() => {
			if (i < textToType.length) {
				typedText += textToType[i];
				i++;
			} else {
				clearInterval(typingInterval);
				typingComplete = true;
			}
		}, 30);

		// Blinking cursor
		setInterval(() => {
			cursorVisible = !cursorVisible;
		}, 500);
	});
</script>

<div class="relative w-full overflow-hidden py-24 md:py-32">
	<!-- Futuristic grid background -->
	<div
		class="absolute inset-0 -z-10 bg-[radial-gradient(#ff000015_1px,transparent_1px)] bg-[size:20px_20px]"
	></div>

	<!-- Red glow effect -->
	<div
		class="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-red-600/10 blur-[100px]"
	></div>
	<div
		class="absolute right-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-red-600/5 blur-[80px]"
	></div>

	<!-- Animated circuit lines -->
	<div class="absolute top-0 left-0 -z-10 h-full w-full opacity-20">
		<div
			class="absolute top-[20%] left-0 h-[1px] w-1/3 animate-[circuit_15s_linear_infinite] bg-gradient-to-r from-transparent via-red-500 to-transparent"
		></div>
		<div
			class="absolute top-[40%] right-0 h-[1px] w-1/4 animate-[circuit_12s_linear_infinite_reverse] bg-gradient-to-r from-transparent via-red-500 to-transparent"
		></div>
		<div
			class="absolute top-0 left-[30%] h-1/3 w-[1px] animate-[circuit-vertical_18s_linear_infinite] bg-gradient-to-b from-transparent via-red-500 to-transparent"
		></div>
		<div
			class="absolute right-[25%] bottom-0 h-1/4 w-[1px] animate-[circuit-vertical_10s_linear_infinite_reverse] bg-gradient-to-b from-transparent via-red-500 to-transparent"
		></div>
	</div>

	<div class="max-w-7xl mx-auto">

		<!-- System status indicators -->
		<div in:fade={{ duration: 800, delay: 200 }} class="my-3 flex flex-col text-red-500">
			<div class="flex items-center gap-2">
				<div class="h-2 w-2 rounded-full bg-green-500"></div>
				<h1 class="font-mono text-sm tracking-wider md:text-base">STATUS: Available</h1>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
				<h1 class="font-mono text-sm tracking-wider md:text-base">
					LOCATION: Wales, United Kingdom
				</h1>
			</div>
		</div>

		<div class="relative">
			<h2
				in:fly={{ y: 20, duration: 800, delay: 400 }}
				class="mb-6 max-w-2xl font-mono text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl"
			>
				{heading}
			</h2>

			<!-- Decorative line -->
			<div class="absolute top-0 bottom-0 -left-4 w-[1px] bg-red-500/50"></div>
		</div>

		<div class="relative mb-8 min-h-32 max-w-xl font-mono text-lg text-gray-300">
			<p>{typedText}<span class={cursorVisible ? 'opacity-100' : 'opacity-0'}>|</span></p>

			{#if typingComplete}
				<div
					in:fade={{ duration: 400, delay: 200 }}
					class="absolute -bottom-2 left-0 h-[1px] w-full bg-gradient-to-r from-red-500/80 to-transparent"
				></div>
				<div
					in:fade={{ duration: 400, delay: 400 }}
					class="absolute -bottom-8 left-0 pt-1 font-mono text-xs text-red-500/70"
				>
					SYSTEM STATUS: OPERATIONAL
				</div>
			{/if}
		</div>

		<div in:fade={{ duration: 800, delay: 1200 }} class="mt-12 flex items-center gap-6">
			{#each links as link, i}
				<a
					class="group relative"
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={link.icon.replace('mdi:', '')}
				>
					<div
						class="absolute -inset-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-800/20 opacity-0 blur-md transition-opacity group-hover:opacity-100"
					></div>
					<Icon
						class="relative z-10 text-3xl text-red-500 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-125"
						icon={link.icon}
					/>
				</a>
			{/each}

			<!-- Connection status -->
			<div class="ml-4 flex items-center gap-2 border border-red-900/30 px-3 py-1">
				<span class="font-mono text-xs text-red-500/70">NETWORK ACTIVE</span>
				<div class="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"></div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes circuit {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100vw);
		}
	}

	@keyframes circuit-vertical {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(100vh);
		}
	}
</style>
