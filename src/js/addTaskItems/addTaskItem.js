import { saveUserFromStorage } from '../localStorage/saveUserToStorage.js'
import { user } from '../userInfo.js'
import { createTaskItem } from './createTaskItem.js'

export function addTaskItem() {
	user.forEach((element) => {
		let DOMname = element.DOMname
		element.tasks.forEach((element) => {
			createTaskItem(DOMname, element.id, element.text, element.data, element.isImportant)
		})
	});
	saveUserFromStorage()
	const result = user.reduce((acc, el) => {
		return acc += el.tasks.length
	}, 0)
	for (let i = 1; i <= result; i++) {
		if (document.querySelector(`.tasks__tasks-list > div:nth-child(${i}) > div > div > span`).clientWidth >= document.querySelector(`.tasks__tasks-list > div:nth-child(${i}) > div > div`).clientWidth) {
			document.querySelector(`.tasks__tasks-list > div:nth-child(${i})`).classList.add('animated')
		}
	}
}