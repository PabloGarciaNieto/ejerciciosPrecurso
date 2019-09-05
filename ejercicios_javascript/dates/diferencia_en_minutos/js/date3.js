function minutos(firstDate, secondDate) {
    const mins1 = firstDate.getTime();
    const mins2 = secondDate.getTime();

const mins3 = mins1 - mins2;

    return mins3 / 1000 / 60;
}

const firstDate = new Date(2019, 8, 23);
const secondDate = new Date(1983, 3, 17);
console.log(minutos(firstDate, secondDate));