let l = 0
let sum2 = 0
let count = 0
let avg = 0
basic.forever(function () {
	
})
basic.forever(function () {
    l = input.lightLevel()
    sum2 += l
    count += 1
    avg = sum2 / count
    if (l > avg + 10) {
        basic.showString("Muy claro")
        basic.showIcon(IconNames.Heart)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.LoopingInBackground)
    } else if (l < avg - 10) {
        basic.showString("Muy oscuro")
        basic.showIcon(IconNames.Ghost)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(500)
})
