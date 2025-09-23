function Table({ data }) {
    return (
        <>
            <table className="table-auto border-collapse border border-gray-400 w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-4 py-2">ID</th>
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                        <th className="border border-gray-400 px-4 py-2">Email</th>
                        <th className="border border-gray-400 px-4 py-2">City</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id} className="text-center">
                            <td className="border border-gray-400 px-4 py-2">{user.id}</td>
                            <td className="border border-gray-400 px-4 py-2">{user.name}</td>
                            <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                            <td className="border border-gray-400 px-4 py-2">{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table; 
