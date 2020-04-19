import dashboard from "./components/dashboard";
import grades from "./components/grades";
import settings from "./components/settings";
import flashcards from "./components/fcstack";
import Register from "./components/Register";
import createQuiz from "./components/teacher/CreateQuiz";
import Students from "./components/teacher/Students";
import Login from "./components/Login";
import QuizDetails from "./components/QuizDetails";
import Quiz from "./components/Quiz";

// list of flashcards //
import flashcardsap from "./components/fccomponents/flashcards";
import flashcardsap2 from "./components/fccomponents/flashcards2";
import flashcardsdr1 from "./components/fccomponents/flashcardsdr1";
import flashcardsdr2 from "./components/fccomponents/flashcardsdr2";
import flashcardsam1 from "./components/fccomponents/flashcardsam1";
import flashcardsam2 from "./components/fccomponents/flashcardsam2";

export const routes = [
  { name: 'dashboard', path: "/", component: dashboard, meta: {requireAuth: true, teacherAuth: false} },
  { name: 'grades', path: "/grades", component: grades, meta: { requireAuth: true, teacherAuth: false } },
  { name: 'quizzes', path: "/quizzes", component: Quiz, meta: { requireAuth: true, teacherAuth: false } },
  { name: 'quizDetails', path: "/quizzes/quiz-details/:id", component: QuizDetails, meta: { requireAuth: true, teacherAuth: false } },
  { name: 'quiz', path: "/quizzes/quiz/:id", component: Quiz, meta: { requireAuth: true, teacherAuth: false } },
  { name: 'settings', path: "/settings", component: settings, meta: { requireAuth: true, teacherAuth: false } },
  { name: 'flashcards', path: "/flashcards", component: flashcards, meta: { requireAuth: false, teacherAuth: false } },
  { name: "flashcardsap2", path: "/flashcardsap2", component: flashcardsap2, meta: { requireAuth: false, teacherAuth: false } },
  { name: "flashcardsap", path: "/flashcardsap", component: flashcardsap, meta: { requireAuth: false, teacherAuth: false } },
  { name: "flashcardsdr1", path: "/flashcardsdr1", component: flashcardsdr1, meta: { requireAuth: false, teacherAuth: false } },
  { name: "flashcardsdr2", path: "/flashcardsdr2", component: flashcardsdr2, meta: { requireAuth: false, teacherAuth: false } },
  { name: "flashcardsam1", path: "/flashcardsam1", component: flashcardsam1, meta: { requireAuth: false, teacherAuth: false } },
  { name: "flashcardsam2", path: "/flashcardsam2", component: flashcardsam2, meta: { requireAuth: false, teacherAuth: false } },
  { name: "register", path: "/register", component: Register },
  { name: 'createQuiz', path: "/teacher/create-quiz", component: createQuiz, meta: { requireAuth: true, teacherAuth: true } },
  { name: 'students', path: "/teacher/students", component: Students, meta: { requireAuth: true, teacherAuth: true } },
  { name: 'login', path: "/login", component: Login }
];
