function skier(N) {
    let day1 = 10;
    let dayN = day1 * Math.pow(1.1, N - 1);
    let total = 0;
    for (let i = 0; i < N; i++) {
        total += day1 * Math.pow(1.1, i);
    }
    return { dayN, total };
}
console.log(skier(5)); // dayN ~14.64, total ~61.05