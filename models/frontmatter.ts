import { SVG } from "./svg";
import { Theme } from "./theme";

interface Frontmatter {
  title: string;
  author: string;
  updatedAt?: string;
  createdAt?: string;
  theme: Theme;
  svg: SVG;
}

export default Frontmatter;
