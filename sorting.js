const a = [3, 2, 9.7, 4, 5]


// bubble sort
const bubble_sort = (arr) => {
    let s = ''

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }

        }
    }
    return arr
}


// selection sort
const selection_sort = (arr) => {
    const n = arr.length

    for (let i = 0; i < n; i++) {

        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {

            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = arr[i];
        }


    }
    return arr
}

const insertion_sort = (arr) => {

    let selected_ele = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < arr[selected_ele]) {
            selected_ele = i
        }
        if (selected_ele !== i) {
            let temp = arr[i]
            arr[i] = arr[selected_ele]
            arr[selected_ele] = temp
        }

    }

}

console.log(insertion_sort(a))