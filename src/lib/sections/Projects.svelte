<script>
    import imgRavencards from '$lib/img/brave_1BDbjzbySx.jpg'

    import imgOutwardbound from '$lib/img/brave_CDgGCoCuOd.jpg'
    import imgHoncho from '$lib/img/7pNVapwdsB.png'
    import imgCpi from '$lib/img/brave_wFXVQgdXlJ.jpg'
    import imgEnvair from '$lib/img/brave_xoRV8bdcPu.jpg'
    import imgSmg from '$lib/img/brave_u8khNcDWNy.png'
    import imgEckoh from '$lib/img/brave_TIeRT22jcu.jpg'

    const featuredProjects = [
        {
            title: 'Ravencards',
            description: `Landing page design for SRS app, demonstrating visual hierarchy, persuasive copy, and UI principles.`,
            image: imgRavencards,
            link: 'https://www.google.com'
        }
    ]

    const honchoProjects = [
        {
            title: 'Outwardbound Trust',
            description: `We Enhanced the user experience for Outward Bound's website, including visual updates and streamlining the donation process. I also contributed to updates and fixes to the backend donation system.`,
            image: imgOutwardbound,
            link: 'https://www.google.com'
        },
        {
            title: 'envair',
            description: `Visual refresh for Envair Technology's website, aligning with their cutting-edge brand and enhancing user experience.`,
            image: imgEnvair,
            link: 'https://www.google.com'
        },
        {
            title: 'Honcho',
            description: `Website refresh for Honcho's lead-generating website, a key tool for attracting new clients. Ensuring seamless functionality and a design that highlights the agency's strengths.`,
            image: imgHoncho,
            link: imgHoncho
        },
        {
            title: 'SMG',
            description: `We collaborated with the Santa Marta Group to modernize their website, ensuring alignment with their mission and increased online efficacy.`,
            image: imgSmg,
            link: 'https://www.google.com'
        },
        {
            title: 'Eckoh',
            description: `Streamlining User Onboarding & Visual Refresh for Eckoh.com.  As part of a collaborative team, I focused on enhancing the initial user experience and modernizing the website's overall aesthetic.`,
            image: imgEckoh,
            link: 'https://www.google.com'
        },
        {
            title: 'CPI',
            description: `Ongoing visual enhancements for the Centre for Process Innovation (CPI) website, ensuring a dynamic and engaging user experience.`,
            image: imgCpi,
            link: 'https://www.google.com'
        }
    ]
</script>

<section class="w-full">
    <h2 class="h2 font-medium mb-8 font-serif text-left">Projects</h2>

    <div class="flex flex-col gap-8">
        <!-- <div>
            <div class="grid grid-cols-1 gap-8">
                {#each featuredProjects as project}
                    <div class="card variant-glass-primary rounded-xl overflow-hidden block z-10">
                        <header class="card-header p-px"><figure class="relative">
                            <div class="absolute top-0 -translate-x-1/2 left-1/2 bg-primary-500 px-4 pt-1 rounded-b">Honcho</div>
                            <img src={project.image} alt={project.title} class="z-0 scale-105 block w-full h-80 object-cover object-center">
                        </figure></header>
                        <section class="p-4">
                            <h3 class="font-semibold text-lg">{project.title}</h3>
                            <p class=" mt-2">{project.description}</p>
                        </section>
                        <footer class="card-footer">
                            <a href={project.link} class="block text-blue-500 mt-2">View Project</a>
                        </footer>
                    </div>
                {/each}
            </div>
        </div> -->

        <div>
            <p class="mb-4 text-xl">Websites worked on whilst at <a href="https://honcho.agency" target="_blank" rel="">Honcho</a></p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each honchoProjects as honchoProject}
                    <div class="card variant-glass-primary rounded-xl overflow-hidden block">
                        <header class="card-header p-px"><figure class="relative">
                            <div class="absolute top-0 -translate-x-1/2 left-1/2 bg-primary-500 px-4 pt-1 rounded-b">Honcho</div>
                            <img src={honchoProject.image} alt={honchoProject.title} class="scale-105 w-full h-48 object-cover object-top">
                        </figure></header>
                        <section class="p-4">
                            <h3 class="font-semibold text-lg">{honchoProject.title}</h3>
                            <p class=" mt-2">{honchoProject.description}</p>
                        </section>
                        <footer class="card-footer">
                            <a href={honchoProject.link} class="btn btn-sm variant-filled-primary text-blue-500 mt-2">View Project</a>
                        </footer>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>