import 'phaser';

// 文档 http://phaser.io/docs/2.6.2/Phaser.Game.html

const config = {
    type: Phaser.AUTO, // 自动决定使用的渲染器 1.Phaser.WEBGL, 2.Phaser.CANVAS 3.Phaser.HEADLESS (不会渲染)。
    parent: 'phaser-example', // 游戏 canvas 放到该DOM元素。 可以是ID (string)或者element本身。
    width: 800, // 宽度，如果是0到100的字符串，表示相对于父级容器的百分比
    height: 600, // 高度，如果是0到100的字符串，表示相对于父级容器的百分比
    scene: {
        preload: preload,
        create: create
    },
    antialias: true, // 抗锯齿，如果是像素游戏可以禁用
    transparent: true, // 是否透明背景
    // physicsConfig: object // 在创建时传递给Physics world的一个物理配置对象。
};

const game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
}

function create ()
{
    var logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}
