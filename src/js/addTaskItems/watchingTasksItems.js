import { checkSorting } from '../listeners/sortingElements.js'
import { taskIcons } from '../pathsToIcons.js'
import { createTaskItem } from './createTaskItem.js'

export function watchingTasksItems() {
  const tasksList = document.querySelector('.tasks__tasks-list');
  const copyTaskList = [...tasksList.childNodes];
  if (tasksList) {
    const childNodes = Array.from(tasksList.childNodes);
    childNodes.forEach((element) => {
      if (element) {
        element.remove();
      }
    });
  }
  const tasks = []
  copyTaskList.forEach((element) => {
    const DOMname = element.classList[1].slice(0, -2)
    const id = Number(element.classList[1].at(-1))
    const text = element.querySelector('.task-left__text').textContent
    const data = element.querySelector('.task-right__data').textContent
    const isImportant = element.querySelector('.task-right__button-important > img').attributes.src.nodeValue === taskIcons.starActive ? true : false

    const task = {
      DOMname: DOMname,
      id: id,
      text: text,
      data: data,
      isImportant: isImportant
    }

    tasks.push(task)
  })
  if (checkSorting()) {
    tasks.sort((a, b) => {
      return new Date(a.data) - new Date(b.data)
    }).sort((a, b) => {
      return a.isImportant - b.isImportant
    }).forEach((el) => {
      createTaskItem(el.DOMname, el.id, el.text, el.data, el.isImportant)
      if (document.querySelector(`.${el.DOMname}-${el.id} > div > div > span`).clientWidth >= document.querySelector(`.${el.DOMname}-${el.id} > div > div`).clientWidth) {
        document.querySelector(`.${el.DOMname}-${el.id}`).classList.add('animated')
      }
    })
  } else {
    tasks.sort((a, b) => {
      return new Date(b.data) - new Date(a.data)
    }).sort((a, b) => {
      return a.isImportant - b.isImportant
    }).forEach((el) => {
      createTaskItem(el.DOMname, el.id, el.text, el.data, el.isImportant)
      if (document.querySelector(`.${el.DOMname}-${el.id} > div > div > span`).clientWidth >= document.querySelector(`.${el.DOMname}-${el.id} > div > div`).clientWidth) {
        document.querySelector(`.${el.DOMname}-${el.id}`).classList.add('animated')
      }
    })
  }
}