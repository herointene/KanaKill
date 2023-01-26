<template>
  <div class="rounded-md shadow-md p-1 mb-3">
    <div class="flex  gap-x-3 text-xl text-red-400">
      <div class="flex-none widthfix">
        <div id="sakuraScoreBar" class="ml-2 flex ">
        <transition-group tag="p" name="sakuraDrop" >
          <span class="sakura select-none md:mx-auto" v-for="i in currentChance" :key="i">
            &#127800;
          </span>
        </transition-group>
      </div>
      </div>
      
      <a
        href="https://github.com/herointene/kanakill"
        id="appNameShow"
        target="_blank"
        class="select-none w-full mr-8 grow underline text-center col-span-2 font-bold inner_text_shadow"
      >
      <svg class="inline align-text-bottom" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
      KanaKill
      </a>
      
      <div
        ontouchstart=""
        @click="switchType"
        class="rounded-xl flex-none cursor-pointer w-16 text-opacity-70 select-none"
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
.widthfix{
  width: 91px
}

.sakura {
  display: inline-block;
  margin-right: 0px;
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