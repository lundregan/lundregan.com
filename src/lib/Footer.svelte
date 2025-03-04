<script>
	import Icon from '@iconify/svelte';

	const subheading = 'UK, Ethan Lundregan';
	const heading = 'Front-end developer, half a decade of experience';

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
</script>

<footer class="flex flex-col items-center gap-4 py-8">
	<div class="flex items-center gap-1">
		{#each links as link}
			<a class="group px-1" href={link.url} target="_blank" rel="noopener noreferrer">
				<Icon
					class="text-2xl transition group-hover:-translate-y-1.5 group-hover:scale-125"
					icon={link.icon}
				/>
			</a>
		{/each}
	</div>

	<span class="text-sm text-gray-300">Ethan Lundregan © 2025</span>
</footer>
