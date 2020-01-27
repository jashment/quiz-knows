import dashboard from './components/dashboard'
import Home from './components/Home'
import grades from './components/grades'
import tests from './components/tests'
import quizzes from './components/quizzes'
import settings from './components/settings'
import cardlayout from './components/cardlayout'
import logger from './components/Logger'
import createQuiz from './components/teacher/CreateQuiz.vue'

export const routes = [
  { path: '/dashboard', component: dashboard },
  { path: '/', component: Home },
  { path: '/grades', component: grades },
  { path: '/tests', component: tests },
  { path: '/quizzes', component: quizzes },
  { path: '/settings', component: settings },
  { path: '/cardlayout', component: cardlayout },
  { path: '/logger', component: logger },
  { path: '/create-quiz', component: createQuiz },
]
