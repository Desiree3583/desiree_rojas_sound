while True:
    print("Sound Level:" + input.sound_level())
    if input.sound_level() > 30 :
        light.set_all(light.rgb(150, 0, 50))    
    else:
        light.clear()
while True:
    input.sound_level(pins.pin_by_cfg(0)) 