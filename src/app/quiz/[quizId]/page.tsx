import { PrismaClient } from "@prisma/client";
import QuizClient from "./QuizClient";

const prisma = new PrismaClient();

export default async function QuizPage({
  params,
}: {
  params: { quizId: string };
}) {
  const quiz = await prisma.quiz.findUnique({
    where: { id: params.quizId },
    include: { questions: { orderBy: { order: "asc" } } },
  });

  if (!quiz) {
    return (
      <div style={{ textAlign: 'center', padding: 60 }}>
        <h2>Test topilmadi</h2>
        <a href="/learn" style={{ color: '#3b82f6' }}>← Kutubxonaga qaytish</a>
      </div>
    );
  }

  // Prisma ma'lumotlarini oddiy obyektga o'tkazish
  const plainQuiz = JSON.parse(JSON.stringify(quiz));

  return <QuizClient quiz={plainQuiz} />;
}