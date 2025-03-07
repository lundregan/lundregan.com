<script>
	import Icon from '@iconify/svelte';
	import Heading from './Heading.svelte';
	import { fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

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

	let activeFilter = 'all';
	// Calculate the minimum height needed based on all skills
	let gridMinHeight;
	
	// Calculate rows needed for different breakpoints
	$: rowsNeeded = {
		sm: Math.ceil(skills.length / 2), // 2 cols by default
		md: Math.ceil(skills.length / 3), // 3 cols on sm
		lg: Math.ceil(skills.length / 4), // 4 cols on md
		xl: Math.ceil(skills.length / 6)  // 6 cols on lg
	};
	
	// Set minimum heights for different breakpoints (card height ~100px + gap)
	$: gridMinHeight = `min-h-[${rowsNeeded.sm * 104}px] sm:min-h-[${rowsNeeded.md * 104}px] md:min-h-[${rowsNeeded.lg * 104}px] lg:min-h-[${rowsNeeded.xl * 104}px]`;

	function filterSkills(filter) {
		activeFilter = filter;
	}
	
	$: filteredSkills = activeFilter === 'all' 
		? skills 
		: skills.filter(skill => skill.type === activeFilter);
</script>

<div class="py-16 relative">
	<!-- Futuristic background elements -->
	<div class="absolute -z-10 top-1/2 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px]"></div>
	<div class="absolute -z-10 right-0 bottom-0 w-[1px] h-64 bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
	
	
	<div class="bg-black/30 backdrop-blur-sm border border-red-900/20 p-8 relative">
		<!-- System status indicator -->
		<div class="absolute top-4 right-4 flex items-center gap-2">
			<span class="text-xs text-red-500/70 font-mono">SKILL DATABASE</span>
			<div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
		</div>
		
		<!-- Filter controls with terminal-like appearance -->
		<div class="mb-8 flex flex-wrap gap-3 items-center font-mono">
			<Icon class="text-red-500 rotate-90" icon="bxs:chevron-up"/>
			<button 
				class="btn btn-sm {activeFilter === 'all' ? 'bg-red-900/30 text-white border border-red-500/50' : 'bg-black/50 text-gray-400 border border-red-900/20'} hover:bg-red-900/20 hover:border-red-500/30"
				on:click={() => filterSkills('all')}
			>
				ALL_SKILLS
			</button>
			<button 
				class="btn btn-sm {activeFilter === 'frontend' ? 'bg-red-900/30 text-white border border-red-500/50' : 'bg-black/50 text-gray-400 border border-red-900/20'} hover:bg-red-900/20 hover:border-red-500/30"
				on:click={() => filterSkills('frontend')}
			>
				FRONTEND
			</button>
			<button 
				class="btn btn-sm {activeFilter === 'backend' ? 'bg-red-900/30 text-white border border-red-500/50' : 'bg-black/50 text-gray-400 border border-red-900/20'} hover:bg-red-900/20 hover:border-red-500/30"
				on:click={() => filterSkills('backend')}
			>
				BACKEND
			</button>
			<button 
				class="btn btn-sm {activeFilter === 'misc' ? 'bg-red-900/30 text-white border border-red-500/50' : 'bg-black/50 text-gray-400 border border-red-900/20'} hover:bg-red-900/20 hover:border-red-500/30"
				on:click={() => filterSkills('misc')}
			>
				TOOLS_AND_MISC
			</button>
		</div>

		<!-- Added a fixed height container to prevent layout shifts -->
		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[300px] relative">
			{#each filteredSkills as skill (skill.name)}
				<div 
					in:scale={{duration: 200, delay: 50, easing: quintOut}}
					out:scale={{duration: 150, easing: quintOut}}
					class="flex flex-col items-center p-4 bg-black/50 backdrop-blur-sm rounded-none border border-red-900/20 hover:border-red-500/50 transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,0,0,0.2)] relative group h-[100px]"
				>
					<!-- Decorative corner elements -->
					<div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
					
					<Icon icon={skill.icon} class="text-4xl mb-3 group-hover:text-red-500 transition-colors" />
					<span class="text-sm text-center font-mono tracking-wide">{skill.name}</span>
				</div>
			{/each}
		</div>
		
		<!-- Terminal-like footer -->
		<div class="mt-8 pt-4 border-t border-red-900/30 font-mono text-xs text-gray-500 flex flex-wrap gap-x-1">
			<span class="text-red-500">></span>
			<span class="text-gray-400">SKILL_ANALYSIS_COMPLETE</span>
		</div>
	</div>
</div>
