input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PA += 1
    Rounds += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Ties += 1
    Rounds += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    PB += 1
    Rounds += 1
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
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
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Rounds = 0
    Ties = 0
    OLED.writeStringNewLine("play")
    basic.pause(2000)
    updatescore()
}
let PB = 0
let Ties = 0
let Rounds = 0
let PA = 0
reset()
