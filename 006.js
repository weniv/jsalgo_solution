// stack으로 풀기
function solution(data) {
    let result = 0
    let stack = []
    for (const i of data) {
        stack.push(i)
        if (JSON.stringify(stack.slice(-5)) === JSON.stringify([1, 2, 3, 4, 1])) {
            [...new Array(5)].forEach(v => {
                stack.pop()
            });
            result += 1
        }
    }
    return result
}