<template>
  <div>
    <h1>Question {{ counter + 1 }}</h1>
    <p v-html="questions[this.counter].question">
      <!-- {{ questions[this.counter].question }} -->
    </p>
    <button @click="clickEvent('True')">True</button>
    <button @click="clickEvent('False')">False</button>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      counter: 0,
      answers: []
    };
  },
  methods: {
    clickEvent: function(booleanAnswer) {
      this.answers.push(
        this.questions[this.counter].correct_answer == booleanAnswer
      );
      this.counter++;
      var newObj = { counter: this.counter, answers: this.answers };
      this.$emit("changeCounter", newObj);
    }
  }
};
</script>

<style></style>
