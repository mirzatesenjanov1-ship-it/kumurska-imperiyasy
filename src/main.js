import Phaser from 'phaser'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  scene: {
    create: create
  }
}

function create() {
  this.add.text(200, 250, 'Кумурска Империясы 🚀', {
    fontSize: '24px',
    fill: '#ffffff'
  })
}

const game = new Phaser.Game(config)
