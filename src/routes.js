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
  { path: "/", component: dashboard },
  { path: "/grades", component: grades },
  { path: "/quizzes", component: Quiz },
  { path: "/quizzes/quiz-details", component: QuizDetails },
  { path: "/quizzes/quiz", component: Quiz },
  { path: "/settings", component: settings },
  { path: "/flashcards", component: flashcards },
  { path: "/flashcardsap2", component: flashcardsap2 },
  { path: "/flashcardsap", component: flashcardsap },
  { path: "/flashcardsdr1", component: flashcardsdr1 },
  { path: "/flashcardsdr2", component: flashcardsdr2 },
  { path: "/flashcardsam1", component: flashcardsam1 },
  { path: "/flashcardsam2", component: flashcardsam2 },
  { path: "/register", component: Register },
  { path: "/teacher/create-quiz", component: createQuiz },
  { path: "/teacher/students", component: Students },
  { path: "/login", component: Login }
];
