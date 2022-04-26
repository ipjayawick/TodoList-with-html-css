const input_text = document.getElementById('input-text');
const todo_list = document.getElementById('todo-list');
const add_button = document.getElementById('add-button');
var del_buttons = document.querySelectorAll('.del-btn');

input_text.focus()
add_button.addEventListener("click", e => {
    add_todo();
    input_text.focus()
});

input_text.addEventListener("keyup",e=>{
    if(e.key==='Enter')add_todo();
})

function add_del_action(){
    del_buttons = document.querySelectorAll('.del-btn');
    del_buttons.forEach(btn => {
        btn.addEventListener("click",e=>{
            remove_todo(e,btn)
            input_text.focus()
        })
    });
}

function remove_todo(e,btn){
    btn.parentElement.outerHTML=''
}

function add_todo(){
    if (input_text.value==='') return;
    todo_list.innerHTML +=
    `<div class="card item-card">
    <p>${input_text.value}</p>
    <button class="btn del-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </div>`   
    input_text.value=''
    add_del_action()
}