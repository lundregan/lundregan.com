<script>
	import '../app.postcss';
	import { get } from 'svelte/store';
	import { AppShell, AppBar, LightSwitch, Avatar, localStorageStore } from '@skeletonlabs/skeleton';

	import Footer from '$lib/Footer.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	// Fonts
	import "@fontsource/roboto";
	import "@fontsource/league-spartan";
	
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>Lundregan.com</title>
	<meta name="description" content="Web developer from cardiff">
	<meta name="keywords" content="Cardiff, Web Developer, Developer, UK, Programmer">
	<meta name="author" content="Ethan Lundregan">
</svelte:head>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-primary">
			<svelte:fragment slot="lead">
				<Avatar
					src="https://i.ibb.co/RQMCdT4/public-profile-square-styled-blue.png"
					width="w-14"
					rounded="rounded-full"
				/>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
