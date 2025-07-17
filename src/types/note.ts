export interface Note {
  id: number;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNote {
  title: string;
  content?: string;
  tag: NoteTag;
}

export type NoteTag = "Work" | "Todo" | "Personal" | "Meeting" | "Shopping";
