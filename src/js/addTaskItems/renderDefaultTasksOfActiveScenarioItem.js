import { user } from '../userInfo.js'
import { createTaskItem } from './createTaskItem.js'
import { watchingTasksItems } from './watchingTasksItems.js'

export function renderDefaultTasksOfActiveScenarioItem() {
	document.querySelector('.item-all').classList.add('item-active')
	user.forEach((element) => {
		element.tasks.forEach((el) => {
			createTaskItem(element.DOMname, el.id, el.text, el.data, el.isImportant)
			setTimeout(() => {
				if (document.querySelector(`.${element.DOMname}-${el.id} > div > div > span`).clientWidth >= document.querySelector(`.${element.DOMname}-${el.id} > div > div`).clientWidth) {
					document.querySelector(`.${element.DOMname}-${el.id}`).classList.add('animated')
				}
			}, 1000)
		})
		watchingTasksItems()
	})
}