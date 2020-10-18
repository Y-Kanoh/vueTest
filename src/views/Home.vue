<template>
  <div>
    Home

    <div
      v-touch:swipe.left="slideToLeft"
      v-touch:swipe.right="slideToRight"
    >
      <transition :name="slide1Animation" mode="out-in">
        <div v-if="nowSlide=='Slide1'">
          <Slide1></Slide1>
        </div>
      </transition>
      <transition :name="slide2Animation" mode="out-in">
        <div v-if="nowSlide=='Slide2'">
          <Slide2></Slide2>
        </div>
      </transition>
      <transition :name="slide3Animation" mode="out-in">
        <div v-if="nowSlide=='Slide3'">
          <Slide3></Slide3>
        </div>
      </transition>
    </div>

    <button v-on:click="show = !show">
      Toggle
    </button>

    <transition :name="testName">
      <p v-if="show">hello</p>
  </transition>

  </div>
</template>

<script>
import Slide1 from '@/views/Slide1.vue'
import Slide2 from '@/views/Slide2.vue'
import Slide3 from '@/views/Slide3.vue'
export default {
  components: {
    Slide1,
    Slide2,
    Slide3
  },
  name: 'Home',
  data () {
    return {
      show: true,
      testName: 'rightSlideAnimation',
      rightSlide: 'Slide1',
      nowSlide: 'Slide2',
      leftSlide: 'Slide3',
      slide1Animation: 'rightSlideAnimation',
      slide2Animation: '',
      slide3Animation: 'leftSlideAnimation'
    }
  },
  methods: {
    slideToRight: function () {
      this.moveSlidePosition(this.leftSlide)
    },
    slideToLeft: function () {
      this.testName = 'leftSlideAnimation'
      this.moveSlidePosition(this.rightSlide)
    },
    moveSlidePosition: function (toPage) {
      this.nowSlide = toPage
      switch (toPage) {
        case 'Slide1':
          this.slide3Animation = 'leftSlideAnimation'
          this.slide2Animation = 'rightSlideAnimation'
          this.leftSlide = 'Slide3'
          this.rightSlide = 'Slide2'
          break
        case 'Slide2':
          this.slide1Animation = 'leftSlideAnimation'
          this.slide3Animation = 'rightSlideAnimation'
          this.leftSlide = 'Slide1'
          this.rightSlide = 'Slide3'
          break
        case 'Slide3':
          this.slide1Animation = 'leftSlideAnimation'
          this.slide2Animation = 'rightSlideAnimation'
          this.leftSlide = 'Slide1'
          this.rightSlide = 'Slide2'
          break
      }
    }
  }
}
</script>
<style scoped>
.rightSlideAnimation-enter-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.rightSlideAnimation-enter /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100vw) translateX(0px);
}

.leftSlideAnimation-enter-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.leftSlideAnimation-enter {
  transform: translateX(-100vw) translateX(0px);
}

.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
