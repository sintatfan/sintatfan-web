import {SectionTitle} from "../title";
import {Card} from "../card";
import Icon from "@mdi/react";
import {mdiEmail as IconEmail, mdiLinkedin as IconLinkedIn} from '@mdi/js';

export default function ContactSection() {
    return (
        <div className="container-md">
            <SectionTitle>Contact</SectionTitle>
            <Card>
                <div className="p-8">
                    <div className="prose mb-">
                        <p>I am passionate in designing scalable systems, enlivening design into vivid digital products, and optimizing system performance.</p>
                        <p>Feel free to send me a message if you have any exciting projects.</p>
                    </div>

                    <div className="mb-4">
                        <ContactMethodLine icon={IconEmail} text="hello@sintat.fan"
                                           href="mailto:hello@sintat.fan" />
                        <ContactMethodLine icon={IconLinkedIn} text="linkedin.com/in/sintatfan"
                                           href="https://linkedin.com/in/sintatfan" />
                    </div>

                    <div className="font-bold text-3xl">
                        Let’s get in touch!
                    </div>
                </div>
            </Card>
        </div>
    );
}

function ContactMethodLine({icon, href, text}) {
    return (
        <a href={href} className="inline-flex space-x-2 text-primary" target="_blank" rel="noreferrer">
            <Icon path={icon} size={1} /> <span>{text}</span>
        </a>
    );
}