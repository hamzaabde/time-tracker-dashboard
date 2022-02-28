module.exports = {
	content: ['index.html'],
	theme: {
		fontFamily: {
			sans: ['Rubik', 'Segoe UI', 'sans-serif'],
		},
		extend: {
			screens: {
				desktop: '1440px',
				mobile: '375px',
			},
			colors: {
				'primary-blue': 'hsl(246, 80%, 60%)',
				'light-orange': 'hsl(15, 100%, 70%)',
				'soft-blue': 'hsl(195, 74%, 62%)',
				'light-red': 'hsl(348, 100%, 68%)',
				'lime-green': 'hsl(145, 58%, 55%)',
				'dark-purple': 'hsl(264, 64%, 52%)',
				'soft-orange': 'hsl(43, 84%, 65%)',
				'very-dark-blue': 'hsl(226, 43%, 10%)',
				'dark-blue': 'hsl(235, 46%, 20%)',
				'soft-dark-blue': 'hsl(235, 50%, 35%)',
				'desaturated-blue': 'hsl(235, 45%, 61%)',
				'pale-blue': 'hsl(236, 100%, 87%)',
			},
		},
	},
	plugins: [],
}
