# IMHR.top about project

«I am here» — is a project devoted to stories that Ukrainian teenagers are ready to share during the war. We have assembled an editorial team that consists of guys who found themselves in Georgia in 2022. Along with curators, they have developed this website and continue to fill it with stories and the results of creative projects.

## IMHR.top next + ts version

- `getStaticPath` and `getStaticProps` util functions and `fs` module to get path and read files
- `gray-matter` module for reading content inside
- `react-markdown` to render markdown content
- `rehype-raw` to write html inside markdown if needed
- `classnames` for `cn()` syntax
- uses CSS modules for styling

## Do not forget

- `/data` for md
- `/models` for content interfaces

## Documentation for the new pages

### File location

Directory /data/posts is intended for articles. There are 3 directories inside: `en`, `uk`, `ru`
When you want to create new article, you must make in every directory from above new file with `.mdx` ending. **This files must have the same names**. For example, we want to create new article with title `My new article`. For this you supposed to add for each directory, file `my-new-article` **The name must be without spaces**.

### Frontmatter

In Frontmatter stored information about article: `author`, `title`, `theme`, `svg` and `meta information`. Also Frontmatter must be written in very top of the article file. It must look so:

```
---
author: 'Someone`s name'
title: 'Some title'
theme: 'theme-somecolor'
svg: 'some-svg'
metaTitle: 'some title'
metaDescription: 'some description'
metaOgTitle: 'some og title'
metaOgImage: 'some link on some image'
---
```

**Don't forget to use quotes**

- `author` - Author name
- `title` - Title of article
- `theme` - Main color which will be used on article's page. **Before writing name, ask if it exists**
- `svg` - Picture which will be used in button on home page. **Before writing name, ask if it exists**
- `metaTitle` - Title which will be the name for tab in browser. Mostly you need to write in this way: `'imhr.top - title'`
- `metaDescription` - Meta description. Mostly you need to write in this way: `'I am here. Сайт, на котором подростки из Украины рассказывают свои истории.'`. Inner text depends on language for which you currently creating an article.
- `metaOgTitle` - Mostly you need to write in this way: `'imhr.top - title'`
- `metaOgImage` - Image which will be shown as an icon for tab in browser.

### Tags

Article builds from simple tags which are going after Frontmatter. Every tag must be wrapped in some of three "boxes":

- `Fullpage`
- `Large`
- `Medium`

Only `Heading`, `AuthorCard` and `PhotoFullPage` don't need to be wrapped in one of the following box

## Contribution

If you've found any mistake or ready for contribution to upgrade our code, feel free to open issue or pull request
