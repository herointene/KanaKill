<template>
	<div id="testBlock">
		<ScoreBar :currentChance="currentChance" :typeFrom="typeFrom" @typeFrom="switchFrom" />
		<div id="displayQuestion" class=" my-8 md:my-24">
			<QuestionDisplay :gyo="currentGyo" :dan="currentDan" :kanaType="typeFrom" :transToggle="transToggle" />
		</div>
		<!-- <button name="randomBtn" type="button" @click="getCurrent">Skip//</button> -->
		<!-- <button name="startBtn" type="button" @click="countStart=!countStart">Start</button> -->
		<div id="optionsBlock" class="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-5">
			<!-- ontouchstart: for safari touch screen triggered :active -->
			<div ontouchstart="" :id="'judgeBox'+index" @click="checkIt(i)" v-for="(i, index) in optionsList" :key="index"
				:class="classToggle(i)" class=" h-44 w-44 cursor-pointer flex justify-center items-center rounded-2xl shadow-box-1 transition 
					ease-in lg:hover:bg-gray-100 lg:active:bg-red-50 active:shadow-box-inner  bg-red-50 ">
				<Kana v-bind="i" :opaToggle="opaToggle"></Kana>
			</div>
		</div>
		<div ontouchstart=""
			class="flex justify-center items-center mx-auto mt-10 w-80 h-11 cursor-pointer rounded-2xl shadow-box-1 transition ease-in lg:hover:bg-gray-100 lg:active:bg-red-50 active:shadow-box-inner  bg-red-50"
			@click="getAudio(currentGyo,currentDan)">
			<div class="text-center font-bold select-none text-red-300">
				<svg class="inline" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 14.959V9.04C2 8.466 2.448 8 3 8h3.586a.98.98 0 0 0 .707-.305l3-3.388c.63-.656 1.707-.191 1.707.736v13.914c0 .934-1.09 1.395-1.716.726l-2.99-3.369A.98.98 0 0 0 6.578 16H3c-.552 0-1-.466-1-1.041ZM16 8.5c1.333 1.778 1.333 5.222 0 7M19 5c3.988 3.808 4.012 10.217 0 14"/></svg>
				Play Audio / 播放音頻 
			</div>
		</div>
	</div>
</template>

<script>
import _random from 'lodash/random'
import _some from 'lodash/some'
import _shuffle from 'lodash/shuffle'
// components load
import Kana from './Kana.vue'
import ScoreBar from './ScoreBar.vue'
import QuestionDisplay from './QuestionDisplay.vue'
import kanaJson from '../assets/kana.json'

export default {
	components: {
		Kana,
		ScoreBar,
		QuestionDisplay,
	},

	data() {
		return {
			kanaJson,
			typeFrom: 'hiragana',
			typeTo: 'romaji',

			start: false,
			// countStart: false,
			// timeLeft: 5,
			currentChance: 3,
			currentScore: 0,
			opaToggle: false,
			transToggle: false,
			currentGyo: 0,
			currentDan: 0,

		}
	},

	computed: {
		optionsList() {
			const optionsPreShuffled = []
			while (optionsPreShuffled.length < 3) {
				let randoms = this.getRandom()
				let randGyo = randoms[0]
				let randDan = randoms[1]
				if (randGyo === this.currentGyo && randDan === this.currentDan) {
					console.log('correct duplicated')
					continue
				}
				let kanaConfig = { gyo: randGyo, dan: randDan, kanaType: this.typeTo }
				let checkDulp = _some(optionsPreShuffled, kanaConfig) //check options dulplicated
				if (checkDulp) {
					console.log('options duplicated')
					continue
				}
				optionsPreShuffled.push(kanaConfig)
			}
			optionsPreShuffled.push({ gyo: this.currentGyo, dan: this.currentDan, kanaType: this.typeTo })
			let optionsShuffled = _shuffle(optionsPreShuffled)
			return optionsShuffled
		}
	},

	mounted() {
		this.getCurrent()
	},

	watch: {
		// countStart(){ //TIME MODE
		// 	if(this.countStart===true){
		// 		const countTime = setInterval(() => {
		// 			this.timeLeft -= 1
		// 			if(this.timeLeft<0){
		// 				clearInterval(countTime)
		// 				alert('Game over! your score is: ' + this.currentChance)
		// 				this.timeLeft = 5
		// 			}else if(this.countStart===false){
		// 				clearInterval(countTime)
		// 			}
		// 		}, 1000)
		// 	}

		// },
		currentChance() {
			if (this.currentChance < 0) {
				alert('GameOver! You got ' + this.currentScore + '. Try again! \n 你獲得了 ' + this.currentScore + '分，請再接再厲！ ')
				this.currentChance = 3
				this.currentScore = 0
			}
		}


	},

	methods: {
		switchFrom(typeFrom) { //event 'typeFrom' send a type to ''typeFrom'' in this component's data 
			this.typeFrom = typeFrom
		},

		// switchTo(typeTo){
		// 	this.typeTo = typeTo
		// },

		checkIt(i) {
			if (i.gyo === this.currentGyo && i.dan === this.currentDan) {
				i.tapCorrect = true
				this.currentScore += 1
				setTimeout(() => {
					this.opaToggle = true //opacity
				}, 200);
				setTimeout(() => {
					this.getCurrent()
					i.tapCorrect = false
				}, 400)
			} else {
				console.log('wrong')
				this.transToggle = true
				i.tapWrong = true
				this.currentChance -= 1
				setTimeout(() => {
					this.opaToggle = true //opacity
				}, 1000);
				setTimeout(() => {
					this.getCurrent()
					i.tapWrong = false
				}, 1200)
			}
		},

		classToggle(i) {
			return i.tapWrong === true ? 'shadow-box-wrong' : ''
		},

		getCurrent() {
			this.transToggle = false
			let randoms = this.getRandom()
			this.currentGyo = randoms[0]
			this.currentDan = randoms[1]
			this.opaToggle = false
			// console.log(this.currentGyo+'-'+this.currentDan)
		},
		getRandom() {
			let randGyo = _random(9)
			let randDan = _random(4)
			if (randGyo === 7 || randGyo === 9) {
				if (randDan === 1 || randDan === 3) {
					// console.log(randGyo+'+'+randDan)
					return this.getRandom()
				}
			}
			return [randGyo, randDan]
		},
		getAudio(gyo, dan) {
			let items = this.kanaJson[0].items
			let kana = items[gyo][dan]['romaji']
			
			let source = './audio/' + kana + '.mp3'
			
			if (source) {
				const audio = new Audio(require(`${source}`))
				audio.play()
				
			}
		}


	},
}
</script>

<style>

</style>
