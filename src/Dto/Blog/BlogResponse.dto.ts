export interface BlogItemResponseDTO {
  createdAt: string;
  title: string;
  image: string;
  content: string;
  id: string;
  body: {
    title: string;
    image: string;
    content: string;
  };
}
