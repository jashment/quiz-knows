import dashboard from './components/dashboard'
import Home from './components/Home'
import grades from './components/grades'
import tests from './components/tests'
import quizzes from './components/quizzes'
import settings from './components/settings'
import cardlayout from './components/cardlayout'
import flashcards from './components/fcstack'
import logger from './components/Logger'
import createQuiz from './components/teacher/CreateQuiz'
import Students from './components/teacher/Students'

// list of flashcards //
import flashcardsap from './components/fccomponents/flashcards'
import flashcardsap2 from './components/fccomponents/flashcards2'
import flashcardsdr1 from './components/fccomponents/flashcardsdr1'
import flashcardsdr2 from './components/fccomponents/flashcardsdr2'
import flashcardsam1 from './components/fccomponents/flashcardsam1'
import flashcardsam2 from './components/fccomponents/flashcardsam2'


export const routes = [
  { path: '/dashboard', component: dashboard },
  { path: '/', component: Home },
  { path: '/grades', component: grades },
  { path: '/tests', component: tests },
  { path: '/quizzes', component: quizzes },
  { path: '/settings', component: settings },
  { path: '/cardlayout', component: cardlayout },
  { path: '/flashcards', component: flashcards },
  { path: '/flashcardsap2', component: flashcardsap2 },
  { path: '/flashcardsap', component: flashcardsap },
  { path: '/flashcardsdr1', component: flashcardsdr1 },
  { path: '/flashcardsdr2', component: flashcardsdr2 },
  { path: '/flashcardsam1', component: flashcardsam1 },
  { path: '/flashcardsam2', component: flashcardsam2 },
  { path: '/logger', component: logger },
  { path: '/teacher/create-quiz', component: createQuiz },
  { path: '/teacher/students', component: Students },
]
