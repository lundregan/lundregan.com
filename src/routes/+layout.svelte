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

	const storeTheme = localStorageStore('storeTheme', 'crimson');

	const changeTheme = (e) => {
		if (!get(storeTheme)) {
			storeTheme.set({ theme: 'crimson' });
		}

		storeTheme.set({ theme: e.target.value });

		document.body.setAttribute('data-theme', e.target.value);
	};

	$: theme = get(storeTheme).theme;
</script>

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
				<div class="flex gap-4 items-center">
					<select class="select select-xs" value="{theme}" on:change={changeTheme}>
						<option value="wintry">Wintry</option>
						<option value="crimson">Crimson</option>
					</select>
					<div>
						<LightSwitch />
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
