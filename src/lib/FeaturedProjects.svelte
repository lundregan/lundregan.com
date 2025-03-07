<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import Glide, { Controls, Breakpoints, Autoplay } from '@glidejs/glide/dist/glide.modular.esm';

	import Heading from './Heading.svelte';
	import image_ravencards from '$lib/assets/screenshot_ravencards.png';
	import image_game from '$lib/assets/screenshot_game.png';

	onMount(() => {
		new Glide('.glide', {
			type: 'carousel',
			startAt: 0,
			perView: 1,
			focusAt: 'center',
			autoplay: 5000,
			gap: 40,
			animationDuration: 700
		}).mount({ Controls, Breakpoints, Autoplay });
	});
	
	const projects = [
		{
			title: "Ravencards",
			description: "Flashcard app utilizing the Spaced Repetition System (SRS, or leitner system specifically) for optimal learning retention. Built with Svelte and Tauri.",
			image: image_ravencards,
			technologies: ["devicon:svelte", "devicon:tauri"],
			sourceLink: "https://github.com/lundregan/ravencards-app"
		},
		{
			title: "Game Project",
			description: "Game where you collect coins and avoid traps. Built with Godot Engine and GDScript as a learning project.",
			image: image_game,
			technologies: ["devicon:godot"],
			liveLink: "https://lundregan.itch.io/the-loneliest-pixel",
		}
	];
</script>

<div class="py-16 relative">
	<div class="glide relative mt-8">
		<div data-glide-el="track" class="glide__track">
			<ul class="glide__slides">
				{#each projects as project}
					<div class="flex flex-col md:flex-row rounded-none overflow-hidden shadow-[0_0_15px_rgba(255,0,0,0.1)] border border-red-900/20 transform transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] duration-300">
						<div class="w-full md:w-2/3 relative group">
							<img class="w-full h-full object-cover filter brightness-75" src={project.image} alt={project.title} />
							<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6 z-20">
								<div class="flex gap-3">
									{#if project.liveLink}
										<a href={project.liveLink} target="_blank" rel="noopener noreferrer" class="btn btn-sm bg-red-900/50 backdrop-blur-sm text-white border-none hover:bg-red-900/80 font-mono">
											LIVE DEMO <Icon icon="mdi:eye" class="ml-2" />
										</a>
									{/if}
									{#if project.sourceLink}
										<a href={project.sourceLink} target="_blank" rel="noopener noreferrer" class="btn btn-sm bg-black/50 backdrop-blur-sm text-white border border-red-900/30 hover:border-red-500/50 hover:bg-black/70 font-mono">
											SOURCE <Icon icon="mdi:github" class="ml-2" />
										</a>
									{/if}
								</div>
							</div>
							
							<div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500"></div>
							<div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500"></div>
						</div>

						<div class="flex w-full md:w-1/3 flex-col gap-4 bg-black/90 backdrop-blur-sm p-8 relative">
							<h3 class="text-2xl font-bold text-red-500 font-mono tracking-wider">{project.title}</h3>

							<p class="text-gray-300 text-wrap font-light">
								{project.description}
							</p>

							<div class="mt-auto">
								<h4 class="text-xs uppercase text-gray-400 mb-2 font-mono tracking-wider">TECH STACK</h4>
								<div class="flex gap-4 text-3xl">
									{#each project.technologies as tech}
										<Icon icon={tech} class="transition-all hover:scale-110 hover:text-red-400" />
									{/each}
								</div>
							</div>
							
							<!-- Project ID number -->
							<div class="absolute bottom-4 right-4 text-xs text-red-500/70 font-mono">
								PROJECT-{projects.indexOf(project) + 1}
							</div>
							
							<div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500"></div>
							<div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500"></div>
						</div>
					</div>
				{/each}
			</ul>
		</div>
		
		<!-- Custom navigation -->
		<div class="pt-4 flex justify-end gap-4 z-30" data-glide-el="controls">
			<button class="btn btn-circle bg-black/70 backdrop-blur-sm border border-red-900/30 text-red-500 hover:bg-black/90 hover:border-red-500" data-glide-dir="<">
				<Icon icon="mdi:chevron-left" />
			</button>
			<button class="btn btn-circle bg-black/70 backdrop-blur-sm border border-red-900/30 text-red-500 hover:bg-black/90 hover:border-red-500" data-glide-dir=">">
				<Icon icon="mdi:chevron-right" />
			</button>
		</div>
	</div>
</div>
