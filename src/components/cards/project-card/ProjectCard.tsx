import {motion} from "motion/react";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

interface ProjectCardContent {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    repository: string;
    website: string;
}

interface ProjectCardContentProps {
    item: ProjectCardContent;
}

interface ProjectCardProps {
    content: ProjectCardContent;
    className?: string;
}

const ProjectCardContent: React.FC<ProjectCardContentProps> = (
    {item}
) => {
    return (
        <motion.div
            key={`${item.id}}`}
            className={`flex flex-col items-start justify-between h-full`}
        >
            <div className="flex mb-4 shadow-md w-full">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover hover:scale-110 transition-all duration-300"/>
            </div>
            <div className="flex flex-col p-4 space-y-8 h-full z-10">
                <div className="grow space-y-4">
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-lg font-normal text-foreground/60 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-none">
                    <div className="flex flex-wrap-reverse gap-x-2.5 gap-y-2">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-3 py-1.5 bg-neutral-800 text-xs font-medium text-foreground rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex-none">
                    <div className="flex justify-end gap-x-4">
                        {item.repository && (
                            <a
                                href={item.repository}
                                className="w-10 h-10 hover:scale-110 transition-all duration-300"
                                aria-label={`${item.title} GitHub Repository`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} size="2xl"/>
                            </a>
                        )}
                        {item.website && (
                            <a
                                href={item.website}
                                className="w-10 h-10 hover:scale-110 transition-all duration-300"
                                aria-label={`${item.title} Live Preview`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xl"/>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const ProjectCard: React.FC<ProjectCardProps> = (
    {
        content,
        className = '',
    }
) => {
    return (
        <div className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden ${className}`}>
            {content && (
                <ProjectCardContent item={content}/>
            )}
        </div>
    )
}

export default ProjectCard;