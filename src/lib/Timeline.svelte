<script>
    import TimelineItem from './TimelineItem.svelte'

    const timelineItemsList = [
        {
            heading: 'Bensons for Beds',
            subheading: 'Front-end Developer',
            text: 'Developing and maintaining the Evesleep website, ensuring a seamless user experience and a high level of performance across all devices, and developing of new features.',
            link: 'https://bensonsforbeds.co.uk',
            year: '2024'
        },    
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

    const aosBaseOffset = 100
</script>

<!-- component -->
<div class="container w-full h-full mx-auto my-16">
    <div class="relative h-full overflow-hidden wrap">
        <div data-aos="fade-in" data-aos-offset="{aosBaseOffset}" class="absolute h-full border border-transparent border-2-2 border-opacity-20 md:border-surface-600" style="left: 50%"></div>
        
        {#each timelineItemsList as timelineItem, index}
            <TimelineItem data={timelineItem} index={index} aosBaseOffset={aosBaseOffset} />
        {/each}
    </div>
</div>