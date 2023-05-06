'a10b9r1ce33uab8wc918v2cv11v9'.match(/[0-9]/g)


'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)

//10이었을 때 인식 못함
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)


'a10b9r10ce33uab8wc918v2cv11v9'.match(/([rev])([0-9]|10)/g)

'a10b9r10ce33uab8wc918v2cv11v9'.match(/([rev])(10|[0-9])/g)

function solution(data){
    result = 0
    data = data.match(/([rev])(10|[0-9])/g)
    for (i of data){
        result += parseInt(i.slice(1))
    }
    result = result.toString()
    return `${result[0]}월 ${result[1]}일`
}

solution('a10b9r1ce33uab8wc918v2cv11v9')