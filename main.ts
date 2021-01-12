while (true) {
    console.log("Sound Level:" + input.soundLevel())
    if (input.soundLevel < 10) {
        light.setAll(light.rgb(150, 0, 50))
    }
    
}
