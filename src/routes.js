import dashboard from './components/dashboard'
import Home from './components/Home'
import grades from './components/grades'
import tests from './components/tests'
import quizzes from './components/quizzes'
import settings from './components/settings'
import cardlayout from './components/cardlayout'
import logger from './components/Logger'
<<<<<<< HEAD
import Register from './components/Register'
=======
import createQuiz from './components/teacher/CreateQuiz'
import Students from './components/teacher/Students'
>>>>>>> 1f9022c34f9474490f1ae6f8124d2daf3dcaa0a7

export const routes = [
  { path: '/dashboard', component: dashboard },
  { path: '/', component: Home },
  { path: '/grades', component: grades },
  { path: '/tests', component: tests },
  { path: '/quizzes', component: quizzes },
  { path: '/settings', component: settings },
  { path: '/cardlayout', component: cardlayout },
  { path: '/logger', component: logger },
<<<<<<< HEAD
  { path: '/register', component: Register },
=======
  { path: '/teacher/create-quiz', component: createQuiz },
  { path: '/teacher/students', component: Students}
>>>>>>> 1f9022c34f9474490f1ae6f8124d2daf3dcaa0a7
]
