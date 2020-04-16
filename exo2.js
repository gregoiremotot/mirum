
const args = process.argv.slice(2); //to remove "node" and "$fileName"

findUniqueNumber(args)

function findUniqueNumber(args) {
    //remove '[' and ']' and conver to array
    let array = args[0].substring(1, args[0].length - 1).split(",")

    let i = 0

    while (i < array.length) {
        let j = 0
        let found = false;
        while (j < array.length) {
            if (array[i] == array[j] && j != i) {
                found = true
            }
            j++
        }
        if (!found) {
            console.log("unique number : ", array[i])
            return;
        }
        i++
    }
    console.log("no unique number")
}
