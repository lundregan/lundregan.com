<script>
    const logoCloud = [
        {
            name: 'Global Connections',
            url: 'https://www.globalconnections.org.uk/'
        },
		{
			name: 'Hubpay',
			url: 'https://wearehubpay.com/'
		},
		{
			name: 'Outwardbound Trust',
			url: 'https://outwardbound.org.uk'
		},
		{
			name: 'Honcho',
			url: 'https://honcho.agency'
		},
		{
			name: 'Smart Container Company',
			url: 'https://www.smartcontainer.co.uk/'
		},
		{
			name: 'Santa Marta Group',
			url: 'https://santamartagroup.org/'
		},
        {
            name: 'Vist York',
            url: 'https://www.visityork.org/'
        },
        {
            name: 'CPI',
            url: 'https://www.uk-cpi.com/'
        },
        {
            name: 'Together Network',
            url: 'https://www.togethernetwork.org.uk/'
        }
	];
</script>


<div class="w-full flex flex-col gap-8">
    <h2 class="h1 font-serif">Collaborations</h2>
    <div class="logo-cloud grid-cols-1 md:grid-cols-2 gap-x-2 gap-2 md:gap-4 overflow-visible {logoCloud.length % 2 == 0 ? 'lg:!grid-cols-4' : 'lg:!grid-cols-3'}" >
        {#each logoCloud as cloud}
            <a class="logo-item group variant-filled-primary dark:variant-glass-secondary p-4 hover:z-10" href={cloud.url} target="_blank">
                <!-- <span>(icon)</span> -->
                <span class="text-2xl group-hover:font-medium font-medium text-white">{cloud.name}</span>
            </a>
        {/each}
    </div>
</div>