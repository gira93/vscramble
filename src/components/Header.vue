<template>
  <header class="header columns">
    <div class="column has-text-right header-buttons">
      <button class="button is-primary" @click.prevent="$emit('reroll')">Re-roll</button>
      <button class="button" @click.prevent="$emit('open-settings')">Settings</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
  .header {
    height: 5rem;
    padding-top: 1rem;
  }

  .header-buttons {
    .button {
      margin-right: 1rem;
    }
  }
</style>
