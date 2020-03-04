<template>
  <div>
    <h1>GameOver</h1>
    <!-- Render QuizResults -->
    <!-- {{ answers }}  -->
    <h2>Your score: {{ answers.filter(x => x == true).length * 10 }} /100</h2>
    <QuizResults :answers="answers" :questions="questions" />
    <button><a href="/">Go To Start</a></button>
    <br /><br />
  </div>
</template>

<script>
import QuizResults from "./QuizResults.vue";

export default {
  props: {
    answers: {
      type: Array,
      required: true
    },
    questions: {
      type: Array,
      required: true
    }
  },
  components: {
    QuizResults
  }
};
</script>

<style>
a {
  color: inherit;
  text-decoration: none;
}
</style>
