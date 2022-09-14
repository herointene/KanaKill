<template>
  <div class="shadow-md pb-2 mb-3">
    <div class="grid grid-cols-8 gap-x-3 text-xl text-red-400">
      <div id="sakuraScoreBar" class="col-span-3 flex">
        <transition-group tag="p" name="sakuraDrop" class="md:mx-auto">
          <span class="sakura select-none" v-for="i in currentChance" :key="i">
            &#127800;
          </span>
        </transition-group>
      </div>
      <a
        href="https://github.com/herointene/kanakill"
        id="appNameShow"
        target="_blank"
        class="select-none col-span-2 font-bold inner_text_shadow"
      >
        @KanaKill
      </a>
      <div id="grid-6"></div>
      <div
        ontouchstart=""
        @click="switchType"
        class="rounded-xl cursor-pointer w-16 text-opacity-70 select-none"
        :class="typeFrom === 'hiragana' ? 'shadow-box-2' : 'shadow-box-inner'"
      >
        {{ typeFrom.slice(0, 4) }}
      </div>
    </div>
  </div>
</template>

<script>
// import 'animate.css'
export default {
  props: ["currentChance", "typeFrom"],
  methods: {
    switchType() {
      if (this.typeFrom === "hiragana") {
        this.$emit("typeFrom", "katakana"); // send 'katakana' to TestBlock comp,
        //the event emit will call a function.
      } else {
        this.$emit("typeFrom", "hiragana");
      }
    },
  },
};
</script>

<style>
.sakura {
  display: inline-block;
  margin-right: 10px;
}

.sakuraDrop-leave-active {
  transition: all 2s ease-in;
}

.sakuraDrop-leave-to {
  opacity: 0;
  transform: translateY(80px) rotate(360deg);
}

.inner_text_shadow {
  text-shadow: -3px -3px 8px #eeebeb, 3px 3px 7px #c4abab;
}
</style>