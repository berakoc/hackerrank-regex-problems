const example = `11
<div id="mp-other" style="padding-top:4px; padding-bottom:2px;">
<h2><span class="mw-headline" id="Other_areas_of_Wikipedia">Other areas of Wikipedia</span></h2>
<ul>
<li><b><a href="/wiki/Wikipedia:Community_portal" title="Wikipedia:Community portal">Community portal</a></b>  Bulletin board, projects, resources and activities covering a wide range of Wikipedia areas.</li>
<li><b><a href="/wiki/Wikipedia:Help_desk" title="Wikipedia:Help desk">Help desk</a></b>  Ask questions about using Wikipedia.</li>
<li><b><a href="/wiki/Wikipedia:Local_Embassy" title="Wikipedia:Local Embassy">Local embassy</a></b>  For Wikipedia-related communication in languages other than English.</li>
<li><b><a href="/wiki/Wikipedia:Reference_desk" title="Wikipedia:Reference desk">Reference desk</a></b>  Serving as virtual librarians, Wikipedia volunteers tackle your questions on a wide range of subjects.</li>
<li><b><a href="/wiki/Wikipedia:News" title="Wikipedia:News">Site news</a></b>  Announcements, updates, articles and press releases on Wikipedia and the Wikimedia Foundation.</li>
<li><b><a href="/wiki/Wikipedia:Village_pump" title="Wikipedia:Village pump">Village pump</a></b>  For discussions about Wikipedia itself, including areas for technical issues and policies.</li>
</ul>
</div>`

function processData(input) {
    const tagSet = new Set()
    const dataChunk = input.split('\n')
    for (let i = 1; i <= Number(dataChunk[0]); ++i) {
        const tagRegex = RegExp('<([a-z0-9]+)', 'g')
        const tags = Array.from(dataChunk[i].matchAll(tagRegex))
        for (let j = 0; j < tags.length; ++j) {
            const exactTag = tags[j][1]
            tagSet.add(exactTag)
        }
    }
    console.log(Array.from(tagSet).sort().join(';'))
}

processData(example)