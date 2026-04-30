function averageWeight(numItems) {
    let totalWeight = 0;
    for (let i = 1; i <= numItems; i++) {
        let weight = parseFloat(prompt(`Введите массу предмета ${i}:`));
        totalWeight += weight;
    }
    let avg = totalWeight / numItems;
    alert(`Средняя масса: ${avg.toFixed(2)}`);
    return avg;
}
