import {html } from 'https://unpkg.com/lit-html?module';


export const formTemplate = (onSubmit) => html`
<form @submit="${onSubmit}">
    <label>Title <input type="text" name="title"></label>
    <label>Author <input type="text" name="author"></label>
    <label>Content <textarea name="content"></textarea></label>
    <input type="submit" value="Submit">
</form>
`
