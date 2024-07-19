import { createScenarioItem } from '../addScenarioItems/createScenarioItem.js'
import { removeRenderedTasksOfActiveScenarioItem } from '../addTaskItems/removeRenderedTasksOfActiveScenarioItem.js'
import { renderDefaultTasksOfActiveScenarioItem } from '../addTaskItems/renderDefaultTasksOfActiveScenarioItem.js'
import { saveUserFromStorage } from '../localStorage/saveUserToStorage.js'
import { scenarioIcons } from '../pathsToIcons.js'
import { user } from '../userInfo.js'

document.querySelector('.scenarios__add-button').addEventListener('click', () => {
	if (document.querySelector('.scenarios__items-list').childNodes.length >= 10) {
		document.querySelector('.scenarios__add-warning').classList.remove('hidden')
		setTimeout(() => document.querySelector('.scenarios__add-warning').classList.add('hidden'), 5000)
	} else {
		document.querySelector('.scenarios__add-button').classList.add('hidden')
		document.querySelector('.scenarios__add-input').classList.remove('hidden')
		document.querySelector('.scenarios__add-input > input').focus()
	}
})
document.querySelector('.button-cancel').addEventListener('click', () => {
	document.querySelector('.scenarios__add-input > input').value = ''
	document.querySelector('.scenarios__add-input').classList.add('hidden')
	document.querySelector('.scenarios__add-button').classList.remove('hidden')
})
document.querySelector('.button-add').addEventListener('click', () => {
	if (document.querySelector('.scenarios__add-input > input').value.trim() !== '') {
		let numberOfElement = null
		document.querySelectorAll('.items-list__item-button-created').forEach((element) => {
			numberOfElement = Math.max(element.classList[1].match(/\d/g).join(', '))
		})
		const text = document.querySelector('.scenarios__add-input > input').value.trim()
		user.push({
			icon: scenarioIcons.info,
			text: text,
			DOMname: `item-created-${numberOfElement + 1}`,
			isCreated: true,
			tasks: []
		})
		createScenarioItem(text, `item-created-${numberOfElement + 1}`, scenarioIcons.info, true)
		saveUserFromStorage()
		removeRenderedTasksOfActiveScenarioItem('special')
		
		if (document.querySelector(`.item-created-${numberOfElement + 1} > div > div > span`).clientWidth >= document.querySelector(`.item-created-${numberOfElement + 1} > div > div`).clientWidth) {
			document.querySelector(`.item-created-${numberOfElement + 1}`).classList.add('animated')
		}
		document.querySelector('.scenarios__add-input > input').value = ''

		if (document.querySelector('.scenarios__items-list').childNodes.forEach((element) => {
			if (element.classList.contains('item-active')) {
				element.classList.remove('item-active')
			}
		})) {}
		else {
			document.querySelector(`.item-created-${numberOfElement + 1}`).classList.add('item-active')
		}

		document.querySelector(`.scenarios__items-list`).scrollTop = document.querySelector(`.scenarios__items-list`).scrollHeight
	}

	document.querySelector('.scenarios__add-input').classList.add('hidden')
	document.querySelector('.scenarios__add-button').classList.remove('hidden')
})
document.querySelector('.scenarios__add-input > input').addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		document.querySelector('.button-add').click()
	}
})
document.querySelector('.scenarios__add-input > input').addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		document.querySelector('.button-cancel').click()
	}
})
document.querySelector('.scenarios__items-list').addEventListener('click', (event) => {
	if (event.target.classList.contains('item-button-created__image-delete')) {
		const DOMname = event.target.closest('button').classList[1]
		user.forEach((element, index) => {
			if (element.DOMname === DOMname) {
				delete user[index]
			}
			if (element.tasks.length > 0) {
				document.querySelector('.tasks__tasks-list').childNodes.forEach((el) => {
					if (el.classList[1].slice(0, -2) === DOMname) {
						el.remove()
					}
				})
			}
		})
		saveUserFromStorage()
		event.target.closest('button').remove()
		
		setTimeout(() => {
			renderDefaultTasksOfActiveScenarioItem()
		}, 1)
	}
})