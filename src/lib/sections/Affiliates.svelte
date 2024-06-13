<script>
    // Proud to work with logos
	import LogoHoncho from '$lib/img/logo/honcho.svg?raw'
	import LogoOutwardbound from '$lib/img/logo/outwardbound.svg?raw'
	import LogoEckoh from '$lib/img/logo/eckoh.svg?raw'
    
    const proudToWorkWithList = [
		{
			logo: LogoOutwardbound,
			alt: 'Outwardbound Company Logo'
		},
		{
			logo: LogoHoncho,
			alt: 'Honcho Company Logo'
		},
		{
			logo: LogoEckoh,
			alt: 'Eckoh Company Logo',
			logoClass: 'pb-3'
		}
	]
</script>

<section class="w-full">
    <h2 class="h3 dark:text-gray-400 px-8 text-left sm:text-center font-serif">
        Proudly worked with:
    </h2>
    <div class="py-8 flex flex-col sm:flex-row items-center mt-16 sm:mt-0 gap-16 text-secondary w-full justify-between">
        {#each proudToWorkWithList as company}
            <div class="{company.logoClass} text-gray-700 dark:text-gray-200 h-32">{@html company.logo}</div>
        {/each}
    </div>
</section>