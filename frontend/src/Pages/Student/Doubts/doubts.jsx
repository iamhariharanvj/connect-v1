import {useState,useEffect} from 'react'
import Tesseract from 'tesseract.js'
const MyDoubts = () => {

  const [doubtText, setDoubtText] = useState("")

  const convertDoubt = (e)=>{
    e.preventDefault()
    const file = URL.createObjectURL(e.target.files[0])

      Tesseract.recognize(
        file,
        'eng'
      ).then(({ data: { text } }) => {
        setDoubtText(text)
      })

    
  }
  return (
    <div>
      <form>

        <input onChange={e=>convertDoubt(e)} className="DoubtImage" type="file" /><br />
        <textarea value={doubtText} onChange={e=>setDoubtText(e.target.value)} rows="20" cols="100" placeholder="Type Here"/>
        <input type="submit" name="Submit" value="Submit"/>

      </form>
    </div>
  )
}

export default MyDoubts