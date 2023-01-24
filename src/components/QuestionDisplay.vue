<template>
  <div
    id="showHiragana"
    class="
      text-center
      w-40
      h-40
      overflow-hidden
      mx-auto
      shadow-box-inner
      rounded-2xl
      text-red-400
    "
  >
    <div
      class="
        grid grid-cols-1
        gap-y-5
        justify-items-center
        my-4
        text-9xl
        inner_text_shadow
        transform
        duration-200
      "
      :class="{ ' -translate-y-36 ': transToggle }"
    >
      <div class="transition duration-200 cursor-pointer select-none">
        {{ getKana(gyo, dan, kanaType) }}
      </div>
      <div class="transition duration-500 select-none" v-show="transToggle">
        {{ getKana(gyo, dan, "romaji") }}
      </div>
    </div>
  </div>
</template>

<script>
import kana from "../assets/kana.json";
export default {
  props: {
    //kanaType: id/hiragana/katakana/romaji
    gyo: { type: Number, default: 0 },
    dan: { type: Number, default: 0 },
    kanaType: { type: String, default: "hiragana" },
    transToggle: { type: Boolean, default: false },
  },
  data() {
    return {
      kana,
			publicPath: process.env.BASE_URL,
			audioPath: ''
    };
  },
  methods: {
    getKana(nowGyo, nowDan, kanaType) {
      let items = this.kana[0].items
      let kana = items[nowGyo][nowDan][kanaType]
      let romaji = items[nowGyo][nowDan]['romaji']
      if (kana) {
				this.audioPath = 'audio/'+romaji+'.wav'
        return kana;

      } else {
        return "X";
      }
    },

  },
};
</script>

<style>
.inner_text_shadow {
  text-shadow: -3px -3px 8px rgb(227, 212, 212), 3px 3px 7px rgb(196, 171, 171);
}
</style>