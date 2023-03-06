const ages = [23, 32, 17, 16, 34];

const someoneLessThan18 = (array) => 
    array.some((element) => element < 18);


console.log(someoneLessThan18(ages));