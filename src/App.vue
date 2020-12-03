<template>
  <div class="main-container">
    <Header @reroll="triggerReroll" @open-settings="openSettingsModal = true"/>
    <Scramble ref="scramble" :scramble-moves="scrambleMoves" />

    <SettingsModal
      v-if="openSettingsModal"
      :scramble-moves="scrambleMoves"
      @close="handleCloseSettings"
    />
  </div>
</template>

<script>
import Cookie from 'js-cookie';

import Scramble from '@/components/Scramble.vue';
import Header from '@/components/Header.vue';
import SettingsModal from '@/components/SettingsModal.vue';

export default {
  name: 'App',
  components: {
    Scramble,
    Header,
    SettingsModal,
  },
  data() {
    return {
      openSettingsModal: false,
      scrambleMoves: 15, // Default move number
    };
  },
  methods: {
    triggerReroll() {
      this.$refs.scramble.reroll();
    },
    readAndUpdateSettings() {
      const scrambleMoves = Cookie.get('scrambleMoves');
      if (scrambleMoves) this.scrambleMoves = parseInt(scrambleMoves, 10);
    },
    handleCloseSettings() {
      this.readAndUpdateSettings();
      this.openSettingsModal = false;
    },
  },
  created() {
    this.readAndUpdateSettings();
  },
};
</script>

<style lang="scss">
  @import '@/assets/index.scss';
</style>
