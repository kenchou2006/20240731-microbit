function helloworld (word: string) {
    console.log(word)
}
let a = 0
basic.showNumber(1)
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Centimeters
    ) < 30) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # . #
            # . . # #
            . # . . .
            `)
        cuteBot.motors(20, 40)
        basic.pause(1000)
        cuteBot.motors(40, 20)
        basic.pause(500)
        while (cuteBot.trackSide(cuteBot.MbPins.Left, cuteBot.MbEvents.LoseLine) && cuteBot.trackSide(cuteBot.MbPins.Right, cuteBot.MbEvents.LoseLine)) {
            cuteBot.motors(30, 30)
        }
    } else {
        basic.showNumber(1)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(70, 70)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        a = 1
        cuteBot.motors(70, 20)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        a = 2
        cuteBot.motors(20, 70)
    }
})
