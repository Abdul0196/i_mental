import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const StepFormContent = (props) => {
   const navigate = useNavigate();
   const [show, setShow] = useState(1);

   const [step1, setStep1] = useState('Mango')
   const [step2, setStep2] = useState('')
   const [step3, setStep3] = useState('')
   const [step4, setStep4] = useState('')
   const [step5, setStep5] = useState('')
   const [step6, setStep6] = useState('')

   const step1OptionsHandler = (e) => {
      setStep1(e.target.value)
   }

   const step2OptionsHandler = (e) => {
      document.getElementById('stp_2_select_option-error').classList.add('d-none')
      setStep2(e.target.value)
   }

   const step3OptionsHandler = (e) => {
      document.getElementById('stp_3_select_option-error').classList.add('d-none')
      setStep3(e.target.value)
   }

   const step4OptionsHandler = (e) => {
      document.getElementById('stp_4_select_option-error').classList.add('d-none')
      setStep4(e.target.value)
   }

   const step5OptionsHandler = (e) => {
      document.getElementById('stp_5_select_option-error').classList.add('d-none')
      setStep5(e.target.value)
   }

   const step6OptionsHandler = (e) => {
      document.getElementById('stp_6_select_option-error').classList.add('d-none')
      setStep6(e.target.value)
   }


   const prevStepHandler = (value) => {
      setShow(value)
      props.step(value)
   }

   const nextStepHandler = (value) => {
      if(value === 3) {
         if(step2 === '') {
            document.getElementById('stp_2_select_option-error').classList.remove('d-none')
         } else {
            setShow(value)
            props.step(value)
         }
      } else if (value === 4) {
         if(step3 === '') {
            document.getElementById('stp_3_select_option-error').classList.remove('d-none')
         } else {
            setShow(value)
            props.step(value)
         }
      } else if (value === 5) {
         if(step4 === '') {
            document.getElementById('stp_4_select_option-error').classList.remove('d-none')
         } else {
            setShow(value)
            props.step(value)
         }
      } else if (value === 6) {
         if(step5 === '') {
            document.getElementById('stp_5_select_option-error').classList.remove('d-none')
         } else {
            setShow(value)
            props.step(value)
         }
      } else {
         setShow(value)
         props.step(value)
      }
   }

   const formSubmitHandler = (e) => {
      e.preventDefault()
      if(show === 6) {
         if(step6 === '') {
            document.getElementById('stp_6_select_option-error').classList.remove('d-none')
         }
      }
      alert(JSON.stringify({Q1: step1, Q2: step2, Q3: step3, Q4: step4, Q5: step5, Q6: step6}));
      setTimeout(function(){
         navigate('/thankyou')
      }, 2000)
   }

   

    return (
        <form className="multisteps_form position-relative" id="wizard" onSubmit={formSubmitHandler}>
            {/* <!------------------------- Step-1 -----------------------------> */}
            <div className={`multisteps_form_panel ${show === 1 ? "active" : ""}`} data-animation="slideVert">
               <div className="form_content">
                  <div className="row">
                     <div className="col-lg-4">
                        <div className="form_title ps-5">
                           <h1 className="text-white">Which Fruit Taste Sour (sense/taste)?</h1>
                        </div>
                     </div>
                     <div className="col-lg-4 text-center">
                        <div className="form_img">
                           <img src="./images/mango.png" alt="image_not_found" />
                        </div>
                     </div>
                     <div className="col-lg-4 text-end">
                        <div className="form_items radio-list">
                           <ul className="text-uppercase list-unstyled">
                              <li>
                                 <label htmlFor="opt_1" className={`step_1 rounded-pill animate__animated animate__fadeInRight animate_25ms ${step1 === 'Mango' && 'active'}`}>
                                    <span className="label-pointer rounded-pill text-center">A</span>
                                    <input type="radio" id="opt_1" name="stp_1_select_option" value="Mango" checked={step1 === 'Mango'} onChange={step1OptionsHandler}/>
                                    <span className="label-content d-inline-block text-center rounded-pill">Mango</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_2" className={`step_1 rounded-pill animate__animated animate__fadeInRight animate_50ms ${step1 === 'Banana' && 'active'}`}>
                                    <span className="label-pointer rounded-pill text-center">B</span>
                                    <input type="radio" id="opt_2" name="stp_1_select_option" value="Banana" checked={step1 === 'Banana'} onChange={step1OptionsHandler}/>
                                    <span className="label-content d-inline-block text-center rounded-pill">Banana</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_3" className={`step_1 rounded-pill animate__animated animate__fadeInRight animate_100ms ${step1 === 'Orange' && 'active'}`}>
                                    <span className="label-pointer rounded-pill text-center">C</span>
                                    <input type="radio" id="opt_3" name="stp_1_select_option" value="Orange" checked={step1 === 'Orange'} onChange={step1OptionsHandler}/>
                                    <span className="label-content d-inline-block text-center rounded-pill">Orange</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_4" className={`step_1 rounded-pill animate__animated animate__fadeInRight animate_150ms ${step1 === 'Strawberry' && 'active'}`}>
                                    <span className="label-pointer rounded-pill text-center">D</span>
                                    <input type="radio" id="opt_4" name="stp_1_select_option" value="Strawberry" checked={step1 === 'Strawberry'} onChange={step1OptionsHandler}/>
                                    <span className="label-content d-inline-block text-center rounded-pill">Strawberry</span>
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!---------- Form Button ----------> */}
               <div className="form_btn py-5 d-flex justify-content-center align-items-center">
                  <button type="button" className="js-btn-next f_btn rounded-pill active text-uppercase" onClick={() => nextStepHandler(2)}> Next Question <span><FontAwesomeIcon className='ps-1' icon={faArrowRight} /></span></button>
               </div>
            </div>
            {/* <!------------------------- Step-2 -----------------------------> */}
            <div className={`multisteps_form_panel ${show === 2 ? "active" : ""}`} data-animation="slideVert">
               <div className="form_content">
                  <div className="row">
                     <div className="col-lg-4">
                        <div className="form_title ps-5">
                           <h1 className="text-white">Find the Yellow cup (color)</h1>
                        </div>
                     </div>
                     <div className="col-lg-4 text-center">
                        <div className="form_img">
                           <img src="./images/bg_2.png" alt="image_not_found" />
                        </div>
                     </div>
                     <div className="col-lg-4 text-end">
                        <div className="form_items radio-list">
                           <ul className="text-uppercase list-unstyled">
                              <li>
                                 <label htmlFor="opt_5" className={`step_2 rounded-pill animate__animated animate__fadeInRight animate_25ms ${step2 === 'Yellow cup' && 'active'}`}>
                                    <span className="label-pointer rounded-circle text-center">A</span>
                                    <input type="radio" id="opt_5" className="required" name="stp_2_select_option" value="Yellow cup" checked={step2 === 'Yellow cup'} onChange={step2OptionsHandler} required="" />
                                    <label id="stp_2_select_option-error" className="error d-none" htmlFor="stp_2_select_option">This field is required.</label>
                                    <span className="label-content d-inline-block text-center rounded-pill">Yellow cup</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_6" className={`step_2 rounded-pill animate__animated animate__fadeInRight animate_50ms ${step2 === 'White cup' && 'active'}`}>
                                    <span className="label-pointer rounded-circle text-center">B</span><input type="radio" id="opt_6" name="stp_2_select_option" value="White cup" checked={step2 === 'White cup'} onChange={step2OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded-pill">White cup</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_7" className={`step_2 rounded-pill animate__animated animate__fadeInRight animate_100ms ${step2 === 'Black cup' && 'active'}`}>
                                    <span className="label-pointer rounded-circle text-center">C</span><input type="radio" id="opt_7" name="stp_2_select_option" value="Black cup" checked={step2 === 'Black cup'} onChange={step2OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded-pill">Black cup</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_8" className={`step_2 rounded-pill animate__animated animate__fadeInRight animate_150ms ${step2 === 'Blue cup' && 'active'}`}>
                                    <span className="label-pointer rounded-circle text-center">D</span><input type="radio" id="opt_8" name="stp_2_select_option" value="Blue cup" checked={step2 === 'Blue cup'} onChange={step2OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded-pill">Blue cup</span>
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!---------- Form Button ----------> */}
               <div className="form_btn py-5 d-flex justify-content-center align-items-center">
                  <button type="button" className="js-btn-prev f_btn rounded-pill disable text-uppercase" onClick={() => prevStepHandler(1)}><span><FontAwesomeIcon className='pe-1' icon={faArrowLeft} /></span> Last Question</button>
                  <button type="button" className="js-btn-next f_btn rounded-pill active text-uppercase" onClick={() => nextStepHandler(3)}> Next Question <span><FontAwesomeIcon className='ps-1' icon={faArrowRight} /></span></button>
               </div>
            </div>
            {/* <!------------------------- Step-3 -----------------------------> */}
            <div className={`multisteps_form_panel ${show === 3 ? "active" : ""}`} data-animation="slideVert">
               <div className="form_content">
                  <div className="row">
                     <div className="col-lg-4">
                        <div className="form_title ps-5">
                           <h1 className="text-white">What shape is pizza?</h1>
                        </div>
                     </div>
                     <div className="col-lg-4 text-center">
                        <div className="form_img">
                           <img src="./images/bg_3.png" alt="image_not_found" />
                        </div>
                     </div>
                     <div className="col-lg-4 text-end">
                        <div className="form_items check-list">
                           <ul className="text-uppercase list-unstyled">
                              <li>
                                 <label htmlFor="opt_9" className={`step_3 rounded-pill animate__animated animate__fadeInRight animate_25ms ${step3 === 'Square' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">A</span>
                                    <input type="checkbox" id="opt_9" className="required" name="stp_3_select_option" value="Square" checked={step3 === 'Square'} onChange={step3OptionsHandler} required="" />
                                    <label id="stp_3_select_option-error" className="error d-none" htmlFor="stp_3_select_option">This field is required.</label>
                                    <span className="label-content d-inline-block text-center rounded">Square</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_10" className={`step_3 rounded-pill animate__animated animate__fadeInRight animate_50ms ${step3 === 'Triangle' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">B</span><input type="checkbox" id="opt_10" name="stp_3_select_option" value="Triangle" checked={step3 === 'Triangle'} onChange={step3OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded">Triangle</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_11" className={`step_3 rounded-pill animate__animated animate__fadeInRight animate_100ms ${step3 === 'Cylinder' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">C</span><input type="checkbox" id="opt_11" name="stp_3_select_option" value="Cylinder" checked={step3 === 'Cylinder'} onChange={step3OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded">Cylinder</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_12" className={`step_3 rounded-pill animate__animated animate__fadeInRight animate_150ms ${step3 === 'Circle' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">D</span><input type="checkbox" id="opt_12" name="stp_3_select_option" value="Circle" checked={step3 === 'Circle'} onChange={step3OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded">Circle</span>
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!---------- Form Button ----------> */}
               <div className="form_btn py-5 d-flex justify-content-center align-items-center">
                  <button type="button" className="js-btn-prev f_btn rounded-pill disable text-uppercase" onClick={() => prevStepHandler(2)}><span><FontAwesomeIcon className='pe-1' icon={faArrowLeft} /></span> Last Question</button>
                  <button type="button" className="js-btn-next f_btn rounded-pill active text-uppercase" onClick={() => nextStepHandler(4)}> Next Question <span><FontAwesomeIcon className='ps-1' icon={faArrowRight} /></span></button>
               </div>
            </div>
            {/* <!------------------------- Step-4 -----------------------------> */}
            <div className={`multisteps_form_panel ${show === 4 ? "active" : ""}`} data-animation="slideVert">
               <div className="form_content">
                  <div className="row">
                     <div className="col-lg-4">
                        <div className="form_title ps-5">
                           <h1 className="text-white">Which Number is missing <br />[3 4 5 7 8]?</h1>
                        </div>
                     </div>
                     <div className="col-lg-4 text-center">
                        <div className="form_img">
                           <img src="./images/bg_3.png" alt="image_not_found" />
                        </div>
                     </div>
                     <div className="col-lg-4 text-end">
                        <div className="form_items check-list">
                           <ul className="text-uppercase list-unstyled">
                              <li>
                                 <label htmlFor="opt_13" className={`step_4 rounded-pill animate__animated animate__fadeInRight animate_25ms ${step4 === '1' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">A</span>
                                    <input type="checkbox" id="opt_13" className="required" name="stp_4_select_option" value="1" checked={step4 === '1'} onChange={step4OptionsHandler} />
                                    <label id="stp_4_select_option-error" className="error d-none" htmlFor="stp_4_select_option">This field is required.</label>
                                    <span className="label-content d-inline-block text-center rounded">1</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_14" className={`step_4 rounded-pill animate__animated animate__fadeInRight animate_50ms ${step4 === '9' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">B</span>
                                    <input type="checkbox" id="opt_14" name="stp_4_select_option" value="9" checked={step4 === '9'} onChange={step4OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded">9</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_15" className={`step_4 rounded-pill animate__animated animate__fadeInRight animate_100ms ${step4 === '6' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">C</span>
                                    <input type="checkbox" id="opt_15" name="stp_4_select_option" value="6" checked={step4 === '6'} onChange={step4OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded">6</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_16" className={`step_4 rounded-pill animate__animated animate__fadeInRight animate_150ms ${step4 === '2' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">D</span>
                                    <input type="checkbox" id="opt_16" name="stp_4_select_option" value="2" checked={step4 === '2'} onChange={step4OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded">2</span>
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!---------- Form Button ----------> */}
               <div className="form_btn py-5 d-flex justify-content-center align-items-center">
                  <button type="button" className="js-btn-prev f_btn rounded-pill disable text-uppercase" onClick={() => prevStepHandler(3)}><span><FontAwesomeIcon className='pe-1' icon={faArrowLeft} /></span> Last Question</button>
                  <button type="button" className="js-btn-next f_btn rounded-pill active text-uppercase" onClick={() => nextStepHandler(5)}> Next Question <span><FontAwesomeIcon className='ps-1' icon={faArrowRight} /></span></button>
               </div>
            </div>
            {/* <!------------------------- Step-4 -----------------------------> */}
            <div className={`multisteps_form_panel ${show === 5 ? "active" : ""}`} data-animation="slideVert">
               <div className="form_content">
                  <div className="row">
                     <div className="col-lg-4">
                        <div className="form_title ps-5">
                           <h1 className="text-white">Select the Yellow triangle.</h1>
                        </div>
                     </div>
                     <div className="col-lg-4 text-center">
                        <div className="form_img">
                           <img src="./images/bg_3.png" alt="image_not_found" />
                        </div>
                     </div>
                     <div className="col-lg-4 text-end">
                        <div className="form_items check-list">
                           <ul className="text-uppercase list-unstyled">
                              <li>
                                 <label htmlFor="opt_17" className={`step_5 rounded-pill animate__animated animate__fadeInRight animate_25ms ${step5 === 'Yellow triangle' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">A</span>
                                    <input type="checkbox" id="opt_17" className="required" name="stp_5_select_option" value="Yellow triangle" checked={step5 === 'Yellow triangle'} onChange={step5OptionsHandler} />
                                    <label id="stp_5_select_option-error" className="error d-none" htmlFor="stp_5_select_option">This field is required.</label>
                                    <span className="label-content d-inline-block text-center rounded">Yellow triangle</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_18" className={`step_5 rounded-pill animate__animated animate__fadeInRight animate_50ms ${step5 === 'Blue square' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">B</span>
                                    <input type="checkbox" id="opt_18" name="stp_5_select_option" value="Blue square" checked={step5 === 'Blue square'} onChange={step5OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded">Blue square</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_19" className={`step_5 rounded-pill animate__animated animate__fadeInRight animate_100ms ${step5 === 'Red triangle' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">C</span>
                                    <input type="checkbox" id="opt_19" name="stp_5_select_option" value="Red triangle" checked={step5 === 'Red triangle'} onChange={step5OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded">Red triangle</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_20" className={`step_5 rounded-pill animate__animated animate__fadeInRight animate_150ms ${step5 === 'Green circle' && 'active'}`}>
                                    <span className="label-pointer rounded text-center">D</span>
                                    <input type="checkbox" id="opt_20" name="stp_5_select_option" value="Green circle" checked={step5 === 'Green circle'} onChange={step5OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded">Green circle</span>
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!---------- Form Button ----------> */}
               <div className="form_btn py-5 d-flex justify-content-center align-items-center">
                  <button type="button" className="js-btn-prev f_btn rounded-pill disable text-uppercase" onClick={() => prevStepHandler(4)}><span><FontAwesomeIcon className='pe-1' icon={faArrowLeft} /></span> Last Question</button>
                  <button type="button" className="js-btn-next f_btn rounded-pill active text-uppercase" onClick={() => nextStepHandler(6)}> Next Question <span><FontAwesomeIcon className='ps-1' icon={faArrowRight} /></span></button>
               </div>
            </div>
            {/* <!------------------------- Last Step -----------------------------> */}
            <div className={`multisteps_form_panel ${show === 6 ? "active" : ""}`} data-animation="slideVert">
               <div className="form_content">
                  <div className="row">
                     <div className="col-lg-4">
                        <div className="form_title ps-5">
                           <h1 className="text-white">Which one is an Animal?</h1>
                        </div>
                     </div>
                     <div className="col-lg-4 text-center">
                        <div className="form_img">
                           <img src="./images/bg_4.png" alt="image_not_found" />
                        </div>
                     </div>
                     <div className="col-lg-4 text-end">
                        <div className="form_items radio-list">
                           <ul className="text-uppercase list-unstyled">
                              <li>
                                 <label htmlFor="opt_21" className={`step_6 rounded-pill animate__animated animate__fadeInRight animate_25ms ${step6 === 'Car' && 'active'}`}>
                                    <span className="label-pointer rounded-circle text-center">A</span>
                                    <input type="radio" id="opt_21" name="stp_6_select_option" value="Car" checked={step6 === 'Car'} onChange={step6OptionsHandler} />
                                    <label id="stp_6_select_option-error" className="error d-none" htmlFor="stp_6_select_option">This field is required.</label>
                                    <span className="label-content d-inline-block text-center rounded-pill">Car</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_22" className={`step_6 rounded-pill animate__animated animate__fadeInRight animate_50ms ${step6 === 'Monkey' && 'active'}`}>
                                    <span className="label-pointer rounded-circle text-center">B</span>
                                    <input type="radio" id="opt_22" name="stp_6_select_option" value="Monkey" checked={step6 === 'Monkey'} onChange={step6OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded-pill">Monkey</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_23" className={`step_6 rounded-pill animate__animated animate__fadeInRight animate_100ms ${step6 === 'Bag' && 'active'}`}>
                                    <span className="label-pointer rounded-circle text-center">C</span>
                                    <input type="radio" id="opt_23" name="stp_6_select_option" value="Bag" checked={step6 === 'Bag'} onChange={step6OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded-pill">Bag</span>
                                 </label>
                              </li>
                              <li>
                                 <label htmlFor="opt_24" className={`step_6 rounded-pill animate__animated animate__fadeInRight animate_150ms ${step6 === 'Laptop' && 'active'}`}>
                                    <span className="label-pointer rounded-circle text-center">D</span>
                                    <input type="radio" id="opt_24" name="stp_6_select_option" value="Laptop" checked={step6 === 'Laptop'} onChange={step6OptionsHandler} />
                                    <span className="label-content d-inline-block text-center rounded-pill">Laptop</span>
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!---------- Form Button ----------> */}
               <div className="form_btn py-5 d-flex justify-content-center align-items-center">
                  <button type="button" className="js-btn-prev f_btn rounded-pill disable text-uppercase" onClick={() => prevStepHandler(5)}><span><FontAwesomeIcon className='pe-1' icon={faArrowLeft} /></span> Last Question</button>
                  <button type="submit" className="f_btn rounded-pill active text-uppercase">Submit</button>
               </div>
            </div>
         </form>
    );
}

export default StepFormContent;