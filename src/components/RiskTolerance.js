import React from 'react'

const horizon = "1 Year";
const start = 10000;
const target = 20000;

const RiskTolerance = (props) => {

    //display a few (3?) possible choices when investing a sum ($1000?) 
    //eg (and check investopedia on this) 

    const calculatePotential = (x) => {
        let y = x / 100;
        let potential = (y * start) + start;
        return potential;
    }


    return (
        <div className="risk_tolerance">
            <h2>Risk Tolerance</h2>
            <p>
               Risk tolerance is the degree of variability in returns that an investor is willing to 
               withstand in their portfolio. 
               It is dependant on many factors such as a person's goals, age, and income, and personality.  
               Investors with a higher tolerance for risk are willing to risk more money for larger 
               returns than more conservative investors.
            </p>
            <p>
                In this example, different scenarios are presented with a specific investing horizon. 
                You should select the strategy that you think will accomplish this goal the best.
            </p>
            <div className="scenario">
                <h3>Scenario 1</h3>
                <p>
                    Investing Horizon: {horizon}
                </p>
                <p>
                    Starting Sum: ${start}
                </p>
                <p>
                    Target: ${target}
                </p>
            </div>
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