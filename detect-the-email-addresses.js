const sample = `14
Letters to the Editor (Your complete mailing address is required):
letters@thehindu.co.in
Readers' Editor:
readerseditor@thehindu.co.in
Advertisements Queries (Print):
inetads@thehindu.co.in
Advertisements Queries (Online):
digital@thehindu.co.in
Advertisements Queries (International):
international@thehindu.co.in
Subscription Queries:
subs@thehindu.co.in
Comments on the website:
web.thehindu@thehindu.co.in`

function processData(input) {
    const processedInput = input.split('\n').slice(1).join('\n')
    const emailRegex = RegExp('\\b\\S+@[a-z.]+[a-z]', 'g')
    const emailMatches = Array.from(processedInput.matchAll(emailRegex)).sort()
    let emails = []
    for (let i = 0; i < emailMatches.length; ++i) {
        emails.push(emailMatches[i][0])
    }
    emails = Array.from(new Set(emails))
    console.log(emails.join(';'))
} 

processData(sample)