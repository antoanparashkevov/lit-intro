import {html, render} from 'https://unpkg.com/lit-html?module';
import {classMap} from 'https://unpkg.com/lit-html/directives/class-map?module';
import {data} from './data.js'
import {formTemplate} from "./views/form.js";

const main = document.querySelector('main')


const greetingTemplate = (name, counter) => html`
    <h2>Hello there, ${name}. Clicked ${counter}</h2>
    <input type="text" ?disabled="${false}" .value="${'test'}">
`

const timerTemplate = (time) => html`${time.hours}:${time.minutes}:${time.seconds}`


const templateArticle = (article) =>
    html`
        <article class="${classMap({
            highlight: article.highlighted
        })}">
            <h1>${article.title}</h1>
            ${article.highlighted ? html`<h3>Article of the day</h3>` : null}
            <div class="content">
                <button @click='${() => alert('Clicked')}'>Click me</button>
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

window.data = data
window.update = update;

function start() {
    document.getElementById('reloadBtn').addEventListener('click', onClick)


    update()
    setInterval(updateTimer, 1000);
}

function update() {
    render(formTemplate(onSubmit),document.getElementById('forms'))
    render(data.map(templateArticle), main)//render works as replaceChild(), not as appendChild()

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

function onSubmit(event){
event.preventDefault()
    const formData = new FormData(event.target)//take whole form tag

    const article = {
        title: formData.get('title'),
        content: formData.get('content'),
        author: formData.get('author')
    }

    data.push(article)

    event.target.reset()//reset all input values from our form
    update()
}
