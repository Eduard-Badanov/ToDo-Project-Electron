import { userParameters } from '../userInfo.js'

export function checkSorting() {
	if (userParameters.sorting) {
		document.querySelector('.sort-button__icon').classList.add('rotated')
		return true
	} else {
		document.querySelector('.sort-button__icon').classList.remove('rotated')
		return false
	}
}

document.querySelector('.tasks__sort-button').addEventListener('click', () => {
	if (!checkSorting()) {
		userParameters.sorting = true
	} else {
		userParameters.sorting = false
	}
})

window.addEventListener('load', checkSorting)