/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    // input = arr of integers representing asteroids
    // math.abs(asteroid) represents its size
    // asteroid > 0, going right
    // asteroid < 0 going left
    // asteroids[i] != 0

    // output arr of leftover asteroids

    let res = [];

    for (let asteroid of asteroids) {
        let destroyed = false;

        // Collide while there's a right-moving asteroid on top and current is left-moving
        while (res.length > 0 && res[res.length - 1] > 0 && asteroid < 0) {
            let top = res[res.length - 1];

            if (top < Math.abs(asteroid)) {
                // Top asteroid explodes, keep checking against the next one
                res.pop();
            } else if (top === Math.abs(asteroid)) {
                // Both asteroids explode
                res.pop();
                destroyed = true;
                break;
            } else {
                // Current negative asteroid explodes
                destroyed = true;
                break;
            }
        }

        // If the negative asteroid survived all collisions, add it to the result
        if (!destroyed) {
            res.push(asteroid);
        }
    }

    return res;
};