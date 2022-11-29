import {Card} from "../card";
import {LightDecoration} from "../decoration";

export function BlockQuote({by, children}) {
    return (
        <div className="relative mb-10">
            <LightDecoration x="-right-1/4" y="-top-1/2" extraClass="scale-75" />
            <Card>
                <div className="not-prose p-6 sm:p-12 flex space-x-2 sm:space-x-4">
                    <span className="text-3xl sm:text-5xl font-bold relative -top-2">“</span>
                    <div>
                        <div className="mb-2 sm:text-2xl leading-normal">{children}</div>
                        <div className="text-sm sm:text-md italic font-light">— {by}</div>
                    </div>
                    <span className="text-3xl sm:text-5xl font-bold self-end relative -bottom-4">”</span>
                </div>
            </Card>
        </div>
    );
}