import Phaser from "phaser";

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image(
            "ground",
            "https://labs.phaser.io/assets/skies/grass.png"
        );

        this.load.spritesheet(
            "ant",
            "https://labs.phaser.io/assets/sprites/dude.png",
            {
                frameWidth: 32,
                frameHeight: 48
            }
        );

        this.load.image(
            "food",
            "https://labs.phaser.io/assets/sprites/apple.png"
        );
    }

    create() {
        this.add.image(400, 300, "ground");

        this.food = this.physics.add.image(600, 300, "food");

        this.ant = this.physics.add.sprite(100, 300, "ant");

        this.ant.setCollideWorldBounds(true);

        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers("ant", {
                start: 0,
                end: 3
            }),
            frameRate: 8,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.overlap(
            this.ant,
            this.food,
            () => {
                this.food.setPosition(
                    Phaser.Math.Between(50, 750),
                    Phaser.Math.Between(50, 550)
                );
            },
            null,
            this
        );
    }

    update() {
        this.ant.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.ant.setVelocityX(-160);
            this.ant.anims.play("walk", true);
        } else if (this.cursors.right.isDown) {
            this.ant.setVelocityX(160);
            this.ant.anims.play("walk", true);
        }

        if (this.cursors.up.isDown) {
            this.ant.setVelocityY(-160);
            this.ant.anims.play("walk", true);
        } else if (this.cursors.down.isDown) {
            this.ant.setVelocityY(160);
            this.ant.anims.play("walk", true);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#222222",
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: GameScene
};

new Phaser.Game(config);
