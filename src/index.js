import './style.scss';
import mainPageContainer from './loader';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

document.body.appendChild(mainPageContainer());
library.add(faCheck);
dom.watch();