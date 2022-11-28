import {LightDecoration} from "../decoration";

export default function AboutSubsection({iconSrc, heading, children, lightPos}) {
    return (
        <div className="flex items-center py-2">
            <div className="flex-none w-5/12 flex justify-center">
                <div className="relative">
                    <img src={iconSrc} alt="" />
                    <LightDecoration x={lightPos === 'right' ? '-right-3/4' : '-left-3/4'} y="-bottom-36" extraClass="scale-50" />
                </div>
            </div>
            <div className="flex-auto">
                <h3 className="h3 mb-2">{heading}</h3>
                {children}
            </div>
        </div>
    );
}