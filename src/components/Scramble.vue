<template>
  <div class="
    scramble
    is-flex
    is-flex-direction-row
    is-align-items-center
    is-justify-content-center">
    <div class="scramble__result">
      <p class="is-size-3 is-size-1-tablet is-uppercase has-text-centered">
        <span v-for="(move, index) in scramble" :key="index">
          <span class="scramble__item">
            {{ move }}
          </span>
          <span
            v-if="!((index + 1)%5) && (index + 1) !== scramble.length"
            class="scramble__item scramble__item--accent"
          >-</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import scrambler from '@/services/scrambler';

export default {
  name: 'Scramble',
  props: {
    scrambleMoves: { type: Number, required: true },
  },
  data() {
    return {
      scramble: [],
    };
  },
  methods: {
    reroll() {
      this.scramble = scrambler.getScramble(this.scrambleMoves);
    },
  },
  created() {
    this.reroll();
  },
};
</script>

<style lang="scss">
  .scramble {
    height: calc(100vh - 5rem);

    &__item {
      padding: 0 0.7rem;

      &--accent {
        color: $red;
      }
    }
  }
</style>
