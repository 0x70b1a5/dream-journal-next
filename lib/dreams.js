import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dreamsDir = path.join(process.cwd(), 'dreams')

export function getSortedDreamsData() {
    const filenames = fs.readdirSync(dreamsDir)
    const allDreamsData = filenames.map(fn => {
        const id = fn.replace(/\.md$/,'')
        const fullPath = path.join(dreamsDir, fn)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const dream = matter(fileContents)

        return {
            id,
            ...dream.data
        }
    })

    return allDreamsData.sort(({date:a}, {date:b}) => {
        if (a<b) return 1
        else if (a>b) return -1
        else return 0
    })
}