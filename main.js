const highButton = document.querySelector('.high-priority-first').addEventListener('click', function(){
    const highButton = document.querySelector('.high-priority-first')
    if (highButton.innerText === 'High Priority First') {
    currentTodos = priority2First(currentTodos)
    highButton.innerText = 'Original Order';
    } else if (highButton.innerText ==='Original Order'){
    currentTodos = todos.slice()
    highButton.innerText = 'High Priority First';
    }
    refreshTodos()
})

const lowButton = document.querySelector('.hide-low-priority').addEventListener('click', function(){
    const lowButton = document.querySelector('.hide-low-priority')
    if(lowButton.innerText === 'Hide Low Priority'){
        currentTodos = priority2Only(currentTodos)
        lowPriorityButton.innerText ='Show Low Priority'
    }
    else if(lowButton.innerText === 'Show Low Priority'){
        currentTodos = todos.slice()
        lowButton.innerText ='Hide Low Priority'
    }
    
    refreshTodos(currentTodos)
    
})

const hideButton = document.querySelector('.hide-complete').addEventListener('click', function(){
    const hideButton = document.querySelector('.hide-complete')
    if(hideButton.innerText === 'Hide Complete'){
        currentTodos = justNotComplete(currentTodos)
        hideButton.innerText ='Show Complete'
    }
    else if(hideButton.innerText === 'Show Complete'){
        currentTodos = todos.slice()
        hideButton.innerText ='Hide Complete'
    }
    
    refreshTodos()
});

const lastButton = document.querySelector('.complete-last').addEventListener('click' ,function() {
    const lastButton = document.querySelector('.complete-last')
    if (astButton.innerText === 'Complete Last') {
        currentTodos = notCompleteFirst(todos.slice())
        lastButton.innerText = 'Original Order';
    } else if (lastButton.innerText ==='Original Order'){
        currentTodos = todos.slice();
        lastButton.innerText = 'Complete Last';
    }
    refreshTodos()
    });



