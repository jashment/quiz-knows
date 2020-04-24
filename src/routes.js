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
  { name: 'dashboard', path: "/", component: dashboard },
  { name: 'grades', path: "/grades", component: grades },
  { name: 'quizzes', path: "/quizzes", component: Quiz },
  { name: 'quizDetails', path: "/quizzes/quiz-details/:id", component: QuizDetails },
  { name: 'quiz', path: "/quizzes/quiz/:id", component: Quiz },
  { name: 'settings', path: "/settings", component: settings },
  { name: 'flashcards', path: "/flashcards", component: flashcards },
  { name: "flashcardsap2", path: "/flashcardsap2", component: flashcardsap2 },
  { name: "flashcardsap", path: "/flashcardsap", component: flashcardsap },
  { name: "flashcardsdr1", path: "/flashcardsdr1", component: flashcardsdr1 },
  { name: "flashcardsdr2", path: "/flashcardsdr2", component: flashcardsdr2 },
  { name: "flashcardsam1", path: "/flashcardsam1", component: flashcardsam1 },
  { name: "flashcardsam2", path: "/flashcardsam2", component: flashcardsam2 },
  { name: "register", path: "/register", component: Register },
  { name: 'createQuiz', path: "/teacher/create-quiz", component: createQuiz, meta: { requireAuth: true, teacherAuth: true, studentAuth: false } },
  { name: 'students', path: "/teacher/students", component: Students, meta: { requireAuth: true, teacherAuth: true, studentAuth: false } },
  { name: 'login', path: "/login", component: Login }
];
