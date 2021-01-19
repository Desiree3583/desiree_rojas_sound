while (true) {
    console.log("Sound Level:" + input.soundLevel())
    if (input.soundLevel() > 30) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
    }
    
    if (input.lightLevel() > 70) {
        music.magicWand.playUntilDone()
    }
    
}
