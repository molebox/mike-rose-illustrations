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
		background: '#fff',
		primary: '#0057B8',
		accent: '#FFCD00',
		modes: {
			// thsi is the dark color mode colors
			dark: {
				text: '#fff',
				background: '#000',
				primary: '#FFCD00',
			},
		},
	},
	fonts: {
		body: 'Open Sans',
		heading: 'Rock Salt',
	},
};
