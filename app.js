import {html, render} from 'https://unpkg.com/lit-html?module';


const template = () => html`<h2>Hello there</h2>`


start()

function start() {
    const main = document.querySelector('main')

    const templateResult = template()
    render(templateResult, main)
}
