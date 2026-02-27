import React, { useState } from 'react'

const CodeState = () => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [mobile, setMobile] = useState("")
  const [age, setAge] = useState("")
  const [address, setAddress] = useState("")
  const [user, setUser] = useState()

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const userObj = {
      name: name,
      gender: gender,
      mobile: mobile,
      age: age,
      address: address
    }

    setUser(userObj);
    setName("")
    setGender("")
    setMobile("")
    setAge("")
    setAddress("")
  }
  return (
    <div><br /><br /><br /><br />
      <form>
        Name: <input type="text" name="" value={name} id="" onChange={(e) => setName(e.target.value)} /><br />
        Gender: <input type="text" name="" value={gender} id="" onChange={(e) => setGender(e.target.value)} /><br />
        Mobile: <input type="text" name="" value={mobile} id="" onChange={(e) => setMobile(e.target.value)} /><br />
        Age: <input type="text" name="" value={age} id="" onChange={(e) => setAge(e.target.value)} /><br />
        Address: <input type="text" name="" value={address} id="" onChange={(e) => setAddress(e.target.value)} /><br />
        <button type="button" onClick={(e) => { handleFormSubmit(e) }}>Submit</button><br />
      </form>


      {!user && (
        <div><br /><br /><br />
          <h1>Please Enter details</h1>
        </div>
      )}

      {user && (
        <div><br /><br /><br />
          <h1>User Records</h1><br />
          <span>Name: {user?.name}</span><br />
          <span>Gender: {user?.gender}</span><br />
          <span>Mobile: {user?.mobile}</span><br />
          <span>Age: {user?.age}</span><br />
          <span>Address: {user?.address}</span><br />
        </div>
      )}
    </div>
  )
}

export default CodeState