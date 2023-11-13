<script>
    import TimelineItem from './TimelineItem.svelte'

    const timelineItemsList = [
        {
            heading: 'Honcho',
            subheading: 'Web Developer',
            text: 'Developing custom and impactful web solutions, uniquely tailored to meet the distinct needs for a plethora of clientele',
            link: 'https://honcho.agency/',
            year: '2022'
        },
        {
            heading: 'Smart Container Co',
            subheading: 'Software Engineer',
            text: 'Developing real-time IoT End-User Platform, includeding a simulation of real-time keg data and the accompanying analytical dashboards for early investors.',
            link: 'https://www.smartcontainer.co.uk/',
            year: '2021'
        },
        {
            heading: 'Digital Virtue',
            subheading: 'Junior Web Developer',
            text: 'As an ambitious student learning web development, I had the opportunity to collaborate with a dynamic team of three developers, delivering high-quality websites for clients across Cardiff',
            link: 'https://www.digitalvirtue.com',
            year: '2016'
        }
    ]
</script>

<!-- component -->
<div class="container mx-auto w-full h-full my-16">
    <div class="relative wrap overflow-hidden h-full">
        <div class="border-transparent border-2-2 absolute border-opacity-20 md:border-surface-600 h-full border" style="left: 50%"></div>
        
        {#each timelineItemsList as timelineItem, index}
            <TimelineItem data={timelineItem} index={index} />
        {/each}
    </div>
</div>