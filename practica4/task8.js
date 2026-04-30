function strangeHusband(N) {
    let position = 1;   // км от дома (сначала на работе)
    let totalPath = 1;  // уже прошёл 1 км до работы
    let direction = -1; // сначала идёт к дому (-1), потом к работе (+1)
    let step = 2;       // знаменатель: 1/2, 1/3, 1/4...
    for (let i = 2; i <= N; i++) {
        let delta = 1 / step; // 1/2, 1/3, 1/4...
        position += direction * delta;
        totalPath += delta;
        direction = -direction;
        step++;
    }
    return { distanceFromHome: position, totalPath };
}
console.log(strangeHusband(4));