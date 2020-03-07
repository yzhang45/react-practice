import React, {Component} from 'react';
import './App.css';

class Course {

    constructor(college, department, number, section, professor) {
        this.college = college;
        this.department = department;
        this.number = number;
        this.section = section;
        this.professor = professor;
        this.key = `${college} ${department} ${number} ${section}`;
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        const columns = [
            'College',
            'Department',
            'Number',
            'Section',
            'Professor',
        ];

        const courses = [];
        const myCourses = [];

        this.state = {
            columns,
            courses,
            myCourses,
        };

        this.getCourses = this.getCourses.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);

    }


    getCourses() {
        const courses = [
            new Course('CAS', 'CS', '112', 'B1', 'Sullivan'),
            new Course('CAS', 'CS', '332', 'A1', 'Bun'),
            new Course('CAS', 'CS', '350', 'A1', 'Sarkar'),
        ];

        this.setState({courses});

    }

    addCourse(course) {
        const {myCourses} = this.state; // const myCourses  = this.state.myCourses;
        myCourses.push(course);
        this.setState({myCourses});

    }


    deleteCourse(myCourse) {
        let {myCourses} = this.state;
        myCourses= myCourses.filter((course) => course.key !== myCourse.key);
        this.setState({myCourses});

    }


    render() {
        const {columns, courses, myCourses} = this.state;

        return (
            <div className="App">
                <button onClick={this.getCourses}>Get Courses</button>
                <header>Course List</header>
                <table>
                    <thead>

                    <tr>
                        {columns.map(column =>
                            <th key={column}>{column}</th>)}
                    </tr>
                    </thead>
                    <tbody>

                    {
                        courses.map(course =>
                            <tr key={course.key}>
                                <td>{course.college}</td>
                                <td>{course.department}</td>
                                <td>{course.number}</td>
                                <td>{course.section}</td>
                                <td>{course.professor}</td>
                                <td>
                                    <button onClick={() => this.addCourse(course)}>Add to my courses</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>

                <header>My Courses</header>
                <table>
                    <thead>
                    <tr>
                        {columns.map(column =>
                            <th key={column}>{column}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        myCourses.map(myCourse =>
                            <tr key={myCourse.key}>
                                <td>{myCourse.college}</td>
                                <td>{myCourse.department}</td>
                                <td>{myCourse.number}</td>
                                <td>{myCourse.section}</td>
                                <td>{myCourse.professor}</td>
                                <td>
                                    <button onClick={() => this.deleteCourse(myCourse)}>Delete</button>
                                </td>

                            </tr>
                        )
                    }
                    </tbody>
                </table>


            </div>
        );
    }
}

export default App;