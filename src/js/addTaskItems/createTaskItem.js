import { taskIcons } from '../pathsToIcons.js'

export function createTaskItem(DOMname, id, text, data, isImportant = false) {
	const taskItem = document.createElement('div')
	taskItem.classList.add('tasks-list__task', `${DOMname}-${id}`)
	taskItem.innerHTML = `
	<div class="task-left">
		<button class="task-left__button-circle">
			<img class="button-circle__image" src="${taskIcons.circle}">
		</button>
		<div class="task-left__body">
			<span class="task-left__text">${text}</span>
		</div>
	</div>
	<div class="task-right">
		<span class="task-right__data">${data}</span>
		<button class="task-right__button-important">
			<img class="button-important__image" src="${isImportant ? taskIcons.starActive : taskIcons.star}">
		</button>
		<button class="task-right__button-delete">
			<img class="button-delete__image" src="${taskIcons.delete}">
		</button>
	</div>`
	document.querySelector('.tasks__tasks-list').appendChild(taskItem)
}