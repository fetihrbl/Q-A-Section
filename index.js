const questions = document.querySelectorAll(".question");


questions.forEach((question) => {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function(){
        // Remove  "show-text" class
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        })
        
        question.classList.toggle("show-text");
    })
})