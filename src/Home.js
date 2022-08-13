import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Nav from './Nav';
import Profile from "./Profile";


function Home() {
  const [data, setData] = useState([])
  let navigate = useNavigate()

  useEffect(() => {

    fetch("http://localhost:3000/names")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
      .catch(err => console.log(err))

  }, [])

  function handler(e) {
    let listId = e.target.id;
    data.find((item) => {
      
    })
  }
  return (
    <div>
      <div>
        <Nav />
        <div className='body-section'>
          <h2>List of Patients</h2>
          <table className='table'>
            <tbody>
              <tr>{
                data.map((item) => {
                  return <td className="names" onClick={() => navigate("/Profile")} key={item.id}> {item.fnames}</td>
                })
              }</tr>
            </tbody>
          </table>
        </div>
        <footer>

          <div><h3>Emergency Guide</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lectus, consectetur laoreet egestas sit amet, lobortis eu felis. Morbi consectetur interdum eleifend. Sed ac nisi nulla. Aliquam quis est sit amet orci dictum vestibulum. Sed feugiat ante mattis nibh elementum rutrum. Aliquam placerat dapibus arcu, id rhoncus ligula maximus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>

          <div><h3>Protection & Care</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lectus, consectetur laoreet egestas sit amet, lobortis eu felis. Morbi consectetur interdum eleifend. Sed ac nisi nulla. Aliquam quis est sit amet orci dictum vestibulum. Sed feugiat ante mattis nibh elementum rutrum. Aliquam placerat dapibus arcu, id rhoncus ligula maximus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>

          <div><h3>GP Advise</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lectus, consectetur laoreet egestas sit amet, lobortis eu felis. Morbi consectetur interdum eleifend. Sed ac nisi nulla. Aliquam quis est sit amet orci dictum vestibulum. Sed feugiat ante mattis nibh elementum rutrum. Aliquam placerat dapibus arcu, id rhoncus ligula maximus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
          <div><h3>Healthcare </h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus lectus, consectetur laoreet egestas sit amet, lobortis eu felis. Morbi consectetur interdum eleifend. Sed ac nisi nulla. Aliquam quis est sit amet orci dictum vestibulum. Sed feugiat ante mattis nibh elementum rutrum. Aliquam placerat dapibus arcu, id rhoncus ligula maximus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
        </footer>
      </div>
    </div>

  )
}

export default < Home 
/>;

