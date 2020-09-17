/**
 * @param {string} instructions
 * @return {boolean}
 */

// direction [N, E, S, W]
const dx = [0,1,0,-1];
const dy = [1,0,-1,0];

var isRobotBounded = function(instructions) {
    let pos = [0, 0];
    let dir = 0;
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === 'G') {
            pos[0] += dx[dir];
            pos[1] += dy[dir];
        } else if (instructions[i] === 'L') {
            dir += 3;
            dir %= 4;
        } else if (instructions[i] === 'R') {
            dir += 1;
            dir %= 4;
        }
    }

    return dir > 0 || (pos[0] === 0 && pos[1] === 0); 
};