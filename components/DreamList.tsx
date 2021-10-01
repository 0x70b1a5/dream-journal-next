import { DreamListItem } from "./DreamListItem"

export const DreamList = ({ dreams }) => {
    return (
        <div className='flex flex-wrap'>
            {dreams.map((dream) => (
                <DreamListItem key={dream.id} dream={dream} />
            ))}
        </div>
    )
}
