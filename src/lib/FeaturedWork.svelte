<script>
	import Heading from './Heading.svelte';
	import image_cpi from '$lib/assets/screenshot_cpi.png';
	import image_honcho from '$lib/assets/screenshot_honcho.png';
	import image_ob from '$lib/assets/screenshot_ob.png';

	const works = [
		{
			client: 'Honcho',
			title: 'CPI',
			description:
				"Website refresh for CPI, a key tool for attracting new clients. Ensuring seamless functionality and a design that highlights the agency's strengths.",
			image: image_cpi
		},
		{
			client: 'Honcho',
			title: 'Outwardbound',
			description:
				"Website refresh for OB, a key tool for attracting new clients. Ensuring seamless functionality and a design that highlights the agency's strengths.",
			image: image_ob
		},
		{
			client: 'Honcho',
			title: 'Honcho',
			description:
				"Website refresh for Honcho's lead-generating website, a key tool for attracting new clients. Ensuring seamless functionality and a design that highlights the agency's strengths.",
			image: image_honcho
		}
	];
</script>

<div>
    <Heading text="work" />

	<div class="flex flex-col gap-6">
		{#each works as work}
			<div class="flex">
				<img class="w-1/3 rounded-l-xl object-cover" src={work.image} alt="" />

				<div class="flex w-full flex-col gap-1 rounded-r-xl bg-zinc-900 p-8">
					<span class="text-gray-400">{work.client}</span>
					<h3 class="text-2xl text-blue-500">{work.title}</h3>
					<p>{work.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
