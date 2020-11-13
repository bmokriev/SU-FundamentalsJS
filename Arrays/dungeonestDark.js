function monsterGame(input) {
    let arr = input.split('|')
    let splited = []
    let hp = 100;
    let coins = 0;
    let bestRoom = 0;
    let isAlive = true;

    for (let group of arr) {
        splited.push(group.split(' '))
    }

    for (const step of splited) {
        let action = step[0];
        let num = +step[1];
        bestRoom++;
        
        if (action == 'potion') {
            hp += num
            if (hp>100) {
                hp = 100;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${hp} hp.`);
        }else if (action == 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
        }else{
            hp -= num
            if (hp > 0) {
                console.log(`You slayed ${action}.`);
            }else{
                console.log(`You died! Killed by ${action}.`);
                isAlive = false;
                break;
            }
        }

    }
    
    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${hp}`);
    }else{
       console.log(`Best room: ${bestRoom}`); 
    }
    
}


monsterGame('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')