<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';

  export let data, index;

  onMount(() => {
    AOS.refresh();
  });
</script>

<div data-aos="{index % 2 === 1 ? 'fade-right' : 'fade-left'}" class="my-8 flex justify-between {index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center w-full right-timeline">
  <div class="order-1 w-5/12 hidden md:block"></div>
  <div class="z-20 flex items-center order-1 bg-blue-800 pt-0.5 shadow-xl px-3 rounded-full mr-4 md:mr-0">
    <span class="mx-auto font-medium font-serif text-lg text-white">{data.year}</span>
  </div>
  <a href={data.link} target="_blank" class="hover:variant-ghost-tertiary active:scale-95 group order-1 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 card variant-glass-primary dark:variant-soft-primary">
      <h3 class="text-primary-500 h2 group-hover:text-secondary-500 transition-colors duration-500">{data.heading}</h3>
      <p class="h4 font-medium mt-1">{data.subheading}</p>
      <p class="mt-6 text-lg leading-snug tracking-wide text-opacity-100">{data.text}</p>
  </a>
</div>