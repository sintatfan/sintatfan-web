import {SectionTitle} from "../title";

export default function AboutSection() {
    return (
        <div className="container-md">
            <SectionTitle>About</SectionTitle>

            <p>Computer Science is an <span className="text-gradient font-bold">art of problem solving</span>.</p>
            <p className="text-lg">I am a passionate and competent Software Developer with 9+ years of experience in web applications development. With my knowledge in Computer Science and Interaction Design, as well as my solid work experience, I am eager to help companies build elegant and well-designed digital solutions that solve problems, engage with people and boost productivity.</p>

            <h2 className="h2">What do I do?</h2>
            <h3 className="h3">I design.</h3>
            <p>Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>

            <h3 className="h3">I develop.</h3>
            <p>Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>

            <h3 className="h3">I optimize.</h3>
            <p>Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>
        </div>
    );
}