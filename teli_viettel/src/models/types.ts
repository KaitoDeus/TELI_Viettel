export interface ICourse {
  id: string;
  title: string;
  grade: string;
  image: string;
  featured?: boolean;
}

export interface IMessageSection {
  title: string;
  content?: string[];
  bullets?: string[];
  footer?: string;
}

export interface IAIResponse {
  intro: string;
  sections: IMessageSection[];
  actions: string[];
}

export interface IChatHistoryItem {
  id: number;
  title: string;
  createdAt?: number;
  active?: boolean;
  pinned?: boolean;
  inputMessage?: string;
  aiResponse?: IAIResponse;
  editorContent?: {
    title: string;
    sections: Array<{
      title: string;
      intro?: string;
      list?: string[];
      table?: Array<{
        leftBold: string;
        leftList: string[];
        rightBold?: string;
        rightList: string[];
      }>;
    }>;
  };
}
