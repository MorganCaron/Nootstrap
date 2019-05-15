import '../sass/nootstrap'

class Nootstrap {
	constructor() {
		this.updateParallax()

		window.addEventListener('resize', this.onWindowResize.bind(this), false)
		window.addEventListener('scroll', this.onWindowScroll.bind(this), false)
	}

	updateParallax(): void {
		document.querySelectorAll('.parallax').forEach(parallax => {
			const parallaxTop = parallax.getBoundingClientRect().top
			const parallaxLeft = parallax.getBoundingClientRect().left
			const background = parallax.querySelector('.parallax-background')
			background.setAttribute('style', 'left: ' + -parallaxLeft + 'px; top: ' + -parallaxTop / 2 + 'px;')
		})
	}

	onWindowResize(): void {
		this.updateParallax()
	}

	onWindowScroll(): void {
		this.updateParallax()
	}
}

window.addEventListener('load', () => {
	const nootstrap = new Nootstrap()
}, false)
