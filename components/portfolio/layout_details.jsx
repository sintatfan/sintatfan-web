export function PortfolioDetails({meta, children}) {
    console.log(meta, children);
    return (
        <div className="container-md">
            <h1>
                {meta.title}
            </h1>

            <div>Sep 2022</div>
            <div>{meta.excerpt}</div>

            <div>
                <div>My Role</div>
                <div>{meta.role.join(', ')}</div>

                <div>Technology Stack</div>
                <div>
                    {meta.stack.map((group, k) => <TechStackGroup group={group} key={k} />)}
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

function TechStackGroup({group}) {
    return (
        <div>
            <span>{group.type}:</span>
            {group.skills.join(', ')}
        </div>
    );
}