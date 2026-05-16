export interface GreetingContent {
    image: string;
    quotes: string[];
    name: string;
    role: string;
}

export interface GreetingData {
    content: GreetingContent;
}