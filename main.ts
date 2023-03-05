input.onButtonPressed(Button.A, function () {
    if (index == 1) {
        index = 8
        basic.showArrow(ArrowNames.North)
    }
    if (index == 2) {
        index = 1
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (index == 3) {
        index = 2
        basic.showArrow(ArrowNames.East)
    }
    if (index == 4) {
        index = 3
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (index == 5) {
        index = 4
        basic.showArrow(ArrowNames.South)
    }
    if (index == 6) {
        index = 5
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (index == 7) {
        index = 6
        basic.showArrow(ArrowNames.West)
    }
    if (index == 0) {
        index = 7
        basic.showArrow(ArrowNames.NorthWest)
    }
    if (index == 8) {
        index = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (index == 7) {
        index = 8
        basic.showArrow(ArrowNames.North)
    }
    if (index == 6) {
        index = 7
        basic.showArrow(ArrowNames.NorthWest)
    }
    if (index == 5) {
        index = 6
        basic.showArrow(ArrowNames.West)
    }
    if (index == 4) {
        index = 5
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (index == 3) {
        index = 4
        basic.showArrow(ArrowNames.South)
    }
    if (index == 2) {
        index = 3
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (index == 1) {
        index = 2
        basic.showArrow(ArrowNames.East)
    }
    if (index == 0) {
        index = 1
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (index == 8) {
        index = 0
    }
})
let index = 0
basic.showArrow(ArrowNames.North)
index = 0
