import { services } from "../services/serviceInstances.ts";
import type { Post} from "../types/post.ts";
import { HtmlRenderer } from "../utils/htmlRenderer.ts";
function singlePostTemplate(post: Post) {
    return `
    <li>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
</li>
    `
}
export async function createPostTemplate() {
    const res = await services.postsService.getll();
    const template = `
    <h1>Posts</h1>
<ul>
    ${res.map((post) => singlePostTemplate(post)).join("")}
</ul>`;

HtmlRenderer.render(template);
}