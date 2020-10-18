<template>
  <div>
    <v-sheet
      height="200px"
      color="#66ff66"
    >
      Slide 2
    </v-sheet>
  </div>
</template>

<script>

export default {
  name: 'Slide2',
  methods: {
    onSwipeLeft: function () {
      console.log('aaaaaaa')
      alert(1)
      this.viewName = 'Slide1'
    }
  }
}
</script>
