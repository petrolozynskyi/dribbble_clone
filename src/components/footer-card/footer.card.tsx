
export function FooterCard({ imageSrc, name }) {
    return (
        <div className="w-[204px] relative h-[194px]">
            <img className='w-[200px] h-[150px]' src={imageSrc} />
            <p>{name}</p>
        </div>
    )
}
