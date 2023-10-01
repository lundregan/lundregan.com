<script>
    import { Accordion, AccordionItem, Stepper, Step } from '@skeletonlabs/skeleton';

    const faqs = [
		{
			icon: '',
			summary: 'Are you currently available for new projects?',
			content:
				"I am currently working with Honcho to delivering high-quality work am not taking on any freelance projects at this time. However, I am always open to discussing future collaborations or exciting new opportunities, so please don't hesitate to reach out to me if you feel there might be a suitable fit."
		},
		{
			icon: '',
			summary: 'What are your favorite type of project to work on?',
			content:
				'Oh, that’s a tough one! I really enjoy projects that challenge me and allow me to learn something new. I thrive on projects that push my boundaries and facilitate continuous learning and growth. Lately, SvelteKit has captured my interest and enthusiasm because it offers a seamless developer experience, enabling efficient and innovative solutions. Its fine balance between structure and flexibility allows for the creation of highly dynamic and interactive user experiences, making it a delight to explore and implement in projects.'
		},
		{
			icon: '',
			summary: 'How do you keep up with the latest web development trends?',
			content:
				'Staying updated is crucial! I’m always on the lookout for the next big thing in web dev. I like to read blogs, participate in online communities, and tinker with new technologies on side projects whenever I can. It keeps the brain juices flowing!'
		},
		{
			icon: '',
			summary: 'Do you have any hobbies outside of coding?',
			content: `Absolutely! When I’m not immersed in lines of code or exploring new tech, I love to unwind with a good book, mostly non-fiction. I find that reading broadens my perspective and introduces me to new ideas and ways of thinking, which often end up informing my work in unexpected ways.

I’m also a bit of a movie buff. I enjoy the escapism of a well-crafted film and appreciate the myriad of ways in which stories can be brought to life on the screen. It’s fascinating to see the convergence of technology and artistry that goes into making movies, and it’s a source of inspiration for creating engaging and immersive experiences in web development.

And yes, I do game! Gaming offers a dynamic blend of problem-solving, strategy, and narrative, mirroring many aspects of programming and development. It's a fun way to challenge myself and stimulate my mind while having a good time.

I believe in a balanced lifestyle, and these hobbies allow me to relax and recharge, fostering creativity and innovation in my professional endeavors.`
		}
	];
</script>

<main class="p-16 flex flex-col gap-40">
    <div class=" flex flex-col gap-4 text-xl">
        <h1 class="h1 mb-8">About</h1>
        <p>
            Hi there! I'm Ethan a web developer from the UK. I have always been passionate about
            technology and have dedicated my career to building beautiful and functional websites.
        </p>
        <p>
            I have worked with a variety of clients, creating websites for businesses, non-profits, and
            individuals. In my free time, you can find me tinkering with new technologies, learning
            about design principles, whilst staying up-to-date on industry trends.
        </p>
        <p>
            Thank you for visiting my website and learning more about me. <a
                href="#contact"
                class="dark:text-blue-300 hover:underline font-medium">Get in touch</a
            > if you have any questions or want to collaborate on a project.
        </p>
    </div>

    

    <section class="card p-8">
        <h2 class="h2">Professional Journey</h2>

        <Stepper stepTerm='' class="mt-16">
            <Step>
                <svelte:fragment slot="header">Professional Journey</svelte:fragment>
                <svelte:fragment slot="navigation"><div /></svelte:fragment>
                (content)
            </Step>
            <Step>
                <svelte:fragment slot="header">(header)</svelte:fragment>
                (content)
            </Step>
        </Stepper>
    </section>

    <section class="w-full flex flex-col gap-4">
        <h2 class="h2">FAQs</h2>

        <Accordion>
            {#each faqs as faq}
                <AccordionItem>
                    <svelte:fragment slot="lead">{faq.icon}</svelte:fragment>
                    <svelte:fragment slot="summary"
                        ><span class="h3 font-medium">{faq.summary}</span></svelte:fragment
                    >
                    <svelte:fragment slot="content"
                        ><span class="dark:text-gray-300 text-xl">{faq.content}</span></svelte:fragment
                    >
                </AccordionItem>
            {/each}
        </Accordion>
    </section>
</main>