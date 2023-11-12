<script>
  export let data, index;
</script>

<div class="mb-8 flex justify-between {index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full right-timeline">
  <div class="order-1 w-5/12"></div>
  <div class="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
    <h1 class="mx-auto font-semibold text-lg text-white">{index}</h1>
  </div>
  <a href={data.link} class="hover:variant-ghost-tertiary active:scale-95 group order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 card variant-soft-primary">
    <h3 class="h3 text-primary-500 group-hover:text-secondary-500 transition-colors duration-500">{data.heading}</h3>
    <p>{data.subheading}</p>
    <p class="mt-3 text-sm leading-snug tracking-wide text-opacity-100">{data.text}</p>
  </a>
</div>