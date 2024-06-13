<script>
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
    import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
    import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'

	const email = {
		name: 'Ethan Lundregan',
		address: 'contact@lundregan.com',
        subject: 'Hello Ethan - Contacted from  From Lundregan.com'
	};

	const mailTo = `mailto:${email.address}?subject=${email.subject}`;

	const socailLinks = [
		{
			name: 'GitHub',
			href: 'https://github.com/lundregan',
			icon: FaGithub
		},
        {
            name: 'Twitter',
            href: 'https://twitter.com/LundreganDev',
            icon: FaTwitter
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/elundregan/',
            icon: FaLinkedinIn
        },
        {
            name: 'Email',
            href: mailTo,
            icon: FaEnvelope
        }
	];
</script>

<!-- Added delay because previous component (about) has delay on last item -->
<footer class="flex flex-col gap-4 items-center py-8" data-aos="fade-up" data-aos-delay="300">
	<div class="flex items-center">
		{#each socailLinks as socialLink}
			<a class="p-2 rounded-full group" href={socialLink.href} target="_blank" rel="noreferrer" aria-label={`${socialLink.name} Profile`}>
				<div class="p-3 btn btn-sm group-hover:-translate-y-2 duration-300 btn-icon  variant-outline-primary dark:text-white text-primary-500">
                    <svelte:component this={socialLink.icon} />
                </div>
			</a>
		{/each}
	</div>
	<span class="text-gray-400 text-xl">Ethan Lundregan © 2023</span>
</footer>
