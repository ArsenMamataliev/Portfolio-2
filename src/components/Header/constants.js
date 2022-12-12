import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';    

export const navLinksItems = [
    {title: 'Main', icon: <FontAwesomeIcon icon={faHome}/>, link: '/'},
    {title: 'Projects', icon: <FontAwesomeIcon icon={faFolderOpen}/>, link: '/projects/list'},
    ];

         