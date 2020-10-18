<template>
  <div id="demo">
    <button v-on:click="show = !show">
      Toggle
    </button>

    <button v-on:click="change">
      Change
    </button>

    <transition :name="transitionName">
      <v-sheet v-if="show">
        TransitionTest
      </v-sheet>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TransitionTest',
  data () {
    return {
      show: true,
      transitionName: 'fade'
    }
  },
  methods: {
    change: function () {
      if (this.transitionName === 'fade') {
        this.transitionName = 'leftSlideAnimation'
      } else {
        this.transitionName = 'fade'
      }
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.leftSlideAnimation-enter-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.leftSlideAnimation-enter {
  transform: translateX(-100vw) translateX(0px);
}
</style>
