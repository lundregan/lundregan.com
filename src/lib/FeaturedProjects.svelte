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
			autoplay: false,
			gap: 40,
			animationDuration: 700
		}).mount({ Controls, Breakpoints, Autoplay });
	});
</script>

<div>
	<Heading text="projects" />

	<div class="glide relative">
		<div data-glide-el="track" class="glide__track">
			<ul class="glide__slides">
				<div class="flex">
					<img class="w-2/3 rounded-l-xl object-cover" src={image_ravencards} alt="" />

					<div class="flex w-full flex-col gap-4 rounded-r-xl bg-zinc-900 p-8">
						<h3 class="text-2xl text-blue-500">Ravencards</h3>

						<span class=" text-wrap">
							Flashcard app utilizing the Spaced Repetition System (SRS, or leitner system
							specifically) for optimal learning retention. Built with Svelte and Tauri.
						</span>

						<div class="flex gap-4 text-3xl">
							<Icon icon="devicon:svelte" />
							<Icon icon="devicon:tauri" />
						</div>
					</div>
				</div>

				<div class="flex">
					<img class="w-2/3 rounded-l-xl object-cover" src={image_game} alt="" />

					<div class="flex w-full flex-col gap-4 rounded-r-xl bg-zinc-900 p-8">
						<h3 class="text-2xl text-red-500">Ravencards</h3>

						<span class=" text-wrap">
							Game where you collect coins and avoid traps. Built with Godot Engine and GDScript as
							a learning project.
						</span>

						<div class="flex gap-4 text-3xl">
							<Icon icon="devicon:godot" />
						</div>
					</div>
				</div>
			</ul>
		</div>

		<div
			class="glide__arrows absolute top-1/2 flex w-full justify-between text-3xl"
			data-glide-el="controls"
		>
			<button
				class="glide__arrow glide__arrow--left -translate-x-10 cursor-pointer text-white transition active:scale-90 active:text-gray-100"
				data-glide-dir="<"
			>
				<Icon class="rotate-180" icon="entypo:controller-play" />
			</button>

			<button
				class="glide__arrow glide__arrow--right translate-x-10 cursor-pointer text-white transition active:scale-90 active:text-gray-100"
				data-glide-dir=">"
			>
				<Icon class="" icon="entypo:controller-play" />
			</button>
		</div>
	</div>
</div>
