import {getSortedDreamsData} from '../../../lib/dreams'

export default function handler({ query: { id }}, res) {
    const filtered = getSortedDreamsData().filter(dream => dream.id.toString() === id)    

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `Dream with the id of ${id} is not found`})
    }
}