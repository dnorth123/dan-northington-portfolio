import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies')

export function getAllCaseStudies() {
  const fileNames = fs.readdirSync(caseStudiesDirectory)
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(caseStudiesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      ...data,
    }
  })
}

export async function getCaseStudyBySlug(slug) {
  const fullPath = path.join(caseStudiesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    content: contentHtml,
    ...data,
  }
}
