import {motion} from "motion/react";
import React from 'react';
import type {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ServiceCardContent {
    id: number;
    title: string;
    description: string;
    icon: IconDefinition;
}

interface ServiceCardContentProps {
    item: ServiceCardContent;
}

interface ServiceCardProps {
    content: ServiceCardContent;
    className?: string;
}

const ServiceCardContent: React.FC<ServiceCardContentProps> = ({item}) => {
    return (
        <motion.div
            key={`${item.id}}`}
            className={`flex flex-col items-start justify-evenly`}
        >
            <div className="flex items-center justify-center mx-auto mb-4 p-3 border border-neutral-800 rounded-full shadow-md size-18">
                <FontAwesomeIcon icon={item.icon} size="2xl"/>
            </div>
            <h3 className="mx-auto mb-1 text-xl font-bold text-foreground">{item.title}</h3>
            <p className="p-3 text-lg font-normal text-foreground/50 text-center">{item.description}</p>
        </motion.div>
    );
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    content,
    className = '',
}) =>  {
    return (
        <div
            className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-4 ${className}`}
        >
            {content && (
                <ServiceCardContent item={content}/>
            )}
        </div>
    );
}

export default ServiceCard;
