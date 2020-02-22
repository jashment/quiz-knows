import dashboard from './components/dashboard'
import Home from './components/Home'
import grades from './components/grades'
import quizzes from './components/quizzes'
import settings from './components/settings'
import cardlayout from './components/cardlayout'
import flashcards from './components/fcstack'
import flashcardad from './components/fccomponents/flashcards'
import logger from './components/Logger'
import createQuiz from './components/teacher/CreateQuiz'
import Students from './components/teacher/Students'
import QuizDetails from './components/QuizDetails'
import QuizPage from './components/QuizPage'
import Quiz from './components/Quiz'
import QuizResults from './components/QuizResults'

export const routes = [
  { path: '/dashboard', component: dashboard },
  { path: '/', component: Home },
  { path: '/grades', component: grades },
  { path: '/quizzes', component: quizzes },
  { path: '/quizzes/quiz-details', component: QuizDetails},
  { path: '/quizzes/quiz', component: QuizPage, children: [
      { path: '/quizzes/quiz', component: Quiz },
      { path: '/quizzes/quiz/results', component: QuizResults },
  ]},
  { path: '/settings', component: settings },
  { path: '/cardlayout', component: cardlayout },
  { path: '/flashcards', component: flashcards },
  { path: '/flashcardad', component: flashcardad },
  { path: '/logger', component: logger },
  { path: '/teacher/create-quiz', component: createQuiz },
  { path: '/teacher/students', component: Students},  
]
