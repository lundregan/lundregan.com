<script>
    import Timeline from '$lib/Timeline.svelte'

    // Stats Icons
	import IoMdRocket from 'svelte-icons/io/IoMdRocket.svelte'
	import FaServer from 'svelte-icons/fa/FaServer.svelte'
	import GoLink from 'svelte-icons/go/GoLink.svelte'

    const showcaseSkills = [
		{
			icon: IoMdRocket,
			heading: 'Frontend Excellence',
			text: 'Combining art with functionality, I craft visually engaging and user-centric interfaces.'
		},
		{
			icon: FaServer,
			heading: 'Backend Development',
			text: 'Engineering resilient, scalable, and efficient digital platforms that run smoothly and reliably.'
		},
		{
			icon: GoLink,
			heading: 'Full Stack Synergy',
			text: 'Marrying frontend artistry with backend reliability, delivering stellar UX/UI with optimal performance.'
		}
	]
</script>

<section class="flex flex-col gap-16" id="anchor-about">
    <div class="text-xl font-medium w-full">
        <div class="relative">
            <h1 class="h1 font-medium mb-8 font-serif">About</h1>
            <!-- <span class="absolute left-0 top-0 -translate-y-20 pl-8 opacity-30 z-[-10] text-[200px] text-gray-800">About</span> -->
        </div>
        <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-6 text-2xl font-medium font-league">
                <p>
                    I'm a web developer from the UK and have always been passionate about
                    technology and have dedicated my career to building beautiful and functional websites.
                </p>

                <p>
                    I have worked with a variety of clients, creating websites for businesses, non-profits, and
                    individuals. In my free time, you can find me tinkering with new technologies, learning
                    about design principles, or staying up-to-date on industry trends.
                </p>
                
                <p>
                    <span>You can always</span>
                    <a
                        href="mailto:contact@lundregan.com?subject=Hello Ethan - Contacted from  From Lundregan.com"
                        class="dark:text-blue-300 hover:underline font-medium"
                    >
                        Get in touch
                    </a>
                    <span>if you have any questions or want to collaborate on a project.</span>
                </p>
            </div>
        </div>
    </div>
    
    <Timeline />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {#each showcaseSkills as skill}
            <div class="card variant-ringed-primary p-4 flex flex-col gap-4 items-center hover:scale-105 transition-transform">
                <div class="w-16 mx-auto text-primary-500 py-4">
                    <svelte:component this={skill.icon} />
                </div>
                <h2 class="h3 font-bold text-center font-serif">{skill.heading}</h2>
                <p class="font-medium dark:text-gray-100 text-gray-600 px-4 text-center text-xl font-league">{skill.text}</p>
            </div>
        {/each}
    </div>
</section>