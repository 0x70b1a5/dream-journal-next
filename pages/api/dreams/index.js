import {getSortedDreamsData} from '../../../lib/dreams'

export default function handler(req, res) {
    res.status(200).json(getSortedDreamsData())
}