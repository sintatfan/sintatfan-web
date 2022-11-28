export function PortfolioDetails({meta, children}) {
    return (
        <div className="container-md">
            <h1>
                Lorem ipsum dolor sit amet, consect etur adipiscing elit.
            </h1>

            <div>Sep 2022</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at condim entum arcu, sed lobortis purus. Duis purus purus, varius vitae lacinia eu, rhoncus et leo. Nullam a metus eu purus porttitor convallis id in dui. Donec vitae tincidunt ligula, molestie egestas libero. Nam consectetur nisl eu tellus ultricies, sed euismod turpis porttitor.</div>

            <div>
                <div>My Role</div>
                <div>System Design, Frontend Development</div>

                <div>Technology Stack</div>
                <div>
                    <div>Frontend: Nuxt (Vue.js), Babylon.js</div>
                    <div>Backend: NestJS (Node.js, TypeScript)</div>
                    <div>Infrastructure: Azure App Service, MongoDB Atlas</div>
                </div>
            </div>

            <img src="https://placeimg.com/1200/597/tech" alt="" className="rounded-3xl shadow-lg" />

            <div className="prose mx-auto">
                {children}
            </div>

            <hr />
        </div>
    );
}