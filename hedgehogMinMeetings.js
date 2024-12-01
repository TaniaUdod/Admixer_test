function hedgehogMinMeetings(start, goal) {
    const [red, green, blue] = start;

    // Перевірка, чи всі їжачки вже одного кольору
    if ((red === 0 && green === 0) || (green === 0 && blue === 0) || (red === 0 && blue === 0)) {
        if ((goal === 0 && (green > 0 || blue > 0)) ||
            (goal === 1 && (red > 0 || blue > 0)) ||
            (goal === 2 && (red > 0 || green > 0))) {
            return -1;
        }

        return 0;
    }

    // Підрахунок мінімальної кількості зустрічей залежно від кольору
    switch (goal) {
        case 0:
            return Math.min(green, blue);
        case 1:
            return Math.min(red, blue);
        case 2:
            return Math.min(red, green);
        default:
            return -1;
    }
}

// Перевірка
console.log(hedgehogMinMeetings([8, 1, 9], 0)); // 1
console.log(hedgehogMinMeetings([8, 1, 9], 1)); // 8
console.log(hedgehogMinMeetings([8, 1, 9], 2)); // 1

