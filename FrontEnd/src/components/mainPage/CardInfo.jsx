/* eslint-disable react/prop-types */
const CardInfo = ({ title, description, imageUrl }) => {
    return (
        <>
            <div>
                <article>
                    <img src={imageUrl} alt="" />
                    <h2>{title}</h2>
                    <p>{description}</p>
                </article>
            </div>
        </>
    )
}
export default CardInfo;