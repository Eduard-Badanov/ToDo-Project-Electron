import { removeCompletedTaskItem } from '../addCompletedTaskItems/removeCompletedTaskItem.js'
import { removeRenderedTasksOfActiveScenarioItem } from '../addTaskItems/removeRenderedTasksOfActiveScenarioItem.js'
import { renderTasksOfActiveScenarioItem } from '../addTaskItems/renderTasksOfActiveScenarioItem.js'
import { showCompletedTasks } from '../listeners/showCompletedTasks.js'

document.querySelector('.scenarios__items-list').addEventListener('click', (event) => {
	if (event.target.closest('button') !== null) {
		if (document.querySelector('.scenarios__items-list').childNodes.forEach((element) => {
			if (element.classList.contains('item-active')) {
				element.classList.remove('item-active')
				removeRenderedTasksOfActiveScenarioItem(element.classList[1])
				removeCompletedTaskItem()
				showCompletedTasks()
			}
		})) {
			event.target.closest('button').classList.add('item-active')
			renderTasksOfActiveScenarioItem(event.target.closest('button').classList[1])
		}
		else {
			(event.target.closest('button')).classList.add('item-active')
			renderTasksOfActiveScenarioItem(event.target.closest('button').classList[1])
		}
	}
})