import dashboard from "./components/dashboard";
import grades from "./components/grades";
import settings from "./components/settings";
import Register from "./components/Register";
import createQuiz from "./components/teacher/CreateQuiz";
import EditQuiz from "./components/teacher/EditQuiz";
import Students from "./components/teacher/Students";
import Login from "./components/Login";
import QuizDetails from "./components/QuizDetails";
import Quiz from "./components/Quiz";
import FlashcardsHome from "./components/FlashcardHome";
import FlashcardDeck from "./components/FlashcardDeck";
import TeacherGrades from "./components/teacher/grades.vue"

export const routes = [
  { name: 'dashboard', path: "/", component: dashboard },
  { name: 'teacherGrades', path: "/grades/:id", component: TeacherGrades },
  { name: 'grades', path: "/grades", component: grades },
  { name: 'quizzes', path: "/quizzes", component: Quiz },
  { name: 'editquiz', path: "/teacher/edit-quiz/:id", component: EditQuiz },
  { name: 'quizDetails', path: "/quizzes/quiz-details/:id", component: QuizDetails },
  { name: 'quiz', path: "/quizzes/quiz/:id", component: Quiz },
  { name: 'settings', path: "/settings", component: settings },
  { name: 'settings', path: "/settings", component: settings },
  { name: 'flashcardHome', path: "/flashcards", component: FlashcardsHome },
  { name: 'flashcardDeck', path: "/flashcards/deck/:id", component: FlashcardDeck },
  { name: "register", path: "/register", component: Register },
  { name: 'createQuiz', path: "/teacher/create-quiz", component: createQuiz, meta: { requireAuth: true, teacherAuth: true, studentAuth: false } },
  { name: 'students', path: "/teacher/students", component: Students, meta: { requireAuth: true, teacherAuth: true, studentAuth: false } },
  { name: 'login', path: "/login", component: Login }
];
