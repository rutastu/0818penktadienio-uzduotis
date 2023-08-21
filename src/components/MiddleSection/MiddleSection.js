import './MiddleSection.css'

const MiddleSection = ( {title, paragraph, sectionImage, reverse} ) => {
    return (
        <>
        <div className={`middleSectionContainer ${reverse ? "reverseMiddleSection": ""}`}>
            <div className="titleAndParagraph">
                <h1 className='sectionTitle'>{title}</h1>
                <p className='sectionParagraph'>{paragraph}</p>
            </div> 
            <div className="picture">
                <img src={sectionImage} alt="image" />
            </div> 
       </div>
       <div className="greyLine"></div>
       </>
    )
}

export default MiddleSection