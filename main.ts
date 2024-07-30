function helloworld(word: string) {
    console.log(word)
}

let a = 0
basic.showNumber(1)
basic.forever(function on_forever() {
    
    if (sonar.ping(DigitalPin.P8, DigitalPin.P12, PingUnit.Centimeters) < 30) {
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
        cuteBot.motors(30, 30)
    } else {
        basic.showNumber(1)
    }
    
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(100, 100)
    }
    
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        a = 1
        cuteBot.motors(100, 40)
    }
    
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        a = 2
        cuteBot.motors(40, 100)
    }
    
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        if (a == 1) {
            cuteBot.motors(100, 0)
        } else {
            cuteBot.motors(0, 100)
        }
        
    }
    
})
