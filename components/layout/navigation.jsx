import Icon from "@mdi/react";
import {mdiGithub as IconGitHub, mdiLinkedin as IconLinkedIn, mdiMenu as IconMenu, mdiClose as IconClose} from '@mdi/js';
import {useState} from "react";
import Link from "next/link";

function NavItem({id, label}) {
    return (
        <li>
            <Link href={`/#${id}`} className="block px-4 py-3 sm:p-0 text-xl sm:text-md">
                {label}
            </Link>
        </li>
    );
}

function SocialLink({title, url, icon}) {
    return (
        <li>
            <a href={url} title={title} target="_blank" rel="noreferrer">
                <Icon path={icon} size={1} />
            </a>
        </li>
    );
}

function MainMenuWrapper({value, children, onClose}) {
    return (
        <>
            <div className={`${value ? 'block' : 'opacity-0 invisible scale-0'} transition-all duration-300 origin-top-right absolute z-10 -mt-3 top-full right-3 w-64 bg-body/90 rounded-xl shadow-xl backdrop-blur sm:w-auto sm:block sm:visible sm:static sm:mt-0 sm:bg-transparent sm:rounded-xl sm:shadow-none sm:backdrop-blur-none sm:opacity-100 sm:transform-none`}>
                {children}
            </div>
            <div className={`${value ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300 fixed top-0 left-0 w-screen h-screen bg-body/80 z-[-1] sm:hidden`} onClick={onClose}></div>
        </>
    );
}

function MainMenu() {
    return (
        <nav className="flex flex-col sm:flex-row sm:space-x-8">
            {/* TODO: scroll to corresponding section if it is currently in the home page */}
            {/* TODO: go to home page and the section if it is currently in another page */}
            <ul className="sm:flex items-center sm:space-x-12">
                <NavItem id="about" label="About"/>
                <NavItem id="portfolio" label="Work"/>
                <NavItem id="contact" label="Contact"/>
            </ul>

            {/* External Link */}
            <ul className="flex items-center space-x-4 p-4 sm:p-0">
                <SocialLink url="https://github.com/sintatfan" title="My GitHub Profile" icon={IconGitHub}/>
                <SocialLink url="https://www.linkedin.com/in/sintatfan" title="My LinkedIn Profile"
                            icon={IconLinkedIn}/>
            </ul>
        </nav>
    );
}

function MenuToggleBtn({value, onChange}) {
    return (
        <button type="button" onClick={() => onChange(!value)} className="sm:hidden"
                aria-label={value ? 'Close navigation menu' : 'Open navigation menu'}>
            <Icon path={value ? IconClose : IconMenu} size={1.5} />
        </button>
    );
}

export default function Navigation() {
    const [isOpened, setOpen] = useState(false);

    return (
        <>
            <MenuToggleBtn value={isOpened} onChange={setOpen} />
            <MainMenuWrapper value={isOpened} onClose={() => setOpen(false)}>
                <MainMenu />
            </MainMenuWrapper>
        </>
    );
}