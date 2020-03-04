<template>
  <div>
    <ul>
      <li v-for="(question, index) in questions" :key="question.question">
        <span v-html="question.question"></span><br />
        Correct Answer: {{ question.correct_answer }}<br />
        You answered: {{ answers[index] ? "Correct" : "Wrong" }} <br /><br />
      </li>
    </ul>
  </div>
</template>

<script>
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
  }
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>
