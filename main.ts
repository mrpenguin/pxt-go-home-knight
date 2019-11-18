scene.onHitTile(SpriteKind.Player, 13, function (sprite) {
    resetPlayerMove()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerMoving != true) {
        playerMoving = true
        playerStartingX = playerSprite.x
        playerStartingY = playerSprite.y
        moveDirection = "left"
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerMoving != true) {
        playerMoving = true
        playerStartingX = playerSprite.x
        playerStartingY = playerSprite.y
        moveDirection = "down"
    }
})
function setPlayerEndMovePosition () {
    if (moveDirection == "down") {
        playerSprite.y = playerStartingY + playerSprite.height
    } else if (moveDirection == "up") {
        playerSprite.y = playerStartingY - playerSprite.height
    } else if (moveDirection == "left") {
        playerSprite.x = playerStartingX - playerSprite.width
    } else if (moveDirection == "right") {
        playerSprite.x = playerStartingX + playerSprite.width
    }
}
scene.onHitTile(SpriteKind.Player, 12, function (sprite) {
    resetPlayerMove()
})
scene.onHitTile(SpriteKind.Player, 0, function (sprite) {
    resetPlayerMove()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerMoving != true) {
        playerMoving = true
        playerStartingX = playerSprite.x
        playerStartingY = playerSprite.y
        moveDirection = "right"
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerMoving != true) {
        playerMoving = true
        playerStartingX = playerSprite.x
        playerStartingY = playerSprite.y
        moveDirection = "up"
    }
})
function resetPlayerMove () {
    if (isPlayerCloseToFinish()) {
        setPlayerEndMovePosition()
    } else {
        playerSprite.x = playerStartingX
        playerSprite.y = playerStartingY
    }
    playerMoving = false
}
let projectile: Sprite = null
let targetPosition = 0
let playerMoving = false
let playerSprite: Sprite = null
let moveDirection = ""
let playerStartingY = 0
let playerStartingX = 0
function isPlayerCloseToFinish():boolean {
    if(playerMoving){
        if(moveDirection == "up" || moveDirection == "down"){
            if(Math.abs(playerSprite.y - playerStartingY) > 2){
                return true;
            }
        } else {
            if (Math.abs(playerSprite.x - playerStartingX) > 2) {
                return true;
            }
        }
    }
    return false;
}
playerSprite = sprites.create(img`
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
playerSprite.x = 8 * 10 + playerSprite.width / 2
playerSprite.y = scene.screenHeight() - 4
scene.setTile(12, img`
    7 7 d d d d 7 7
    7 d b b b b d d
    d b b b d d c c
    d b b d b b b c
    d b d b b b b b
    d b d b b b b c
    d b b b b c c c
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
let fireballPattern = [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0]
let fireballCounter = 0
game.onUpdateInterval(100, function () {
    if (playerMoving) {
        if (moveDirection == "up") {
            targetPosition = playerStartingY - playerSprite.height
            playerSprite.y -= (playerSprite.y - targetPosition)/2
playerSprite.y -= 1
if (playerSprite.y <= targetPosition) {
                playerSprite.y = targetPosition
                playerMoving = false
            }
        }
        if (moveDirection == "down") {
            targetPosition = playerStartingY + playerSprite.height
            playerSprite.y += (targetPosition - playerSprite.y) / 2
            playerSprite.y += 1
            if (playerSprite.y >= targetPosition) {
                playerSprite.y = targetPosition
                playerMoving = false
            }
        }
        if (moveDirection == "left") {
            targetPosition = playerStartingX - playerSprite.width
            playerSprite.x -= (playerSprite.x - targetPosition) / 2
playerSprite.x -= 1
if (playerSprite.x <= targetPosition) {
                playerSprite.x = targetPosition
                playerMoving = false
            }
        }
        if (moveDirection == "right") {
            targetPosition = playerStartingX + playerSprite.width
            playerSprite.x += (targetPosition - playerSprite.x) / 2
            playerSprite.x += 1
            if (playerSprite.x >= targetPosition) {
                playerSprite.x = targetPosition
                playerMoving = false
            }
        }
    }
})
let fireballImage = img`
    . . . 2 2 2 . .
    . . 2 2 4 4 2 .
    . 2 2 4 5 1 4 2
    2 2 4 4 5 1 4 2
    2 2 4 4 5 1 4 2
    . 2 2 4 5 1 4 2
    . . 2 2 4 4 2 .
    . . . 2 2 2 . .
`
let fireballFlipImage = fireballImage.clone()
fireballFlipImage.flipX()
game.onUpdateInterval(1000, function () {
    if (fireballPattern[fireballCounter] === 1) {
        projectile = sprites.createProjectileFromSide(fireballImage, 10, 0)
        projectile.y = screen.height - 8 - 4
        projectile = sprites.createProjectileFromSide(fireballFlipImage, -10, 0)
        projectile.x = screen.width
        projectile.y = screen.height - 16 - 4
    }
    fireballCounter++
    if (fireballCounter >= fireballPattern.length) {
        fireballCounter = 0
    }
})
