import {SectionTitle} from "../title";

function Biography() {
    return (
        <div className="flex items-center space-x-5 py-10 mb-12">
            {/* Profile Pic, Name and Education */}
            <div className="flex-none w-72 text-center">
                <img src="/images/profilepic.jpg" srcSet="/images/profilepic@2x.jpg 2x" alt="My profile picture"
                     className="rounded-full mx-auto mb-4" />

                <div className="text-2xl font-bold">Sin-Tat Fan</div>
                <div className="font-light">
                    <abbr title="Master in Design" className="no-underline">MDes</abbr> (Interaction Design)<br />
                    <abbr title="Bachelor of Science" className="no-underline">BSc</abbr> in Computer Science
                </div>
            </div>

            {/* Professional Summary */}
            <div className="flex-auto max-w-3xl">
                <p className="text-5xl mb-3">Computer Science is <br />an <span className="text-gradient font-bold">art of problem solving</span>.</p>
                <p className="text-lg">I am a passionate and competent Software Developer with over 9 years of experience in web applications development. With my knowledge in Computer Science and Interaction Design, as well as my solid work experience, I am eager to help companies build elegant and well-designed digital solutions that solve problems, engage with people and boost productivity.</p>
            </div>
        </div>
    );
}

export default function AboutSection() {
    return (
        <div className="container-md">
            <SectionTitle>About</SectionTitle>

            <Biography />

            <h2 className="h2">What do I do?</h2>
            <h3 className="h3">I design.</h3>
            <p>Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>

            <h3 className="h3">I develop.</h3>
            <p>Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>

            <h3 className="h3">I optimize.</h3>
            <p>Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>

            <div className="max-w-2xl">
                <h3 className="h3">I share and collaborate.</h3>
                <p>I hope my teammates can grow together. Other than development, I also worked as a senior position to share my tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>
            </div>
            <div className="grid grid-cols-3">
                <div>
                    <img src="/images/share_workshop1.jpg" srcSet="/images/share_workshop1@2x.jpg 2x" alt="" className="rounded-xl" />
                </div>
                <div>
                    <img src="/images/share_workshop2.jpg" srcSet="/images/share_workshop2@2x.jpg 2x" alt="" className="rounded-xl" />
                </div>
                <div>
                    <img src="/images/share_present.jpg" srcSet="/images/share_present@2x.jpg 2x" alt="" className="rounded-xl" />
                </div>
            </div>

        </div>
    );
}