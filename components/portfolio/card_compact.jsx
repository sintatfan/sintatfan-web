import {useRouter} from "next/router";
import {Card} from "../card";
import Link from "next/link";
import Icon from "@mdi/react";
import {mdiChevronRight as IconArrowRight} from "@mdi/js";

export default function CompactProjectCard({ project }) {
    const router = useRouter();
    const url = `/portfolio/${project.slug}`;

    return (
        <Card onClick={() => router.push(url)}>
            <Link href={url}>
                <div className="aspect-[386/293] relative">
                    <img src={project.coverImage} alt=""
                         className="absolute inset-0 w-full h-full object-cover" />
                </div>

                <div className="px-6 py-5 font-bold text-lg">
                    {project.title}
                </div>
            </Link>
        </Card>
    );
}
