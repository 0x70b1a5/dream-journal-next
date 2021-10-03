import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dreamsDir = path.join(process.cwd(), 'dreams')

export const getSortedDreamsData = () => {
    const filenames = fs.readdirSync(dreamsDir)
    const allDreamsData = filenames.map(fn => {
        const id = fn.replace(/\.md$/,'')
        const fullPath = path.join(dreamsDir, fn)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const dream = matter(fileContents)
        const body = dream.content
        const excerpt = body.length > 100 
            ? body.slice(0, 97) + '...' 
            : body

        return {
            id,
            ...dream.data,
            body,
            excerpt
        }
    })

    return allDreamsData.sort(({date:a}, {date:b}) => {
        if (a<b) return 1
        else if (a>b) return -1
        else return 0
    })
}