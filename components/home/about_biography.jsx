export function Biography() {
    return (
        <div className="md:flex md:items-center space-y-5 md:space-y-0 md:space-x-5 py-10 mb-12">
            {/* Profile Pic, Name and Education */}
            <div className="flex-none flex items-center space-x-6 sm:space-x-8 md:space-x-0 md:block md:w-56 lg:w-72 md:text-center">
                <img src="/images/profilepic.jpg" srcSet="/images/profilepic@2x.jpg 2x" alt="My profile picture"
                     className="rounded-full mx-auto md:mb-4 w-24 sm:w-32 md:w-auto" />

                <div className="flex-auto">
                    <div className="text-2xl font-bold">Sin-Tat Fan</div>
                    <div className="font-light">
                        <abbr title="Master in Design" className="no-underline">MDes</abbr> (Interaction Design)<br />
                        <abbr title="Bachelor of Science" className="no-underline">BSc</abbr> in Computer Science
                    </div>
                </div>
            </div>

            {/* Professional Summary */}
            <div className="flex-auto max-w-3xl">
                <p className="text-3xl sm:text-4xl lg:text-5xl mb-3">Computer Science is <br />an <span className="text-gradient font-bold">art of problem solving</span>.</p>
                <div className="text-lg">
                    <p className="mb-3">I&apos;m a passionate and competent Software Developer with over 9 years of experience in web development. I enjoy crafting engaging frontend and developing robust applications.</p>
                    <p>With my background in Computer Science and Interaction Design, as well as my solid work experience, I&apos;m eager to help companies build elegant digital solutions that solve problems, engage with people and boost productivity.</p>
                </div>
            </div>
        </div>
    );
}
