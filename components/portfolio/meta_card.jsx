import {Card} from "../card";

export function ProjectMeta({meta}) {
    return (
        <Card>
            <div className="px-8 py-8 space-y-6">
                {meta.role
                    ? <MetaRow label="My Role" value={meta.role.join(', ')} />
                    : null}
                {meta.stack
                    ? <MetaRow label="Technology Stack" value={meta.stack.map((group, k) => <TechStackGroup group={group} key={k} />)} />
                    : null}
            </div>
        </Card>
    );
}

function MetaRow({label, value}) {
    return (
        <div>
            <div className="font-bold text-lg">{label}</div>
            <div>{value}</div>
        </div>
    );
}

function TechStackGroup({group}) {
    return (
        <div>
            <span className="font-medium">{group.type}: </span>
            {group.skills.join(', ')}
        </div>
    );
}
