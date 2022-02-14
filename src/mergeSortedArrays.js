function mergedSortedArrays(t1,t2) {
    i = 0
    k = 0
    finished = false
    result = []

    while (!finished) {

        if(i < t1.length && k < t2.length) {
            if(t1[i] <= t2[k]){
                result.push(t1[i])
                i++
            }
            else {
                result.push(t2[k])
                k++
            }
        }
        else {
            if (i >= t1.length) {
                tabToConc = t2
                index = k
            }
            else {
                tabToConc = t1
                index = i
            }

            for(x=index;x<tabToConc.length;x++) {
                result.push(tabToConc[x])
            }

            finished = true
        }

        if(i >= t1.length && k >= t2.length) finished = true
    }

    return result
}
module.exports = mergedSortedArrays