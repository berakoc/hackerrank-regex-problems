(config = () => {
    if (!String.prototype.matchAll) {
        String.prototype.matchAll = function (regex) {
            let match = regex.exec(this)
            const matches = []
            while (match != null) {
                matches.push(match)
                match = regex.exec(this)
            }
            return matches
        }
    }
    console.log('Polyfill has been configured.')
})()

module.exports = config

# A tiny and concise polyfill for String.protoype.matchAll
I wrote this polyfill for solving Regex tasks swiftly. Especially in websites like [`HackerRank`](https://www.hackerrank.com/domains/regex) where npm is not supported.
I hope it helps others 🤞