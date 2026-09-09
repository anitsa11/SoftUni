import { services } from "../services/serviceInstances.ts";
import type { User} from "../types/user.ts";
import { HtmlRenderer } from "../utils/htmlRenderer.ts";

function singleUserTemplate(user: User) {
    return `
    <li>
        <h3>${user.name}</h3>
        <p>${user.company.name}</p>
    </li>`;
}

export async function userTemplate() {
    const res = await services.userService.getAll();
    
    const template = `
    <h1>Posts</h1>
    <ul>
        ${res.map((user) => singleUserTemplate(user)).join("")}
    </ul>`;

HtmlRenderer.render(template);
}