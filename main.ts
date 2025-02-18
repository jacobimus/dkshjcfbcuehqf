basic.forever(function () {
    if (input.compassHeading() > 225 && input.compassHeading() <= 270) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    } else if (input.compassHeading() > 271 && input.compassHeading() <= 315) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.compassHeading() > 135 && input.compassHeading() <= 179) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
        music.play(music.stringPlayable("C D E F F E D C ", 120), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    } else if (input.compassHeading() > 180 && input.compassHeading() <= 225) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.compassHeading() > 46 && input.compassHeading() <= 90) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    } else if (input.compassHeading() > 91 && input.compassHeading() <= 179) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.compassHeading() > 0 && input.compassHeading() <= 45) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        music.play(music.stringPlayable("C5 B A G G A B C5 ", 120), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    } else if (input.compassHeading() > 315 && input.compassHeading() <= 360) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        music.play(music.stringPlayable("C5 B A G G A B C5 ", 120), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
    }
})
