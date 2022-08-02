import {html, render} from 'https://unpkg.com/lit-html?module';
import {data} from './data.js'

const template = (name,counter) => html`<h2>Hello there, ${name}. Clicked ${counter}</h2>`

const templateArticle = (article) =>
    html`
        <article>
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
    document.getElementById('reloadBtn').addEventListener('click', onClick)
    const main = document.querySelector('main')


    render(data.map(templateArticle), main)//render works as replaceChild(), not as appendChild()
}
let counter = 0;
function onClick(){
    const header = document.querySelector('header')
    const templateResult = template('Peter',++counter)
    render(templateResult, header)



}
