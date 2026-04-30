function printRow(M, N) {
    let row = '';
    for (let i = 0; i < N; i++) {
        row += M + ' ';
    }
    console.log(row.trim());
}
printRow(20, 10); 