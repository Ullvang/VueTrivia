<template>
  <div>
    <!-- <p v-if="loading">{{ questions[0].question }}</p> -->
    <!-- Render QuizQuestions -->
    <QuizQuestion
      v-if="loading && counter < 10"
      :questions="questions"
      v-on:changeCounter="updateCounter($event)"
    />
    <GameOver v-if="counter >= 10" :answers="answers" :questions="questions" />
  </div>
</template>

<script>
import axios from "axios";
import QuizQuestion from "./QuizQuestion.vue";
import GameOver from "./GameOver.vue";

export default {
  data: function() {
    return {
      test1: true,
      test2: false,
      loading: false,
      questions: [],
      counter: 0,
      answers: []
      //   results: { questions: this.questions, answers: this.answers }
    };
  },
  methods: {
    updateCounter: function(number) {
      this.counter = number.counter;
      this.answers = number.answers;
    }
  },
  components: {
    QuizQuestion,
    GameOver
  },
  mounted() {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=boolean"
      )
      .then(response => {
        this.questions = response.data.results;
        this.loading = true;
        //console.log(response.data.results);
      });
  }
};
</script>

<style></style>
