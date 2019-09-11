export default {
	// this enables the color modes feature
	// and is used as the name for the top-level colors object
	initialColorMode: 'light',
	// optionally enable custom properties
	// to help avoid a flash of colors on page load
	useCustomProperties: true,
	colors: {
		// these are the default light colors
		text: '#000',
		lightText: '#808080',
		background: '#fff',
		primary: '#0057B8',
		medium: '#0975eb',
		light: '#1a76db',
		accent: '#FFCD00',

		modes: {
			// thsi is the dark color mode colors
			dark: {
				text: '#fff',
				background: '#000',
				primary: '#FFCD00',
				light: '#1a76db',
				medium: '#0975eb',
			},
		},
	},
	fonts: {
		body: 'Open Sans',
		heading: 'Nanum Pen Script',
	},
	fontWeights: {
		body: 300,
		heading: 400,
		bold: 700,
	},
	lineHeights: {
		body: '110%',
		heading: 1.125,
	},
	letterSpacing: {
		body: '2px',
		text: '5px',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};
