import {useState} from 'react'

function Form2() {
    const [inputs, setInputs] = useState(2)

    const AddInput = (e) => {
        e.preventDefault()

        setInputs(inputs + 1)
    }

    return (
        <>
            {new Array(inputs).fill().map((input, index) => {
                return (
                    <div key={index} className="form-input-box form-file-input">
                        <span className="form-file-lister file-input-label" >{index + 1}</span>
                        <input type="file" name="project-files" className="form-file-input" />
                    </div>
                )
            })}
            {inputs < 4 &&
                <div className="form-input-box" id='add-project-input-box'>
                    <span id='max-upload-promp'>You can upload a maximum of 4 projects</span><button id='add-project-button' onClick={AddInput} >Add Project</button>
                </div>
            }
            <div className="form-input-box">
                <label className="form-file-lister">Project Link</label>
                <input type="text" name="resume" id='project-link-input'/>
            </div>
        </>
    )
}

export default Form2