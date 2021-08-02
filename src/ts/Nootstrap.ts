class Nootstrap {
	constructor() {
		this.updateParallax()

		window.addEventListener('resize', this.onWindowResize.bind(this), false)
		window.addEventListener('scroll', this.onWindowScroll.bind(this), false)
		document.querySelectorAll('*[trigger-target]').forEach(button => button.addEventListener('click', event => this.onTriggerClick(button, event), false));
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

	onTriggerClick(element: Element, event: Event): void {
		if (element.hasAttribute('preventDefault'))
			event.preventDefault()
		if (!element.hasAttribute('trigger-target'))
			return;
		const targetSelector = element.getAttribute('trigger-target')
		const targets = document.querySelectorAll(targetSelector as string)
		const addClass = element.getAttribute('add-class')?.split(' ')
		const removeClass = element.getAttribute('remove-class')?.split(' ')
		const toggleClass = element.getAttribute('toggle-class')?.split(' ')
		targets.forEach(target => {
			if (addClass) addClass.forEach(classname => target.classList.add(classname))
			if (removeClass) removeClass.forEach(classname => target.classList.remove(classname))
			if (toggleClass) toggleClass.forEach(classname => target.classList.toggle(classname))
		})
	}
}

export default Nootstrap
