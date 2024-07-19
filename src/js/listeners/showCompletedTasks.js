document.querySelector('.tasks__completed-tasks').classList.add('hidden')

document.querySelector('.tasks__completed-tasks').addEventListener('click', () => {
	document.querySelector('.completed-tasks__image').classList.toggle('rotated')
	document.querySelector('.tasks__completed-tasks-list').classList.toggle('hidden')
})

export function showCompletedTasks() {
	if (document.querySelector('.tasks__completed-tasks-list').childNodes.length === 0) {
		document.querySelector('.tasks__completed-tasks').classList.add('hidden')
	} else {
		document.querySelector('.tasks__completed-tasks').classList.remove('hidden')
	}
}