

const Netflix = ({image, name, summary, rating }) => {
    return (

        <div style={{ display: 'flex', maxWidth: '500px', height: 'auto', border: '2px solid red' }}>
            <div>
                <img src={image}  width="200px" height="200px" />
            </div>
            <div>
                
                <h2>Name: {name} </h2>
                <h3>Rating: {rating} </h3>
                <p>Summary: {summary}</p>
            </div>
        </div>

    )
}
export default Netflix