import type { StudentInfo } from '../interfaces/StudentInfo';

export default function ReactProp(prop: StudentInfo) {
    return (
        <header id="student-info">
            <h2>Names: {prop.names}</h2>
            <p>Class: {prop.class}</p>
            <p>Class Number: {prop.classNumber}</p>
        </header>
    );
}