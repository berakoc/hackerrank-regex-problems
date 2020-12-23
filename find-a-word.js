const sample = `1
foo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.
1
foo`

function processData(input) {
    const processedInput = input.split('\n')
    const numberOfSentences = Number(processedInput[0])
    const numberOfWords = Number(processedInput[numberOfSentences + 1])
    const sentences = processedInput.slice(1, numberOfSentences + 1).join('\n')
    const base = numberOfSentences + 2
    for (let i = base; i < base + numberOfWords; ++i) {
        const regex = RegExp(`\\b${processedInput[i]}\\b`, 'g')
        console.log(sentences.match(regex).length)
    }
}

processData(sample)