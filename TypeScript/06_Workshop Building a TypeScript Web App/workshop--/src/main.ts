import './style.css'
import { Router } from './utils/router.ts';
import { postsTemplate} from './views/postsViews.ts'


const router = new Router ({
  "/posts": postsTemplate,
  "/posts/create": () => {},
  "/users": () => {},
});