class Nootstrap {
	constructor() {
		this.updateParallax()

		window.addEventListener('resize', this.onWindowResize.bind(this), false)
		window.addEventListener('scroll', this.onWindowScroll.bind(this), false)
		document.querySelectorAll('*[toggleClass-target]').forEach(button => button.addEventListener('click', event => this.onToggleClassClicked(button, event), false));
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

	onToggleClassClicked(element: Element, event: Event): void {
		event.preventDefault()
		const targetSelector = element.getAttribute('toggleClass-target')
		const targetValue = element.getAttribute('toggleClass-value')
		if (targetSelector === null || targetSelector === '')
			console.error('toggleClass-target attribute is empty')
		if (targetValue === null || targetValue === '')
			console.error('toggleClass-value attribute is empty or missing')
		else
			document.querySelectorAll(targetSelector as string).forEach(target => target.classList.toggle(targetValue))
	}
}

window.addEventListener('load', () => {
	const nootstrap = new Nootstrap()
}, false)
