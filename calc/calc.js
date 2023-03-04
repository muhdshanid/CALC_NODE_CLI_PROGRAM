import readline from 'readline'


const newReadLine = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const calculate = question => {
   
    const pattern =  /^What is (-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)\?$/i
    const questionMatched = question.match(pattern)
    if(!questionMatched){
        throw new Error(`Invalid question!`)
    }
    const [_,numberOne,operator,numberTwo] = questionMatched

    let result;

    switch (operator.toLowerCase()) {
        case "plus":
            result = parseInt(numberOne, 10) + parseInt(numberTwo, 10);
            break;
        case 'minus':
                result = parseInt(numberOne, 10) - parseInt(numberTwo, 10);
            break;
         case 'multiplied by':
                    result = parseInt(numberOne, 10) * parseInt(numberTwo, 10);
            break;
        case 'divided by':
                result = parseInt(numberOne, 10) / parseInt(numberTwo, 10);
                break;
        default:
            throw new Error(`Invalid operator: ${operator}`)
    }
    const output = `${numberOne} ${operator} ${numberTwo} is ${result}`
    return output
}


newReadLine.question('Enter a mathematical question: ', (question) => {
    try {
      const result = calculate(question)
      console.log(result)
    } catch (error) {
      console.error(error.message)
    } finally {
      newReadLine.close()
    }
  })