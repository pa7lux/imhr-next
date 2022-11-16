import { Theme } from "./theme";

interface Frontmatter {
  title: string;
  author: string;
  updatedAt?: string;
  createdAt?: string;
  theme: Theme;
}

export default Frontmatter;
