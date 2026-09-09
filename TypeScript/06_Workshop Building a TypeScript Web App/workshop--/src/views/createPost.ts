import {HtmlRenderer} from "../utils/htmlRenderer.ts"

async function createPost(e: Event) {
    e.preventDefault();
    
    const formData = new formData(e.target as HtmlRenderer);

    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    const result = await services.postsService.create({
        userId: 1,
        title,
        body,
    });

    console.log(result);
}

export function createPostTemplate() {
    const template = `
    <form id="create-post-form">
    <div>
        <label for="title">Titele</label>
        <input type="text" name="title" id="title">
    </div>
    <div>
        <label for="body">Body</label>
        <input type="text" name="body" id="body">
    </div>

    <button type="submit">Create Post</button>
</form>`

HtmlRenderer.render(template)

const formEl = document.getElementById("create-post-form");
formEl?.addEventListener("submit",)
}