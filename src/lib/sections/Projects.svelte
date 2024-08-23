<script>
    // import imgOutwardbound from '$lib/img/brave_CDgGCoCuOd.jpg?enhanced&blur=5'
    // import imgHoncho from '$lib/img/7pNVapwdsB.png?enhanced'
    // import imgCpi from '$lib/img/brave_wFXVQgdXlJ.jpg?enhanced'
    // import imgEnvair from '$lib/img/brave_xoRV8bdcPu.jpg?enhanced'
    // import imgSmg from '$lib/img/brave_u8khNcDWNy.png?enhanced'
    // import imgEckoh from '$lib/img/brave_TIeRT22jcu.jpg?enhanced'

    import FaExternalLinkSquareAlt from 'svelte-icons/fa/FaExternalLinkSquareAlt.svelte'

    // import imgRavencards from '$lib/img/brave_1BDbjzbySx.jpg'
    // const featuredProjects = [
    //     {
    //         title: 'Ravencards',
    //         description: `Landing page design for SRS app, demonstrating visual hierarchy, persuasive copy, and UI principles.`,
    //         image: imgRavencards,
    //         link: 'https://www.google.com'
    //     }
    // ]

    const honchoProjects = [
        {
            title: 'Outwardbound Trust',
            description: `We Enhanced the user experience for Outward Bound's website, including visual updates and streamlining the donation process. I also contributed to updates and fixes to the backend donation system.`,
            image: null,
            link: 'https://www.outwardbound.org.uk/'
        },
        {
            title: 'Envair Technology',
            description: `Visual refresh for Envair Technology's website, aligning with their cutting-edge brand and enhancing user experience.`,
            image: null,
            link: 'https://envairtechnology.com/'
        },
        {
            title: 'Honcho',
            description: `Website refresh for Honcho's lead-generating website, a key tool for attracting new clients. Ensuring seamless functionality and a design that highlights the agency's strengths.`,
            image: null,
            link: 'https://honcho.agency'
        },
        {
            title: 'Santa Marta Group',
            description: `We collaborated with the Santa Marta Group to modernize their website, ensuring alignment with their mission and increased online efficacy.`,
            image: null,
            link: 'https://santamartagroup.org/'
        },
        {
            title: 'Eckoh',
            description: `Streamlining User Onboarding & Visual Refresh for Eckoh.com.  As part of a collaborative team, I focused on enhancing the initial user experience and modernizing the website's overall aesthetic.`,
            image: null,
            link: 'https://www.eckoh.com/'
        },
        {
            title: 'CPI',
            description: `Ongoing visual enhancements for the Centre for Process Innovation (CPI) website, ensuring a dynamic and engaging user experience.`,
            image: null,
            link: 'https://www.uk-cpi.com/'
        }
    ]

    const personalProjects = [
        {
            title: 'Framework Clothing',
            description: `E-commerce website for Framework Clothing, a clothing brand focused on developers. Built with Shopify theme, alpinejs, and tailwindcss.`,
            image: null,
            link: 'https://frameworkclothing.co.uk'
        },
        {
            title: 'Ravencards',
            description: `Flashcard app utilizing the Spaced Repetition System (SRS, or leitner system specifically) for optimal learning retention. Built with Svelte and Tauri.`,
            image: null,
            link: 'https://github.com/lundregan/ravencards-app'
        }
    ]
</script>

<section class="w-full">
    <h2 class="mb-8 font-serif font-medium text-left h2" data-aos="fade-up">Projects</h2>

    <div class="flex flex-col gap-10">
        <!-- <div>
            <div class="grid grid-cols-1 gap-8">
                {#each featuredProjects as project}
                    <div class="z-10 block overflow-hidden card variant-glass-primary rounded-xl">
                        <header class="p-px card-header"><figure class="relative">
                            <div class="absolute top-0 px-4 pt-1 -translate-x-1/2 rounded-b left-1/2 bg-primary-500">Honcho</div>
                            <img src={project.image} alt={project.title} class="z-0 block object-cover object-center w-full scale-105 h-80">
                        </figure></header>
                        <section class="p-4">
                            <h3 class="text-lg font-semibold">{project.title}</h3>
                            <p class="mt-2 ">{project.description}</p>
                        </section>
                        <footer class="card-footer">
                            <a href={project.link} class="block mt-2 text-blue-500">View Project</a>
                        </footer>
                    </div>
                {/each}
            </div>
        </div> -->

        <div data-aos="fade-up">
            <p class="mb-4 text-2xl dark:text-surface-200">Some of my personal projects</p>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3" data-aos="fade-in">
                {#each personalProjects as personalProject}
                    <a href={personalProject.link} class="overflow-hidden outline-none card variant-glass-secondary rounded-xl focus:outline-secondary-500" target="_blank">
                        <section class="p-5">
                            <div class="flex items-center justify-between w-full">
                                <h3 class="text-2xl !font-medium">{personalProject.title}</h3>
                                <div class="w-4"><FaExternalLinkSquareAlt /></div>
                            </div>
                            
                            <p class="mt-2 text-lg">{personalProject.description}</p>
                        </section>
                    </a>
                {/each}
            </div>
        </div>

        <div data-aos="fade-up">
            <p class="mb-4 text-2xl dark:text-surface-200">Websites I've worked on whilst at <a class="anchor" href="https://honcho.agency" target="_blank">Honcho</a></p>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {#each honchoProjects as honchoProject, index}
                    <a
                        href={honchoProject.link}
                        class="overflow-hidden outline-none card variant-glass-primary rounded-xl focus:outline-primary-500"
                        target="_blank"
                        data-aos="fade-in"
                        data-aos-delay={index * 100}
                        data-aos-offset="0"
                    >
                        
                        <!-- <header class="p-px card-header">
                            <figure class="relative">
                                <div class="absolute top-0 px-4 pt-1 -translate-x-1/2 rounded-b left-1/2 bg-primary-500">Honcho</div>
                                
                                <enhanced:img
                                    src="{honchoProject.image}"
                                    alt={honchoProject.title}
                                    class="object-cover object-top w-full h-auto scale-105"
                                />
                            </figure>
                        </header> -->
                        <section class="p-5">
                            <div class="flex items-center justify-between w-full">
                                <h3 class="text-2xl !font-medium">{honchoProject.title}</h3>
                                <div class="w-4"><FaExternalLinkSquareAlt /></div>
                            </div>
                            
                            <p class="mt-2 text-lg">{honchoProject.description}</p>
                        </section>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>