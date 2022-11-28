import Link from "next/link";
import Icon from "@mdi/react";
import {mdiArrowLeft as IconArrowLeft} from "@mdi/js";

export function ReadMoreSection({exclude}) {
    return (
        <>
            <h3 className="h3 mb-6">Read more stories</h3>

            <div className="grid grid-cols-2 mb-16">
                <div>1</div>
                <div>2</div>
            </div>

            <Link href={"/"} className="space-x-2 inline-flex items-center transition-colors duration-300 hover:text-primary">
                <Icon path={IconArrowLeft} size={0.9} className="inline-block" />
                <span className="text-lg font-light">Back to List of Projects</span>
            </Link>
        </>
    )
}