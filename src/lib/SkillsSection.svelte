<script>
	import Icon from '@iconify/svelte';
    import Heading from './Heading.svelte';

	const skills = [
		{
			icon: 'devicon:svelte',
			name: 'Svelte',
			type: 'frontend'
		},
		{
			icon: 'devicon:tauri',
			name: 'Tauri',
			type: 'frontend'
		},
		{
			icon: 'devicon:godot',
			name: 'Godot',
			type: 'misc'
		},
		{
			icon: 'devicon:python',
			name: 'Python',
			type: 'backend'
		},
		{
			icon: 'devicon:nodejs',
			name: 'Node.js',
			type: 'backend'
		},
		{
			icon: 'devicon:docker',
			name: 'Docker',
			type: 'misc'
		},
		{
			icon: 'devicon:git',
			name: 'Git',
			type: 'misc'
		},
		{
			icon: 'devicon:linux',
			name: 'Linux',
			type: 'misc'
		},
		{
			icon: 'devicon:vscode',
			name: 'VS Code',
			type: 'misc'
		},
		{
			icon: 'devicon:figma',
			name: 'Figma',
			type: 'misc'
		},
		{
			icon: 'devicon:tailwindcss',
			name: 'Tailwind',
			type: 'frontend'
		},
		{
			icon: 'devicon:javascript',
			name: 'JavaScript',
			type: 'frontend'
		}
	];

	let test = 'all';

	function filterOnChange(event) {
		test = event.currentTarget.name;
	}
</script>

<div>
    <Heading text="skills" />

	<div class="">
		<form class="filter">
			<input class="btn btn-square" type="reset" value="×" name="all" on:click={(test = 'all')} />
			<input
				class="btn"
				type="radio"
				name="frontend"
				aria-label="Frontend"
				on:change={filterOnChange}
			/>
			<input
				class="btn"
				type="radio"
				name="backend"
				aria-label="Backend"
				on:change={filterOnChange}
			/>
			<input class="btn" type="radio" name="misc" aria-label="Misc" on:change={filterOnChange} />
		</form>

		<!-- <p>{test}</p> -->

		<div class="my-8 flex flex-wrap gap-4 rounded-xl">
			{#each skills as skill}
				{#if test === 'all' || test === skill.type}
					<div class="flex items-center gap-4 rounded-md bg-zinc-900 px-4 py-3">
						<Icon class="text-2xl" icon={skill.icon} />
						<span class="text-xl font-medium">{skill.name}</span>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
