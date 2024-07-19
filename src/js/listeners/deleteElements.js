import { saveUserFromStorage } from '../localStorage/saveUserToStorage.js'
import { user } from '../userInfo.js'

document.querySelector('.tasks__delete-button').addEventListener('click', () => {
	while (document.querySelector('.tasks__tasks-list').childNodes.length > 0) {
		document.querySelector('.tasks__tasks-list').childNodes.forEach((element) => {
			const DOMname = element.classList[1].slice(0, -2)
			const id = Number(element.classList[1].at(-1))
			element.remove()
			user.forEach((el) => {
				if (el.DOMname === DOMname) {
					el.tasks.forEach((element) => {
						if (element.id === id) {
							const indexOfTask = el.tasks.indexOf(element)
							delete el.tasks[indexOfTask]
						}
					})
				}
			})
			saveUserFromStorage()
		})
	}
})