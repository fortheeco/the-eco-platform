export const imageFromWord = (
	word,
	size = 100,
	backgroundColor = '#3498db',
	textColor = '#ffffff'
) => {
	const firstLetter = word ? word.charAt(0).toUpperCase() : ''

	const svg = `
	  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
		<rect width="${size}" height="${size}" fill="${backgroundColor}" />
		<text x="50%" y="50%" font-size="${
			size / 2
		}" font-weight="bold" font-family="sans-serif" fill="${textColor}" 
			  text-anchor="middle" dominant-baseline="middle">${firstLetter}</text>
	  </svg>
	`

	// Return a data URL for the SVG so it can be used in an <img> tag
	return `data:image/svg+xml;base64,${btoa(svg)}`
}
