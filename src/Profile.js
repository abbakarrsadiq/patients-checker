import React, { useEffect, useState } from "react"
import Modal from "react-modal"
import { useNavigate } from "react-router-dom";

function Profile() {
  // my states variables 
  const [data, setData] = useState(null)
  const [modalShow, setModalShow] = useState(false)
  // function that fetches data from my fake API
  useEffect(() => {
    fetch("http://localhost:3000/names")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
      .catch(err => console.log(err))

  }, []);
  
  function closeModal() {
    setModalShow(false);
  }

// log data to console for confirmation
  if (data) {
    console.log("Succesfully fetched the data from API")

    return (
        <div className="card">
          <ul className="main">
            <div>
              <button id="modalbtn" onClick={() =>  setModalShow(true) }>Add Payment</button>
              <div className="modal">
                <Modal id="modal" isOpen={modalShow} className="modal-content" ariaHideApp={false}>
                  <span onClick={closeModal} className="closebtn">&times;</span>
                  <h3>Patients Payment gateway</h3>
                  <div className="jjj">
                  <p>You have succesfully added payment gateway to the below patient</p>
                  <p>Payment method: {data[2].paymentMethod} </p>
                  <p>Payment method: {data[2].paymentDate} </p>
                  <p>Payment method: {data[2].paymentTime} </p></div>
                </Modal>
            </div>
        </div>
        <li><span className="span">Full names:</span> {data[0].fnames}</li>
        <li><span className="span">Phone:</span> {data[0].phone}</li>
        <li><span className="span">Email:</span> {data[4].email}</li>
        <li><span className="span">Visits:</span> {data[0].visits}</li>
        <li> <span className="span">last visit date: </span> {data[0].lastVisitDate}</li>
        <li><span className="span">Next Appointment:</span>  {data[0].nextAppointment}</li>
      </ul>
      </div>)
    // modal function

  }
}
export default Profile;