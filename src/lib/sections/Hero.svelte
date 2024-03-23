<script>
    import { Avatar } from '@skeletonlabs/skeleton';

    const smoothScroll = (event) => {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')

		// console.log(anchorId)
		const anchor = document.getElementById(anchorId)
		// console.log(anchor)

		console.log(anchor.offsetTop)
		console.log(window.scrollY)
		try{
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		})}catch(e){
			console.log(e)
		}
	}
</script>

<section class="flex flex-row-reverse gap-16 w-full px-4 justify-between items-center min-h-[100svh]">
    <div class="w-0 lg:w-80 lg:h-80 hidden lg:block">
        <Avatar
            src="https://i.ibb.co/RQMCdT4/public-profile-square-styled-blue.png"
            width="w-full h-full"
            rounded="rounded-full"
        />
    </div>

    <div class="lg:max-w-2xl text-center md:text-left">
        <h1 class="text-primary font-bold h1 font-serif">Hey, I'm Ethan <span class="motion-safe:animate-wiggle inline-block origin-bottom-right">👋</span></h1>
        <p class="text-3xl dark:text-gray-300 font-medium text-gray-700 mt-8 font-league">
            A dynamic and passionate Developer with 3 years of experience in crafting seamless, responsive, and user-friendly web applications. Always eager to <a class="anchor" href="#anchor-about" on:click={smoothScroll}>learn more</a> and take on interesting new challenges. </p>
    </div>
</section>