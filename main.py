def helloworld(word: str):
    print(word)
a = 0
basic.show_number(1)

def on_forever():
    global a
    if sonar.ping(DigitalPin.P8, DigitalPin.P12, PingUnit.CENTIMETERS) < 30:
        basic.show_leds("""
            . # # # .
            # . . . #
            # . # . #
            # . . # #
            . # . . .
            """)
        cuteBot.motors(20, 40)
        basic.pause(1000)
        cuteBot.motors(40, 20)
        basic.pause(500)
        cuteBot.motors(30, 30)
    else:
        basic.show_number(1)
    if cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
        cuteBot.motors(100, 100)
    if cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
        a = 1
        cuteBot.motors(100, 40)
    if cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
        a = 2
        cuteBot.motors(40, 100)
    if cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
        if a == 1:
            cuteBot.motors(100, 0)
        else:
            cuteBot.motors(0, 100)
basic.forever(on_forever)
