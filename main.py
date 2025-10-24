sum2 = 0
count = 0

def on_forever():
    global sum2, count
    l = input.light_level()
    sum2 += l
    count += 1
    avg = sum2 / count
    if l > avg + 10:
        basic.show_string("Muy claro")
    elif l < avg - 10:
        basic.show_string("Muy oscuro")
    else:
        basic.show_icon(IconNames.HAPPY)
    basic.pause(500)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
