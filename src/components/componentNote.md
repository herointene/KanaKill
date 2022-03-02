
# Components Notes:

1. **Kana**: `3`(Display) Connected with kana.json, shows the letter of request (it can be hiragana/katakana/romaji/id).
2. **TestBlock**: `2`(Logic) Basic Logic Builder for whole app, with `1.Kana` & `3.ScoreBar` component.
   - It also has a button now, for shuffle Kana manually(Feb 25).
3. **ScoreBar**: `3`(Display) ScoreBar contains currentScore, timer.
4. **QuestionDisplay**: `3`(Display) the same as `1.Kana` with some CSS changed. 

5. **APP**: `1`(Main).
``` md
App
|
|-TestBlock
| |
| |-ScoreBar
| |-QuestionDisplay
| |-Kana
|
```