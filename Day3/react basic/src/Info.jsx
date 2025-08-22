const Info = function(props){
    return(
        <table border ="1px solid green">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.age}</td>
                    <td>{props.email}</td>
                    <td>{props.phone}</td>
                    <td>{props.address}</td>
                </tr>
            </tbody>
        </table>
    );
};
export default Info;