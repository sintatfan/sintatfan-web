import {SectionTitle} from "../title";
import HorizontalProjectCard from "../portfolio/card_horizontal";
import {LightDecoration, PillsDecoration} from "../decoration";

export default function WorkSection() {
    return (
        <div className="container-md relative pt-36 mb-80">
            <PillsDecoration x="-right-1/4" y="top-0" flip />
            <LightDecoration x="-left-80" y="-top-16" />

            <SectionTitle>Work</SectionTitle>
            <p className="mb-8 text-lg">
                It is always rewarding to help corporations build digital solutions. <br />
                Check out some of my recent projects and see how I faced these challenges!
            </p>

            <WorkList />
        </div>
    );
}

function WorkList() {
    const projects = [
        { slug: 'designthinking-online-learning-platform', title: 'Xxxx online learning platform with', description: 'Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.', cover_photo: 'https://placeimg.com/488/370/tech?t=1' },
        { slug: 'epod', title: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit.', description: 'Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.', cover_photo: 'https://placeimg.com/488/370/tech?t=2' },
        { slug: 'harbour-city-xmas', title: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit.', description: 'Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.', cover_photo: 'https://placeimg.com/488/370/tech?t=3' },
    ];

    return (
        <div className="space-y-8">
            {projects.map(project => <HorizontalProjectCard project={project} key={project.slug} />)}
        </div>
    );
}