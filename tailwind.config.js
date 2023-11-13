import { join } from 'path'

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		fontFamily: {
			'sans': ['League Spartan', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
			'serif': ['Roboto', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
			'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace',],
		},
		extend: {
			keyframes: {
				wiggle: {
					'0%, 20%, 100%': { transform: 'rotate(0deg)' },  // Start and end of the wiggle
					'10%': { transform: 'rotate(4deg)' },
					'20%': { transform: 'rotate(-4deg)' },
					'30%': { transform: 'rotate(4deg)' },  // Mid-point of the wiggle
					'40%, 100%': { transform: 'rotate(0deg)' }  // Pausing at the end
				}
			},
			animation: {
				wiggle: 'wiggle 3s ease-in-out 4',
			}
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'wintry',
						enhancements: true,
					},
				],
			},
		}),
	],
};
