const task_tags=$(".task-tag");

for(let task of task_tags){
    
    if($(task).attr("data-type") == " Personal ")
        $(task).css('background-color','#8fefff');
    else if($(task).attr("data-type") == " School ")
        $(task).css('background-color','magenta');
    else $(task).css('background-color','#85ff00');
}