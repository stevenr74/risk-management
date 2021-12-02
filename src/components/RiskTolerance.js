import React from 'react'
import RiskScenario from './subcomponents/RiskScenario.js';


const RiskTolerance = (props) => {

    //display a few (3?) possible choices when investing a sum ($1000?) 
    //        
    
    //Go through aggressive, moderate, and convservative risk descriptions and examples eg when someone could decide on that strategy



    return (
        <div className="risk_tolerance">
            <h2>Risk Tolerance</h2>
            <p>
               Risk tolerance is the degree of variability in returns that an investor is willing to 
               withstand in their portfolio. It is dependant on many factors such as a person's goals, 
               age, income, and personality. Some investors are willing to partake in risky investments
               is that their potential returns are larger.
            </p>
            <p>

            </p>
            <p> 
               For example, a person is planning on purchasing a house in a year with
               their money in savings. If they purchased a high volatility asset they could stand to make a larger
               downpayment, or they could not be able to meet the minimum payment at all. 
            </p>
            <p>
                In this example, different investing goals are presented. Select the strategy 
                you think will accomplish this goal the best.
            </p>
            <RiskScenario />
            <div className="box-container">
                <div className="box">
                    <a href="#" className="box-clickable">
                    <h3>
                        Invest in S&P500 index fund.
                    </h3>
                    <h3>
                        Upside Potential: 20%
                    </h3>
                    <h3>
                        Downside Potential: -10%
                    </h3>
                    <p>
                        some more text
                    </p>
                    </a>
                </div>
                <div className="box">
                    <p>
                        asd
                    </p>
                </div>
                <div className="box">
                    <p>
                        asd
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RiskTolerance;