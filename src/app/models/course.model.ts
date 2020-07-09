export interface Tag {
  name: string;
  id: number;
}

export interface Course {
  picture: string;
  title: string;
  category_id: number;
  description: string;
  content: string;
  tags: Array<Tag>;
  dateLine: string;
  id: number;
}
