controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerMoving != true) {
        playerMoving = true
    }
})
scene.onHitTile(SpriteKind.Player, 12, function (sprite) {
    playerMoving = false
})
let playerMoving = false
let mySprite = sprites.create(img`
. d . d b b b . 
. d . b f f c . 
. d . b c f c . 
. d . . c c . . 
d b c b b b b b 
. c . b b b c . 
. . . b c c c . 
. . . b . . c . 
`, SpriteKind.Player)
scene.setTileMap(img`
d d d d d d d d d d d d d d d d d d d d 
d d d d d 5 d d 5 d d 5 d d 5 d d d d d 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
c 7 7 7 7 7 c c 7 7 7 7 7 c c 7 7 7 7 c 
c 7 7 7 7 7 c c 7 7 7 7 7 c c 7 7 7 7 c 
b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b 
c 7 7 c 7 7 7 7 7 7 c 7 7 7 7 7 c 7 7 c 
b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b 
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c 
`, TileScale.Eight)
mySprite.x = 8 * 10 + 4
mySprite.y = scene.screenHeight() - 4
scene.setTile(12, img`
7 c c 6 6 6 7 7 
c 6 6 7 7 7 9 c 
c 7 7 7 6 6 7 6 
6 7 7 6 7 7 7 6 
7 6 7 7 7 7 7 7 
6 7 7 7 b b b 6 
6 7 b b 6 6 6 6 
c c c c c c c c 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 
7 7 7 7 6 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 6 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 6 
7 7 7 7 7 7 7 7 
`, false)
scene.setTile(11, img`
7 7 7 7 7 7 d 7 
7 5 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 d 7 7 7 7 7 5 
7 7 7 5 7 7 7 7 
7 7 7 7 7 7 7 7 
7 5 7 7 7 d 7 7 
7 7 7 7 7 7 7 7 
`, false)
scene.setTile(6, img`
6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 9 
6 6 6 6 6 6 6 6 
6 6 6 9 6 6 6 6 
6 6 6 6 6 6 6 6 
9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 
6 6 6 6 6 9 6 6 
`, false)
scene.setTile(5, img`
f f f f f f f f 
f f f f f f f f 
f f f f f f f f 
f f f f f f f f 
f f f f f f f f 
f f f f f f f f 
f f f f f f f f 
f f f f f f f f 
`, false)
scene.setTile(13, img`
b b b b b b b b 
d d d d d b d d 
b b b b b b b b 
d d b d d d d d 
b b b b b b b b 
d d d d d b d d 
b b b b b b b b 
d d b d d d d d 
`, true)
