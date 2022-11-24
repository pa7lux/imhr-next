import { SVG } from "./svg";
import { Theme } from "./theme";

interface Frontmatter {
  title: string;
  author: string;
  theme: Theme;
  svg: SVG;
  src?: string;
}

export default Frontmatter;
