import {html, render} from 'https://unpkg.com/lit-html?module';
import {data} from './data.js'

const template = (name) => html`<h2>Hello there, ${name}</h2>`

const templateArticle = (article)=>
    html`<article>
    <h1>${article.title}</h1>
    <div class="content">
        <p>${article.content}
        </p>
    </div>
    <footer>Author: ${article.author}</footer>
</article>
`



start()

function start() {
    const main = document.querySelector('main')

    // const templateResult = template('Peter')
    // render(templateResult, main)

    render(data.map(templateArticle), main)//render works as replaceChild(), not as appendChild()
}
