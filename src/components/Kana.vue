<template>
  <div>
    <div v-for="(eachrows,index) in kana[0].items" :key="index" >
      <div v-for="item in eachrows" :key="item.id" >
        {{item.hiragana}} -- {{item.katakana}} -- {{item.romaji}}
      </div>
    </div>
  </div>
</template>

<script>
import kana from '../assets/kana.json';
export default {
  data() {
    return {
      kana
    }
  },
}
</script>

<style>

</style>