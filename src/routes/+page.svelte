<script>
    import Hero from '$lib/Hero.svelte';
    import WorkedWith from '$lib/WorkedWith.svelte';
    import FeaturedProjects from '$lib/FeaturedProjects.svelte';
    import FeaturedWork from '$lib/FeaturedWork.svelte';
    import SkillsSection from '$lib/SkillsSection.svelte';
</script>

<div class="flex flex-col items-center gap-16 pb-30">
    <Hero />
    
    <div class="flex flex-col gap-16 pb-30 max-w-7xl mx-8">
        
        <FeaturedProjects />
        
        <SkillsSection />
        
        <FeaturedWork />
        
        <WorkedWith />
    </div>
</div>
