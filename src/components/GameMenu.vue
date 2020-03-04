<template>
  <div>
    <h1>GameMenu</h1>
    <h3>How many questions do you want?</h3>
    <input
      type="range"
      id="rangeInput"
      name="rangeInput"
      min="10"
      max="20"
      value="15"
      oninput="amount.value=rangeInput.value"
      v-model="howManyQuestions"
    /><br />

    <output id="amount" name="amount" for="rangeInput">15</output><br /><br />
    <router-link type="button" tag="button" to="/gameplay"
      >Start Game</router-link
    >
  </div>
</template>

<script>
// import GamePlay from "./GamePlay.vue";

export default {
  data: function() {
    return {
      howManyQuestions: 15
    };
  }
};
</script>

<style></style>
