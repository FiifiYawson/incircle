import '../styles/register.css'
import logo from '../images/WhatsApp_Image_2022-12-24_at_23.57 1.svg'
import backArrow from '../images/left-arrow-svgrepo-com.svg'
import submitMsgBackground from '../images/pngfind 2.png'
import Form1 from '../components/Register/Form1'
import Form2 from '../components/Register/Form2'
import {useState, useRef} from 'react'

function Register() {
  const [forms, setForms] = useState({
    forms: [<Form1/>, <Form2/>],
    active: 0,
    done: false,
  })

  const form = useRef()

  const submitForm = () => {
    const completeForm = new FormData(form.current)

    fetch('', {
      method: 'POST',
      body: completeForm,
    })
  }

  const nextFormNav = () => {
    if (forms.active === forms.forms.length - 1) {
      submitForm()
      setForms({
        ...forms,
        done: true
      })
    } else {
      setForms({
      ...forms,
      active: forms.active + 1
    })
    }
  }

  const prevFormNav = () => {
    if (forms.active !== 0) {
      setForms({
        ...forms,
        active: forms.active - 1
      })
    }
  }

  return (
    <div id="register-page">
      <div id="lets-get-started">
        <p id="lets-get">Let's Get</p>
        <p id="started"> Started</p>
      </div>
      <div id="form-box">
        <section id='form-header'>
          <img src={logo} alt="" id="logo" />
          <p id="greeting">
          <span>Hello Veron, Welcome to incircled</span>
          <small>Help us make the best job recommendations for you</small>
          </p>
        </section>
        <form className='progressive-form' ref={form}>
          {forms.forms.map((form, index) => <div style={{ display: forms.active === index ? 'block' : 'none' }} key={index}>{form}</div>)}
        </form>
        <div id="form-nav-bar">
          <div id="button-nav-box">
            {forms.forms.map((form, index) => <div className={`button-nav ${index === forms.active ? 'active': ''}`} key={index} onClick={()=>{setForms({...forms, active: index})}}></div>)}
          </div>
          <button className='form-nav-button' id="back-button" onClick={prevFormNav}><img src={backArrow} alt='' id='back-arrow' />Back</button>
          <button className='form-nav-button' id={forms.active === forms.forms.length - 1 ? 'submit-button' : 'next-button'} onClick={nextFormNav}>{forms.active === forms.forms.length - 1 ? 'Submit' : 'Next'}</button>
        </div>
      </div>
      {forms.done &&
        <div id="submit-message">
          <div id="submit-message-card">
            <h2>Welcome On Board</h2>
            <p>
              You have successfully submitted your details. Incircled will
              send  you emails of job recommendations that best fits
              your profile. Good Luck!!!
            </p>
            <button onClick={() => {setForms({...forms, done: false})}}>Okay</button>
            <img src={submitMsgBackground} alt="" id='submit-msg-bg' />
          </div>
        </div>
      }
    </div>
  )
}

export default Register