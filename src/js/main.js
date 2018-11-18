const btns = document.querySelectorAll('.btn');
const activeCount = document.querySelector('.activ__subscriptions');
const checkboxes = document.querySelectorAll('input[type=checkbox');
const tasks = document.querySelectorAll('.table__task');
const activeTask = function () {
    let result = 0;
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].classList.contains('active')) {
         result++;
        }
    }
    activeCount.innerHTML = result;
};
 activeTask();
 for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function() {
        const task = this.closest('.table__task');
        task.classList.toggle('active');
        activeTask();
    })
};
 for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        const task = this.closest('.table__task');
        task.classList.remove('active');
        task.style.display = "none";
        activeTask();
    })
};