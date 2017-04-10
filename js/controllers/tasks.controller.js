'use strict';
// Tasks Controller

class TasksController {
  constructor(){
    this.$addTaskForm = $('#add_task')
    this.$taskDescriptionInput = $('#task_description')
    this.$selectListMenu= $('#select_list')
    this.$taskPriorityInput = $('#task_priority')
    this.$wrapper = $('#wrapper')
  }

  init(){
    this.$addTaskForm.on('submit', (e) => {
      e.preventDefault()
      let list = List.all[parseInt($('select').val())]
      let desc = this.$taskDescriptionInput.val()
      let priority = this.$taskPriorityInput.val()
      let newTask = new Task(desc, priority, list)
      newTask.build()
      $('.destroy-task').on('click', (e) => {
        e.preventDefault()
        e.target.parentElement.remove()
        list.tasks.splice(newTask.id, 1, null)
      })
    })
  }
}
