<script>
    import FaHtml5 from 'svelte-icons/fa/FaHtml5.svelte'
	import FaCss3Alt from 'svelte-icons/fa/FaCss3Alt.svelte'
	import FaJsSquare from 'svelte-icons/fa/FaJsSquare.svelte'

    const skills = [
		{
			name: 'HTML',
			icon: FaHtml5,
			iconColor: 'hover:text-orange-500'
		},
		{
			name: 'CSS',
			icon: FaCss3Alt,
			iconColor: 'hover:text-blue-500'
		},
		{
			name: 'JavaScript',
			icon: FaJsSquare,
			iconColor: 'hover:text-yellow-500'
		}
	]
</script>

<section class="w-full my-16">
    <h1 class="h1 font-medium mb-8 font-serif text-left">Technologies I'm using</h1>
    
    <div class="flex flex-wrap justify-between items-center">
        {#each skills as skill}
            <div class="w-16 text-gray-400 { skill.iconColor ? skill.iconColor : 'hover:text-white'}">
                <svelte:component this={skill.icon} class="transition" />
            </div>
        {/each}
    </div>
</section>