<template>
  <div class="modal is-active">
    <div class="modal-background" @click="emitClose"></div>
    <div class="modal-content">
      <div class="box settings-container">
        <div class="field">
          <label class="label">Number of scramble moves</label>
          <div class="control">
            <input v-model="scrambleNumber" class="input" type="number" min="10" max="30">
          </div>
        </div>
        <div class="has-text-right">
          <button class="button mr-4" @click.prevent="emitClose">Cancel</button>
          <button class="button is-primary" @click.prevent="save">Save</button>
        </div>
      </div>
    </div>
    <button class="modal-close" @click.prevent="emitClose"></button>
  </div>
</template>

<script>
import Cookie from 'js-cookie';

export default {
  name: 'SettingsModal',
  props: {
    scrambleMoves: { type: Number, required: true },
  },
  data() {
    return {
      scrambleNumber: 0,
    };
  },
  methods: {
    save() {
      if (this.scrambleNumber <= 0) this.scrambleNumber = 1;
      Cookie.set('scrambleMoves', this.scrambleNumber);
      this.emitClose();
    },
    emitClose() {
      this.$emit('close');
    },
  },
  created() {
    this.scrambleNumber = this.scrambleMoves;
  },
};
</script>
