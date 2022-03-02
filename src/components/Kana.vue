<template>
	<div id="showHiragana" class="text-center w-full  text-red-300 text-7xl inner_text_shadow ">
		<p class="transition" :class="{'opacity-0':opaToggle}"> {{getKana(gyo,dan,kanaType)}} </p>		
	</div>
</template>

<script>
import kana from '../assets/kana.json'
export default {
	props:{ //kanaType: id/hiragana/katakana/romaji
		gyo: {type: Number, default: 0},
		dan: {type: Number, default: 0},
		kanaType: {type: String, default: 'hiragana'},
		opaToggle:{type: Boolean,default: false}
	},

  data() {
    return {
      kana
			}
  },
	methods:{
		getKana(nowGyo,nowDan,kanaType){
			let items = this.kana[0].items
			let kana = items[nowGyo][nowDan][kanaType]
			if (kana){
				return kana
			}else{
				return "X"
			}
			
		},
		
	}
}
</script>

<style>
.inner_text_shadow
{
    text-shadow: -3px -3px 8px #eeebeb, 3px 3px 7px #c4abab;
}
</style>