'use strict';
// Lists Controller

class ListsController{
  constructor(){
    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')
  }

  init(){
    this.$addTaskForm.hide()
    this.$addListForm.on('submit', () => this.$addTaskForm.show())
    this.$addListForm.on('submit', (e) => {
      e.preventDefault()
      let x = $('#add_list input:first').val()
      let newList = new List(x)
      newList.build()
      $('.destroy-list').on('click', (e)=>{
        e.preventDefault()
        e.target.parentElement.parentElement.remove()
      })
    })
  }
}
