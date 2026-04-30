function Distance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}
console.log(Distance(0, 0, 3, 4)); // 5