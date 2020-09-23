/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let netGas = gas.map((v, i) => v - cost[i]);

    const canFinishJourney = (i) => {
        let gasInTank = 0;
        for (let j = 0; j < gas.length; j++) {
            gasInTank += netGas[(i + j) % gas.length];
            if (gasInTank < 0) return false;
        }
        return true;
    }

    for (let i = 0; i < gas.length; i++) {
        if (netGas[i] < 0) continue;
        if (canFinishJourney(i)) {
            return i;
        }
    }
    return -1;
};