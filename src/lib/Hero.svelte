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
	]
</script>

<div class="my-80">
	<div class="flex items-center gap-2 text-red-500">
		<Icon class=""icon="gis:location-poi" />
		<h1 class="">{subheading}</h1>
	</div>

	<h2 class="text-3xl">{heading}</h2>

	<div class="flex mt-2">
		{#each links as link}
			<a class="group px-1" href={link.url} target="_blank" rel="noopener noreferrer">
				<Icon class="transition text-3xl group-hover:scale-125 group-hover:-translate-y-1.5" icon={link.icon} />
			</a>
		{/each}
	</div>
</div>
