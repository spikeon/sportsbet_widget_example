Flow
---

1. Load site with just an image displayed and the resources included.  React app should not be initialized at this point. 
2. When Image is clicked, create a div at the end of the page and load the react app into it
3. When the react app is run, it should create a modal window that covers the entire page and displays a question with radio button answers, previous and next buttons
4. Clicking on the next button loads the next question.
5. When all questions are answered, show a download app to continue button.
6. When download is clicked, close modal


Internal Structure
---
```
{
    questions:[
        {
            question: "What is a dog?",
            answers: [
                "A friend for life", 
                "a nussance", 
                "god"
            ],
            chosen_answer: 0
        },
        ...
    ]
}
```