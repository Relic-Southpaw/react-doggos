import React, { Component } from "react";
import { Link } from "react-router-dom";

class DogList extends Component {
    render() {
        return (
            <div>
                {this.props.dogData.map(d => (
                    <div key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h3>
                            <Link to={`/dogs/${d.name}`}>{d.name}</Link>
                        </h3>
                    </div>
                ))}
            </div>

        );
    }
}

export default DogList;
