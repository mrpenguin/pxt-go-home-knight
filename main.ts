let mySprite = sprites.create(img`
. d . b d d b . 
. d . b f f c . 
. d . b c f c . 
. d . . c c . . 
d b c d b b b b 
. c . b b b c . 
. . . b c c c . 
. . . c . . c . 
`, SpriteKind.Player)
scene.setTile(0, img`
7 7 7 7 7 7 6 7 
7 7 7 7 7 7 7 7 
7 6 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 6 7 7 7 7 
7 7 7 7 7 7 7 7 
`, false)
scene.setTile(0, img`
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 6 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 
7 7 7 7 7 7 7 7 
7 6 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
`, false)
