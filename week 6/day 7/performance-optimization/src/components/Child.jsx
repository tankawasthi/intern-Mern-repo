import React from "react";
const Child = (props) => {
    return (
        <div>
            {console.log("Render from child")}
            <h4>Child compontents with no props </h4>
                  <button onClick={props.increastCount}>Increase Count</button>
        </div>
    );
};
export default React.memo(Child);

