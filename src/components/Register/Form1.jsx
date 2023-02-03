import {useState} from 'react'

function Form1() {
    const [selects, setSelects] = useState({
        selectIndustry: {
        options: [
            'Technology', 'Finance', 'Humanities', 'Arts', 'Science & Research'
        ],
        value: ''
        },

        currentLevel: {
        options: [
            'Graduate', 'Senior', 'Junior', 'Sophomore', 'Freshman'
        ],
        value: ''
        },
    })

    const setIndustry = (e) => {
        setSelects({
        ...selects,
        selectIndustry: {
            ...selects.selectIndustry,
            value: e.target.innerText
        }
        })
    }

    const setLevel = (e) => {
        setSelects({
        ...selects,
        currentLevel: {
            ...selects.currentLevel,
            value: e.target.innerText
        }
        })
    }

    return (
        <>
            <div className="form-input-box">
                <label className="form-input-label">Select Industry</label>
                <select type='text' className="form-select-input" name='industry' value={selects.selectIndustry.value} onChange={() => { }}>
                    <option disabled></option>
                    {selects.selectIndustry.options.map((option, index) => <option key={ index} value={option} >{option}</option>)}
                </select>
                <div className="form-select-options" >
                    {selects.selectIndustry.options.map((option, index) => <div key={index} className='select-option' onMouseDown={setIndustry}>{ option }</div>)}
                </div>
            </div>
            <div className="form-input-box">
                <label className="form-input-label">Current Level</label>
                <select className="form-select-input" name='level' value={selects.currentLevel.value} onChange={() => { }}>
                    <option disabled></option>
                    {selects.currentLevel.options.map((option, index) => <option key={ index} value={option} >{option}</option>)}
                </select>
                <div className="form-select-options">
                    {selects.currentLevel.options.map((option, index) => <div key={index} className='select-option' onMouseDown={setLevel}>{ option }</div>)}
                </div>
            </div>
            <div className="form-input-box">
                <label className="form-input-label">Resume</label>
                <input type="file" name="resume" id='resume-file-input' className="form-file-input" />
            </div>
        </>
    )
}

export default Form1