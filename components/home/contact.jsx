import {SectionTitle} from "../title";
import {Card} from "../card";
import Icon from "@mdi/react";
import {mdiEmail as IconEmail, mdiLinkedin as IconLinkedIn} from '@mdi/js';
import {LightDecoration, PillsDecoration} from "../decoration";

export default function ContactSection() {
    return (
        <div className="container-md flex relative mb-64">
            <PillsDecoration x="-left-1/3" y="-top-32"/>

            <div className="w-2/6 flex-none">
                <SectionTitle>Contact</SectionTitle>
            </div>
            <div className="flex-auto relative">
                <Card>
                    <div className="p-10 space-y-4">
                        <div className="prose">
                            <p>I am passionate in designing scalable systems, enlivening design into vivid digital
                                products, and optimizing system performance.</p>
                            <p>Feel free to send me a message if you have any exciting projects.</p>
                        </div>

                        <div className="space-y-2">
                            <ContactMethodLine icon={IconEmail} text="hello@sintat.fan"
                                               href="mailto:hello@sintat.fan"/>
                            <ContactMethodLine icon={IconLinkedIn} text="linkedin.com/in/sintatfan"
                                               href="https://linkedin.com/in/sintatfan"/>
                        </div>

                        <div className="font-bold text-3xl">
                            Let’s get in touch!
                        </div>
                    </div>
                </Card>

                <LightDecoration x="-left-48" y="-bottom-48" />
                <LightDecoration x="-right-48" y="-top-36" />
            </div>
        </div>
    );
}

function ContactMethodLine({icon, href, text}) {
    return (
        <div className="flex items-center space-x-2">
            <Icon path={icon} size={1}/>

            <a href={href} className="text-primary hover:text-primary-light transition-colors duration-300"
               target="_blank" rel="noreferrer">
                {text}
            </a>
        </div>
    );
}