import Icon from "@mdi/react";
import {mdiGithub as IconGitHub, mdiLinkedin as IconLinkedIn} from '@mdi/js';

function NavItem({id, label}) {
    return (
        <li><a href={`#${id}`}>{label}</a></li>
    );
}

function SocialLink({title, url, icon}) {
    return (
        <li>
            <a href={url} title={title} target="_blank" rel="noopener">
                <Icon path={icon} size={1} />
            </a>
        </li>
    );
}

export default function Navigation() {
    return (
        <nav className="flex space-x-8">
            {/* TODO: scroll to corresponding section if it is currently in the home page */}
            {/* TODO: go to home page and the section if it is currently in another page */}
            <ul className="flex items-center space-x-12">
                <NavItem id="about" label="About"/>
                <NavItem id="portfolio" label="Work"/>
                <NavItem id="contact" label="Contact"/>
            </ul>

            {/* External Link */}
            <ul className="flex items-center space-x-4">
                <SocialLink url="https://github.com/sintatfan" title="My GitHub Profile" icon={IconGitHub}/>
                <SocialLink url="https://www.linkedin.com/in/sintatfan" title="My LinkedIn Profile"
                            icon={IconLinkedIn}/>
            </ul>
        </nav>
    );
}