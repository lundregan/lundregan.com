<script>
  export let data, index;
</script>

<div class="my-8 flex justify-between {index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center w-full right-timeline">
  <div class="order-1 w-5/12"></div>
  <div class="z-20 flex items-center order-1 bg-blue-800 pt-0.5 shadow-xl px-3 rounded-full">
    <span class="mx-auto font-medium font-serif text-lg text-white">{data.year}</span>
  </div>
  <a href={data.link} class="hover:variant-ghost-tertiary active:scale-95 group order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 card variant-soft-primary">
      <h3 class="text-primary-500 h3 group-hover:text-secondary-500 transition-colors duration-500">{data.heading}</h3>
      <p>{data.subheading}</p>
      <p class="mt-3 text-md leading-snug tracking-wide text-opacity-100">{data.text}</p>
  </a>
</div>