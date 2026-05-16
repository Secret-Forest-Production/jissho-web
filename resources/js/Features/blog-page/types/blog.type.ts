export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
    views: string;
    author: string;
    readingTime: string;
    tags: string[];
    content: string;
}

export interface BlogCategory {
    name: string;
    count: number;
}

export interface BlogHeroData {
    badge: string;
    title: string;
    highlight: string;
    titleSuffix: string;
    description: string;
    backgroundImage: string;
}
