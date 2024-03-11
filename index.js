const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to ask a question and check the answer
function askQuestion(question, correctAnswer) {
  return new Promise((resolve, reject) => {
    rl.question(question, (userAnswer) => {
      const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
      resolve(isCorrect);
    });
  });
}

// Main function to run the quiz
async function quizGame() {
  let score = 0;

  console.log("Welcome to the Simple Quiz Game!");

  const question1 = await askQuestion("What is the capital of France? ", "Paris");
  const question2 = await askQuestion("Which planet is known as the Red Planet? ", "Mars");
  const question3 = await askQuestion("What is the largest mammal in the world? ", "Blue Whale");

  if (question1) score++;
  if (question2) score++;
  if (question3) score++;

  console.log(`Game Over! Your final score is: ${score}`);
  rl.close();
}

// Run the quiz game
quizGame();