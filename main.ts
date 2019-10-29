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
scene.setTile(0, img`
7 7 7 7 7 7 7 7 
7 7 7 7 6 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 6 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 6 
7 7 7 7 7 7 7 7 
`, false)
scene.setTile(0, img`
7 9 9 6 6 6 7 7 
9 6 6 7 7 7 9 9 
9 7 7 7 6 6 7 6 
6 7 7 6 7 7 7 6 
7 6 7 7 7 7 7 7 
6 7 7 7 b b b 6 
6 7 b b 6 6 6 6 
c 6 6 6 6 6 6 c 
`, false)
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
c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c 
`, TileScale.Eight)
mySprite.x = 8 * 10
mySprite.y = scene.screenHeight() - 4
