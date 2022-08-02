import {html, render} from 'https://unpkg.com/lit-html?module';
import {data} from './data.js'

const greetingTemplate = (name, counter) => html`
    <h2>Hello there, ${name}. Clicked ${counter}</h2>
    <input type="text" ?disabled="${false}" .value="${'test'}">
`
const timerTemplate = (time) => html`${time.hours}:${time.minutes}:${time.seconds}`

const templateArticle = (article) =>
    html`
        <article>
            <h1>${article.title}</h1>
            <div class="content">
                <p>${article.content}
                </p>
            </div>
            ${footerTemplate(article.content)}
        </article>
    `
const footerTemplate = (author) => html`
    <footer>Author: ${author}</footer>
`

start()

function start() {
    document.getElementById('reloadBtn').addEventListener('click', onClick)
    const main = document.querySelector('main')


    render(data.map(templateArticle), main)//render works as replaceChild(), not as appendChild()
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    let now = new Date();

    const time = {
        hours: now.getHours(),
        minutes: ('0' + now.getMinutes()).slice(-2),
        seconds: ('0' + now.getSeconds()).slice(-2)
    }

    render(timerTemplate(time), document.getElementById('timer'))
}

let counter = 0;

function onClick() {
    const header = document.querySelector('header')
    const templateResult = greetingTemplate('Peter', ++counter)
    render(templateResult, header)
}
