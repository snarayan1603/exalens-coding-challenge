function apartmentHunting(blocks, reqs) {
    // Write your code here.

    if (!Array.isArray(blocks) || !Array.isArray(reqs))
        return "Invalid inputs"

    let bestMatch = -1, index = -1;

    for (let i = 0; i < blocks.length; i++) {

        const matchCount = findMatch(blocks[i], reqs)

        if (matchCount === reqs.length)
            return i

        else if (matchCount > bestMatch) {
            bestMatch = matchCount
            index = i
        }
    }


    return index
}


function findMatch(block, reqs) {

    let totalMatch = 0;

    for (let i = 0; i < reqs.length; i++)
        if (block[reqs[i]])
            totalMatch++;

    return totalMatch;
}



let blocks = [
    {
        "gym": false,
        "school": true,
        "store": true,
    },
    {
        "gym": true,
        "school": false,
        "store": false,
    },
    {
        "gym": true,
        "school": true,
        "store": true,
    },
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
        "gym": false,
        "school": true,
        "store": true,
    }
]
let reqs = ["gym", "school", "store"]


console.log(apartmentHunting(blocks, reqs))

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
