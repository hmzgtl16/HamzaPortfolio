import {motion} from "motion/react";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

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

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({item}) => {
    return (
        <motion.div
            key={`${item.id}}`}
            className={`flex flex-col items-start justify-evenly`}
        >
            <div className="flex mb-4 shadow-md w-full">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover"/>
            </div>
            <div className="p-4 space-y-4">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-lg font-normal text-foreground/60 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-x-2.5 gap-y-2">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 border border-neutral-800 rounded-full text-xs font-medium bg-foreground/10 text-foreground">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex flex-row gap-x-3">
                    {item.website && (
                        <div
                            className="flex-1 h-9 px-1 bg-foreground text-background text-sm rounded-md shadow-xs hover:bg-foreground/75 hover:font-medium">
                            <a
                                href={item.website}
                               className="flex items-center justify-center w-full h-full gap-x-3"
                                aria-label={`Preview ${item.title}`}
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGlobe} size="lg"/>
                                Preview
                            </a>
                        </div>
                    )}
                    {item.repository && (
                        <div
                            className="flex-1 h-9 px-1 bg-background text-foreground text-sm rounded-md shadow-xs hover:bg-background/10 hover:font-medium">
                            <a href={item.website}
                               className="flex items-center justify-center w-full h-full gap-x-3"
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg"/>
                                Github
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     content,
                                                     className = '',
                                                 }) => {
    return (
        <div
            className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden ${className}`}
        >
            {content && (
                <ProjectCardContent item={content}/>
            )}
        </div>
    )
}

export default ProjectCard;