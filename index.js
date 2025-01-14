const inventory = newInventory()
move(inventory).to(0, 0)

// // const character = newIm`age('assets/green-character/static.gif')
// move(character).to(100, 250)


const character = newImage('assets/green-character/static.gif')
function handleDirections(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}
move(character).withArrowKeys(100, 250, handleDirections)
character.style.zIndex = "1";

//Added a character zIndex of 1 so it will be in front of the items.



// let direction = null;

// //keydown is whenever the user pushes a key.
// document.addEventListener('keydown', function(e){
//     //This line skips any repeat events.
//     if (e.repeat) return;

//     if(e.key ==='ArrowUp')
//     {direction = 'north'}
//     if (e.key === 'ArrowDown')
//     {direction = 'south'}
//     if(e.key==='ArrowLeft')
//     {direction = 'west'}
//     if(e.key==='ArrowRight')
//     {direction='east'}

// })
// //Added so the character doesn't move if any key is pushed because the direction becomes null.
// document.addEventListener('keyup', function(e){
//     direction = null
// })


// let x = 100;
// let y = 250;
// function moveCharacter(){
    

//     if(direction === 'west'){
//         x = x - 1
//     }
//     if(direction === 'north'){
//         y = y + 1
//     }
//     if(direction === 'east'){
//         x = x + 1
//     }
//     if(direction === 'south'){
//         y = y - 1
//     }
//     character.style.left = x + 'px'
//     character.style.bottom = y + 'px'

// }

// setInterval(moveCharacter, 1)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)