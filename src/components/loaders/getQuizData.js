
export const quizDataLoader = async () => {
    const QuizData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const quiz = await QuizData.json()





    return quiz
}