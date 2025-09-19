import React from 'react'
import Question from './Question'

const data = [
  {
    id: 1,
    title: "JavaScript Basics",
    content: "What keyword is used to declare a variable in JavaScript?",
    answer: "let, const, or var"
  },
  {
    id: 2,
    title: "React State",
    content: "Which hook is used to manage state in functional components?",
    answer: "useState"
  },
  {
    id: 3,
    title: "HTML Elements",
    content: "Which HTML element is used to define the largest heading?",
    answer: "<h1>"
  },
  {
    id: 4,
    title: "CSS Styling",
    content: "Which property is used to change the text color in CSS?",
    answer: "color"
  },
  {
    id: 5,
    title: "Git Basics",
    content: "Which command is used to create a new Git repository?",
    answer: "git init"
  },
  {
    id: 6,
    title: "Array Methods",
    content: "Which method is used to add elements to the end of an array?",
    answer: "push()"
  },
  {
    id: 7,
    title: "HTTP Status Codes",
    content: "What does status code 404 represent?",
    answer: "Not Found"
  },
  {
    id: 8,
    title: "JavaScript Functions",
    content: "What keyword is used to define a function?",
    answer: "function"
  },
  {
    id: 9,
    title: "React Components",
    content: "What is the correct syntax to define a functional component?",
    answer: "function MyComponent() { return <div>...</div> }"
  },
  {
    id: 10,
    title: "CSS Box Model",
    content: "Which CSS property defines the space between the element's content and its border?",
    answer: "padding"
  },
  {
    id: 11,
    title: "Node.js Runtime",
    content: "What command is used to run a JavaScript file in Node.js?",
    answer: "node filename.js"
  },
  {
    id: 12,
    title: "Database Basics",
    content: "Which SQL command is used to retrieve data from a database?",
    answer: "SELECT"
  }
];



function QuestionList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
    {data.map((question)=><Question question={question} />)}
    </div>
  )
}

export default QuestionList
