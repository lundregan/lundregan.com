<script>
    import FaHtml5 from 'svelte-icons/fa/FaHtml5.svelte'
	import FaCss3Alt from 'svelte-icons/fa/FaCss3Alt.svelte'
	import FaJsSquare from 'svelte-icons/fa/FaJsSquare.svelte'
    import FaPhp from 'svelte-icons/fa/FaPhp.svelte'
    import FaFigma from 'svelte-icons/fa/FaFigma.svelte'
    import FaNodeJs from 'svelte-icons/fa/FaNodeJs.svelte'
    import FaSass from 'svelte-icons/fa/FaSass.svelte'
    import FaLinux from 'svelte-icons/fa/FaLinux.svelte'
    

    const skills = [
		{
			name: 'HTML',
			icon: FaHtml5,
			iconColor: 'hover:text-orange-500'
		},
		{
			name: 'CSS',
			icon: FaCss3Alt,
			iconColor: 'hover:text-blue-600'
		},
		{
			name: 'JavaScript',
			icon: FaJsSquare,
			iconColor: 'hover:text-yellow-600'
		},
        {
            name: 'Figma',
            icon: FaFigma,
            iconColor: 'hover:text-purple-600'
        },
        {
            name: 'PHP',
            icon: FaPhp,
            iconColor: 'hover:text-purple-600'
        },
        {
            name: 'Node.js',
            icon: FaNodeJs,
            iconColor: 'hover:text-green-600'
        },
        {
            name: 'Sass',
            icon: FaSass,
            iconColor: 'hover:text-pink-600'
        },
        {
            name: 'Linux',
            icon: FaLinux,
            iconColor: 'hover:text-black'
        }
	]
</script>

<section class="w-full" data-aos="fade-up">
    <h2 class="mb-8 font-serif font-medium text-left h2">Technologies I'm using</h2>
    
    <div class="flex flex-wrap items-center justify-between">
        {#each skills as skill}
            <div class="h-20 md:h-28 text-gray-800 dark:text-gray-400 p-3 sm:p-4 { skill.iconColor ? skill.iconColor : 'hover:text-white'}">
                <svelte:component this={skill.icon} class="transition" />
            </div>
        {/each}
    </div>
</section>