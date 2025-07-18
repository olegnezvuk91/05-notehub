import axios from "axios";
import type { CreateNote, Note } from "../types/note";

const myKey = import.meta.env.VITE_NOTEHUB_TOKEN;
const baseUrl = "https://notehub-public.goit.study/api/notes";

interface FetchNotesRes {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(
  search: string,
  page: number
): Promise<FetchNotesRes> {
  const response = await axios.get<FetchNotesRes>(`${baseUrl}`, {
    params: {
      page: page,
      perPage: 12,
      ...(search && { search }),
    },
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });

  return response.data;
}

export async function createNote(newNote: CreateNote): Promise<Note> {
  const response = await axios.post<Note>(`${baseUrl}`, newNote, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
}

export async function deleteNote(id: number): Promise<Note> {
  const response = await axios.delete<Note>(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
}
