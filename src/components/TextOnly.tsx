import React from 'react'
import './Props.css'

interface MyComponentProps {
    props: string[];
    costumes: string[]
}

const TextOnly: React.FC<MyComponentProps> = ({props, costumes}) => {

    const prop_regex = /[1-9]. /

    var renderedProps = props.map((item: any) => 
        <div className="type_div">
            <div className="thing_div">
                <h3>{item.split(":")[0]}:</h3>
                <p>{item.split(":")[1]}</p>
            </div>
        </div>
    );

    var renderedCostumes = costumes.map((item: any) => 
        <div className="type_div">
            <div className="thing_div">
                <h3>{item.split(":")[0]}:</h3>
                <p>{item.split(":")[1]}</p>
            </div>
        </div>
    );

    return (
            <div className="content_div">
                <div className="prop_div">
                    <h1>PROPS</h1>
                    {renderedProps}
                </div>
                <div className="costumes_div">
                    <h1>COSTUMES</h1>
                    {renderedCostumes}
                </div>
            </div>
        )
}

export default TextOnly