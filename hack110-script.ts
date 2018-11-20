// import {
//     Sprite,
//     Application,
//     DRAW_MODES,
//     DisplayObject,
//     Rectangle
// } from "pixi.js";

// import {
//     random,
// } from "introcs";


// class Platforms {
//     sprite: Sprite; 
//     direction: number = 1;
//     vy: number = 1; 
//     constructor(sprite: Sprite) {
//         this.sprite = sprite;        
//     }
// }

// class Player {
//     pic: Sprite;
//     direction: number = 1;
//     vy: number = 5;
//     acc: number = 0.2;
//     yVel: number = 0;
// }

// let init = () => {
//     const app: Application = new Application(562.5, 600);
//     document.body.appendChild(app.view);
//     let background: Sprite = Sprite.fromImage("./hi.png");
//     background.scale.x = 1.25;
//     background.scale.y = 1.25;
//     app.stage.addChild(background);

//     let isAlive = (): boolean => {
//         if (kris.pic.y >= 600) {
//             return false;                                
//         } else {
//             return true;
//         }
//     };
    
//     let platGenerate = (): Platforms[] => {
//         let platforms: Platforms[] = [];
//         for (let i: number = 0; i < 4; i++) {
//             let sprite: Sprite = Sprite.fromImage("./platform.jpg");
//             sprite.scale.x = 0.75;
//             sprite.scale.y = 0.75;
//             sprite.x = 45.3 + 129.3 * i;
//             sprite.y = random(350, 100);
//             if (Math.random() < 0.67) {
//                 let platform: Platforms = new Platforms(sprite);
//                 platforms[i] = platform;
//                 app.stage.addChild(platform.sprite);
//             }
//             // if (platforms.length === 0) {
//             //     let platform: Platforms = new Platforms(sprite);
//             //     platforms[(Math.floor(Math.random() * 4))] = platform;
//             //     app.stage.addChild(platform.sprite);
//             // }
//             // let platform: Platforms = new Platforms(sprite);
//             // platforms.push(platform);
//             // app.stage.addChild(platform.sprite);
//         }
//         return platforms;
//     };

//     let kris = new Player();
//     kris.pic = Sprite.fromImage("./kris.png");
//     kris.pic.scale.x = 0.15;
//     kris.pic.scale.y = 0.15;
//     kris.pic.x = 250;
//     kris.pic.y = 550;
//     app.stage.addChild(kris.pic);
//     const speed: number = 3;

//     let L: number = 0;
//     let R: number = 0;

//     window.addEventListener("keydown", (e: KeyboardEvent): void  => {
//         console.log("key: " + e.keyCode);
//         const LEFT: number = 37;
//         const RIGHT: number = 39;
//         if (e.keyCode === LEFT) {
//             L = -1;
//         } else if (e.keyCode === RIGHT) {
//             R = 1;
//         }
//     }, false);

//     window.addEventListener("keyup", (e: KeyboardEvent): void  => {
//         console.log("key: " + e.keyCode);
//         const LEFT: number = 37;
//         const RIGHT: number = 39;
//         if (e.keyCode === LEFT) {
//             L = 0;
//         } else if (e.keyCode === RIGHT) {
//             R = 0;
//         }
//     }, false);
    
//     let counter = 0;
//     let newPlatforms = platGenerate();
//     let allPlats: Platforms[][] = [newPlatforms];
//     let initialPos = kris.pic.y;
    
//     app.ticker.add((delta: number): void => {
//         counter ++;
//         // for (let i = 0; i < newPlatforms.length; i++) {
//         //     newPlatforms[i].sprite.y += random(1, 4);
//         //     console.log("moving platform");
//         // }
//         // allPlats[allPlats.length] = newPlatforms;
//         // let finished = true;

//         // for (let i = 0; i < allPlats.length; i++) {
//         //     for (let j = 0; j < allPlats[i].length; j++) {
//         //         if (allPlats[i][j] !== null) {
//         //            allPlats[i][j].sprite.y += 2.5;
//         //         }
//         //        // allPlats[i][j].sprite.y += 2.5;
//         //     }
//         // }
        
//         for (let i = 0; i < allPlats.length; i++) {
//             // for (let j = 0; j < allPlats[i].length; j++) {
//             //     if (allPlats[i][j] !== null) {
//             //        allPlats[i][j].sprite.y += 2.5;
//             //     }
//             //    // allPlats[i][j].sprite.y += 2.5;
//             // }
//             allPlats[i].forEach(element => {
//                 element.sprite.y += 2.5;
//             });
//         }
//         let finished = true;

//         // while (!finished) {
//         // for (let i = 0; i < newPlatforms.length; i++) {
//         //     if (newPlatforms[i].sprite.y < 600) {
//         //         finished = false;
//         //         break;
//         //     } 
//         // }
//         // if (finished === true) {
//         //     
//         // }      

//         if (counter % 100 === 0) {
//             newPlatforms = platGenerate();
//             allPlats[allPlats.length] = newPlatforms;
//         } 
//         if (kris.yVel > 8) {
//             kris.yVel = 8;
//         } else {
//             kris.yVel = kris.yVel + kris.acc;
//         }
//         kris.pic.y += kris.yVel;
//         // kris.pic.y += kris.vy * kris.direction;    
//         if (kris.pic.y >= initialPos) {
//             // kris.direction = -1;
//             kris.yVel = -8;
//         } else if (kris.pic.y <= initialPos - 250) {
//             kris.direction = 1;
//         }
//         kris.pic.x += (L + R) * speed;
//         let canCollide = false;
//         if (kris.direction > 0) {
//             canCollide = true;
//             for (let i = 0; i < allPlats.length; i++) {
//                 allPlats[i].forEach(function (s: Platforms) {
//                     if (isColliding(kris.pic, s.sprite)) {
//                         // kris.direction = -1;
//                         kris.yVel = -6;
//                     }
//                 });
//             }
//         } else {
//             canCollide = false;
//         }

//     });

    

//     let isColliding = (a: DisplayObject, b: DisplayObject): boolean => {
//         let ab: Rectangle = a.getBounds();
//         let bb: Rectangle = b.getBounds();
//         return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
//     }; 


// };

// init();