export interface PersonalInfo {
    name: string;
    profession: string;
    background: string;
    experience: string[];
    skills: string[];
    passions: string[];
    testimonials: Testimonial[];
}

export interface Testimonial {
    quote: string;
    author: string;
    website: string;
}


export interface ProjectsList {
    titles: string[];
    images: string[];
    captions: string[];
    urlLinks: string[];
}

