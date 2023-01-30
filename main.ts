function updatescore () {
    OLED.clear()
    OLED.writeStringNewLine("PLayer A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("PLayer B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
}
let Ties = 0
let Rounds = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
Rounds = 0
Ties = 0
OLED.writeStringNewLine("play")
basic.pause(2000)
