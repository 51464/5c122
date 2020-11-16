basic.showIcon(IconNames.EigthNote)
let mode = 1
basic.forever(function () {
    if (mode == 0) {
        if (pins.analogReadPin(AnalogPin.P0) > 200) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
            music.playTone(988, music.beat(BeatFraction.Whole))
            music.playTone(131, music.beat(BeatFraction.Whole))
        }
    } else {
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P1),
        1023
        )
    }
})
