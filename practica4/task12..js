function averageGrade(grades) {
    if (grades.length !== 10) return null;
    let sum = 0;
    for (let grade of grades) {
        sum += grade;
    }
    return sum / 10;
}
console.log(averageGrade([5,4,5,3,4,5,5,4,4,5])); // 4.4