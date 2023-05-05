export const boats = [
    {
        id: 1,
        name: "Boat 1",
        description: "This is the first boat"
    },
    {
        id: 2,
        name: "Boat 2",
        description: "This is the second boat"
    },
    {
        id: 3,
        name: "Boat 3",
        description: "This is the third boat"
    },
]



const Overview = () => {
    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <h1>Overview</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {boats.map((boat) => (
                        <tr key={boat.id}>
                            <td>{boat.id}</td>
                            <td>{boat.name}</td>
                            <td>{boat.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Overview;