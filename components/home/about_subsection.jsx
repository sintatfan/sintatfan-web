import {LightDecoration} from "../decoration";

export default function AboutSubsection({icon, iconSrc, heading, children, lightPos}) {
    return (
        <div className="sm:flex items-center sm:space-x-8 md:space-x-0 py-8 md:py-2">
            <div className="flex-none mb-6 sm:mb-0 sm:w-1/3 md:w-5/12 flex justify-center">
                <div className="relative">
                    <div className="drop-shadow-lg">
                        {iconSrc ? <img src={iconSrc} alt="" /> : icon}
                    </div>
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
