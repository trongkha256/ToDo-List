import { useState, useRef } from 'react'

function TodoList() {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);
    const testRef = useRef();

    return ( <
        >
        <
        input type = 'text'
        className = 'inputValue'
        ref = { testRef }
        placeholder = 'Input value: '
        onChange = {
            (e) => setJob(e.target.value)
        }
        value = { job }
        / > <
        button className = 'btn'
        onClick = {
            () => setJobs(preState => {
                setJob('')
                testRef.current.focus();
                return [...preState, job]
            })
        } > Submit < /button>  <
        ul className = 'tag-ul' > {
            jobs.map((pjob, index) =>
                <
                li className = 'tag-li'
                key = { index } > { pjob } < /li>
            )
        } <
        /ul> < / >

    )
}

export default TodoList;