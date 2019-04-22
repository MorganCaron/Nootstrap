class Nootstrap {
	constructor() {
		this.updateParallax()

		document.querySelector('.toggleDebug').addEventListener('click', event => {
			this.toggleDebug()
		}, false)

		window.addEventListener('resize', this.onWindowResize.bind(this), false)
		window.addEventListener('scroll', this.onWindowScroll.bind(this), false)
		this.update()
	}

	toggleDebug(): void {
		document.body.classList.toggle('debug')
	}

	updateParallax(): void {
		document.querySelectorAll('.parallax').forEach(parallax => {
			const parallaxTop = parallax.getBoundingClientRect().top
			const parallaxLeft = parallax.getBoundingClientRect().left
			const background = parallax.querySelector('.parallax-background')
			background.setAttribute('style', 'left: ' + -parallaxLeft / 2 + 'px; top: ' + -parallaxTop / 2 + 'px;')
		})
	}

	onWindowResize(): void {
		this.updateParallax()
	}

	onWindowScroll(): void {
		this.updateParallax()
	}

	update(): void {
		requestAnimationFrame(this.update.bind(this))
	}
}

window.addEventListener('load', () => {
	const nootstrap = new Nootstrap()
}, false)
