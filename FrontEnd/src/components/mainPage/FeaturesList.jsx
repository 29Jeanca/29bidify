const FeaturesList = () => {
    const features = []

    return(
        <>
            <div className="features-list">
                <ul>
                {features.map((feature,index)=>(
                    <li key={index}>
                        <img src={feature.image} alt={feature.name} />
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}
export default FeaturesList