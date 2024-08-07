import { SVG } from './svg';
import { Theme } from './theme';

interface Frontmatter {
  title: string;
  author?: string;
  subtitle?: string;
  theme: Theme;
  svg: SVG;
  metaTitle?: string;
  metaDescription?: string;
  metaOgTitle?: string;
  metaOgImage?: string;
  isBigStory?: boolean;
  bigImageLink?: string;
  createdAt: string;
  ogUrl?: string;
}

export default Frontmatter;
