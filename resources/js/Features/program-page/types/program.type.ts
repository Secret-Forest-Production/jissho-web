export interface ProgramHeroData {
    badgeKey: string;
    titleKey: string;
    highlightKey: string;
    titleSuffixKey?: string;
    descriptionKey: string;
    backgroundImage: string;
}

export interface ProgramBenefitItem {
    title: string;
    description: string;
}

export interface ProgramTimelineItem {
    phase: string;
    title: string;
    duration: string;
    description: string;
    images?: string[];
}

export interface ProgramDurationData {
    eyebrow: string;
    title: string;
    description: string;
    timelines: ProgramTimelineItem[];
}

export interface ProgramBenefitSectionData {
    eyebrow: string;
    title: string;
    description: string;
    benefits: ProgramBenefitItem[];
}

export interface ProgramRequirementItem {
    text: string;
    children?: string[];
}

export interface ProgramRequirementGroup {
    title: string;
    description?: string;
    items: ProgramRequirementItem[];
}

export interface ProgramDetailRequirementData {
    eyebrow: string;
    title: string;
    description: string;
    groups: ProgramRequirementGroup[];
}

export interface ProgramMagangData {
    icon: string;
    title: string;
    highlight: string;
    suffix: string;
    description: string;
    detailRequirement: ProgramDetailRequirementData;
    duration: ProgramDurationData;
    benefit: ProgramBenefitSectionData;
}

export interface SswTypeItem {
    title: string;
    duration: string;
    durationDescription: string;
    isDark?: boolean;
    items: string[];
}

export interface ProgramKerjaData {
    icon: string;
    title: string;
    highlight: string;
    suffix: string;
    description: string;
    sswTypes: SswTypeItem[];
}

export interface StudyProgramItem {
    title: string;
    duration: string;
    image: string;
    requirements: string[];
    benefit: string;
}

export interface ProgramKuliahData {
    icon: string;
    title: string;
    highlight: string;
    suffix: string;
    description: string;
    studyPrograms: StudyProgramItem[];
    scholarships: {
        title: string;
        description: string;
    }[];
    assistances: string[];
}

export interface IndustryItem {
    title: string;
    description: string;
    icon: string;
}

export interface SektorIndustriData {
    icon: string;
    title: string;
    description: string;
    industries: IndustryItem[];
}
