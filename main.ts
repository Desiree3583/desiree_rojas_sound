while (true) {
    console.log("Sound Level:" + input.soundLevel())
    if (input.soundLevel() > 30) {
        light.setAll(light.rgb(150, 0, 50))
    } else {
        light.clear()
    }
    
}
