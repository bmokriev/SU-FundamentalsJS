function inventory(arr) {
    const inventory = [];

    for (let i = 0; i < arr.length; i++) {
        const heroObj = {};
        let currentArr = arr[i].split(' / ');
        heroObj.hero = currentArr[0];
        heroObj.level = +currentArr[1];
        heroObj.items = currentArr[2].split(', ');
        inventory.push(heroObj)
    }

    inventory.sort((a, b) => a.level - b.level)

    for (const el of inventory) {
        console.log(`Hero: ${el.hero}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items.sort().join(', ')}`);
    }

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])