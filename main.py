while True:
    print("Sound Level:" + input.sound_level())
    if input.sound_level() > 30 :
        light.show_animation(light.rainbowAnimation, 500)  
    else:
        light.clear()
    if input.light_level() > 70:
        music.magic_wand.play_until_done()
