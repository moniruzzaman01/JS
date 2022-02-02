let series = [0, 1]
console.log(series)

function getFibonacciSeries(len) {
    for (var i = 2; i < len; i++) {
        series[i] = series[i - 1] + series[i - 2]
    }
    return series;
}

var newSeries=getFibonacciSeries(6)
console.log(newSeries)