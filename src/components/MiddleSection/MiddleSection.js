import './MiddleSection.css'

const MiddleSection = ( {title, paragraph, sectionImage} ) => {
    return (
        <div className="middleSectioncontainer">
       <div className="titleAndParagraph">
        <h1 className='sectionTitle'>{title}</h1>
        <p className='sectionParagraph'>{paragraph}</p>
       </div> 
       <div className="picture">
        <img src={sectionImage} alt="image" />
       </div> 
       </div>
    )
}

export default MiddleSection