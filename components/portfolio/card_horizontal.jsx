import {Card} from "../card";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "@mdi/react";
import {mdiChevronRight as IconArrowRight} from '@mdi/js';

export default function HorizontalProjectCard({project}) {
    const router = useRouter();
    const url = `/portfolio/${project.slug}`;

    return (
        <Card onClick={() => router.push(url)}>
            <div className="md:flex items-center md:space-x-4">
                <div className="flex-none self-stretch aspect-[488/370] md:aspect-auto md:w-1/3 xl:w-[488px] xl:min-h-[370px] relative">
                    <img src={project.coverImage} alt=""
                         className="absolute inset-0 w-full h-full object-cover" />
                </div>

                <div className="flex-auto p-6 sm:p-8">
                    <h4 className="font-bold text-xl sm:text-3xl mb-2">{project.title}</h4>
                    <p>{project.excerpt}</p>

                    <div className="text-right mt-5">
                        <Link href={url} className="btn btn-sm btn-link">
                            Learn more <Icon path={IconArrowRight} size={0.7} />
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
}