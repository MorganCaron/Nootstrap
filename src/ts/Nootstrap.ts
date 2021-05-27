class Nootstrap {
	constructor() {
		this.updateParallax()

		window.addEventListener('resize', this.onWindowResize.bind(this), false)
		window.addEventListener('scroll', this.onWindowScroll.bind(this), false)
		document.querySelectorAll('button.burger').forEach(burgerButton => burgerButton.addEventListener('click', event => {
			event.preventDefault()
			const navbar = burgerButton.closest('.navbar')
			if (navbar == null)
				console.error('The burger button is not located in a navbar')
			else
				navbar.classList.toggle('opened')
		}, false));
	}

	updateParallax(): void {
		document.querySelectorAll('.parallax').forEach(parallax => {
			const parallaxTop = parallax.getBoundingClientRect().top
			const parallaxLeft = parallax.getBoundingClientRect().left
			const background = parallax.querySelector('.parallax-background')
			background?.setAttribute('style', 'left: ' + -parallaxLeft + 'px; top: ' + -parallaxTop / 2 + 'px;')
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
