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

import { useQuery } from "react-query";
import apiClient from "../../config/http-config";

interface Boat {
    id: number;
    name: string;
    description: string;
}
const Overview = () => {
    const { data: boats } = useQuery("boats", () => apiClient.get<Boat[]>("/boats"));
    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <h1 className="text-center text-xl">Boats list</h1>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {boats && boats.data.map((boat) => (
                        <tr key={boat.id}>
                            <td className="text-center">{boat.id}</td>
                            <td className="text-center">{boat.name}</td>
                            <td className="text-center">{boat.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Overview;