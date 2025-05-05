import './styles/HowWorks.css';
const HowWorks = () => {
    return(
        <>
            <h2 className='title-h2'>How it works?</h2>
            <div className="cont-howIt">
                <div className="howIt">
                    <h3>1. Create an account</h3>
                    <p>Sign up for a free account to get started.</p>
                </div>
                <div className="howIt">
                    <h3>2. Choose a plan</h3>
                    <p>Select a plan that suits your needs.</p>
                </div>
                <div className="howIt">
                    <h3>3. Start using</h3>
                    <p>Access all the features and start using the service.</p>
                </div>
                <div className="howIt">
                    <h3>4. Get support</h3>
                    <p>Contact our support team for any assistance.</p>
                </div>
            </div>
        </>
    )
}
export default HowWorks;