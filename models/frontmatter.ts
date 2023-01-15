import { SVG } from './svg';
import { Theme } from './theme';

interface Frontmatter {
  title: string;
  author: string;
  theme: Theme;
  svg: SVG;
  metaTitle?: string;
  metaDescription?: string;
  metaOgTitle?: string;
  metaOgImage?: string;
  ogUrl?: string;
}

export default Frontmatter;
