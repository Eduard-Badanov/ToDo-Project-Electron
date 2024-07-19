import { scenarioIcons } from '../pathsToIcons.js'

export function createScenarioItem(text, DOMname, icon = scenarioIcons.info, isCreated = false) {
	const itemButton = document.createElement('button')
	if (!isCreated) {
		itemButton.classList.add('items-list__item-button', `${DOMname}`)
		itemButton.innerHTML = `
		<img class="item-button__image" src="${icon}">
		<div class="item-button__body"><span class="item-button__text">${text}</span></div>`
		document.querySelector('.scenarios__items-list').appendChild(itemButton)
	} else {
		itemButton.classList.add('items-list__item-button-created', `${DOMname}`)
		itemButton.innerHTML = `
		<div class="item-button-created__prepend">
			<img class="item-button-created__image" src="${icon}">
			<div class="item-button__body"><span class="item-button-created__text">${text}</span></div>
		</div>
		<img class="item-button-created__image-delete" src="${scenarioIcons.delete}">`
		document.querySelector('.scenarios__items-list').appendChild(itemButton)
	}
}