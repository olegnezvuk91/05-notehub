export interface Note {
  id: number;
  title: string;
  content: string;
  tag: NoteTag;
}

export interface CreateNote {
  title: string;
  content?: string;
  tag: NoteTag;
}

export type NoteTag = "Work" | "Todo" | "Personal" | "Meeting" | "Shopping";
