function harvest(N) {
    let area = 100;
    let yieldPerHa = 20;
    let totalHarvest = 0;
    for (let year = 1; year <= N; year++) {
        totalHarvest += area * yieldPerHa;
        area *= 1.05;
        yieldPerHa *= 1.02;
    }
    return {
        yieldPerHaAfterN: yieldPerHa / 1.02, // чисто для N-го года
        areaAfterN: area / 1.05,
        totalHarvestForNYears: totalHarvest
    };
}
console.log(harvest(3));