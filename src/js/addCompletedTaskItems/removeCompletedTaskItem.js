export function removeCompletedTaskItem() {
	while (document.querySelector('.tasks__completed-tasks-list').childNodes.length > 0) {
		document.querySelector('.tasks__completed-tasks-list').childNodes.forEach((element) => {
			element.remove()
		})
	}
}