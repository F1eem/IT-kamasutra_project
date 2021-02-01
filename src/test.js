let arr1 = [
    {
        name: 'Vasia',
        count: 4,
        day: 'mon'
    },
    {
        name: 'Anton',
        count: 2,
        day: 'mon'
    },
    {
        name: 'Vasia',
        count: 3,
        day: 'tue'
    },
    {
        name: 'Anton',
        count: 1,
        day: 'tue'
    }
];
let arr2 = []
let transformData = (arr1) => {

    for (let x = 0; arr1.length / 2 > x; x++) {
        let el = arr1.filter(item => (arr1[x].name === item.name))
        arr2.push(el);
    }

    let arr3 = arr2.map(e => ({
            name: e[0].name,
            data: {
                mon : e[0].count,
                tue: e[1].count
            }
        })
    )
    return arr3;
};

console.log(transformData(arr1))