import * as Prism from 'prismjs'
import 'prism-themes/themes/prism-atom-dark'

Prism.highlightAll()

document.querySelector('.toggleDebug')?.addEventListener('click', event => {
	event.preventDefault()
	document.body.classList.toggle('debug')
}, false)
