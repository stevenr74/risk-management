import React from 'react'

const horizon = "1 Year";
const start = 10000;
const target = 20000;

const RiskScenario = (props) => {
    
    const calculatePotential = (x) => {
        let y = x / 100;
        let potential = (y * start) + start;
        return potential;
    }

    return (
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
    )
}

export default RiskScenario;