import { useParams } from "react-router-dom";  

const students = [
    { name: "Janak Pathak", email: "jab@gmail.com", sId: 1, rollNumber: 501, bio: "I am a student from abc" },
    { name: "Pradip Pyakurel", email: "py@gmail.com", sId: 2, rollNumber: 502, bio: "I am a student from sss" },
    { name: "Adam Giri", email: "adam@gmail.com", sId: 3, rollNumber: 503, bio: "I am a student from sos" },
    { name: "Jack Lamechhane", email: "jack@gmail.com", sId: 4, rollNumber: 504, bio: "I am a student from la" },
];

function StudentDetail() {
    const { studentId } = useParams(); 

    const student = students.find((student) => student.sId === Number(studentId));

    if (!student) {
        return <h2>Student not found</h2>;
    }

    return (
        <div>
            <h2>{student.name}</h2>
            <p>Email: {student.email}</p>
            <p>Roll Number: {student.rollNumber}</p>
            <p>Bio: {student.bio}</p>
        </div>
    );
}

export default StudentDetail;
