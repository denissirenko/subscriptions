"use strict";var btns=document.querySelectorAll(".btn"),activeCount=document.querySelector(".activ__subscriptions"),checkboxes=document.querySelectorAll("input[type=checkbox"),tasks=document.querySelectorAll(".table__task"),activeTask=function(){for(var t=0,e=0;e<tasks.length;e++)tasks[e].classList.contains("active")&&t++;activeCount.innerHTML=t};activeTask();for(var i=0;i<checkboxes.length;i++)checkboxes[i].addEventListener("click",function(){var t=this.closest(".table__task");t.classList.toggle("active"),activeTask()});for(var _i=0;_i<btns.length;_i++)btns[_i].addEventListener("click",function(){var t=this.closest(".table__task");t.classList.remove("active"),t.style.display="none",activeTask()});
//# sourceMappingURL=main.js.map
