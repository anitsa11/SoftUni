import './style.css'
import { Router } from './utils/router.ts';
import { postsTemplate} from './views/postsViews.ts'


const router = new Router ({
  "/posts": postsTemplate,
  "/posts/create": () => {},
  "/users": () => {},
});

function setupLinks() {
  const allLinks = document.querySelectorAll("nav a");

  allLinks.forEach(link => link.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate((link as HTMLAnchorElement).pathname);
  }))
}

setupLinks();