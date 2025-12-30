import { useState } from 'react'
import './App.css'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

function App() {
  const [encryptBg, setEncryptBg] = useState("lightgreen")
  const [deCryptBg, setDecryptBg] = useState("none")
  const [enCryptShadow, setEnCryptShadow] = useState("inset 2px 2px 5px green")
  const [decryptShadow,setDecryptShadow] = useState("inset 2px 2px 5px gray")
  const [encryptDisplay,setEncryptDisplay] = useState('flex')
  const [DecryptDisplay,setDecryptDisplay] = useState('none')
  const [incryptInput,setEncryptInput] = useState("")
  const [encryptResult,setEncryptResult] = useState("")
  const [decryptInput,setDecryptInput] = useState("")
  const [decryptResult,setDecryptResult] = useState("")

  const encryptResultFun =() => {
    if(!incryptInput){
      toast.error("Plz write some Text")
    }
    try {
      const encoded = btoa(incryptInput);
      setEncryptResult(encoded)
    } catch (error) {
      toast.error("something went wrong")
    }
  }


  const decryptResultFun = () => {
    if(!decryptInput){
      toast.error("Plz write encripted text")
      return
    }
    try {
      const decoded = atob(decryptInput);
      setDecryptResult(decoded)
    } catch (error) {
      toast.error("matching failed! plz write Encrypted text")
    }
  }


  const encryptCopy = () => {
    if(!encryptResult){
      toast.error("Copy failed! Text not found")
      return
    }
    navigator.clipboard.writeText(encryptResult)
    toast.success("Text was copied!")
  }


  const decryptCopy = () => {
    if(!decryptResult){
      toast.error("Copy failed! Text not found")
      return
    }
    navigator.clipboard.writeText(decryptResult)
    toast.success("Text was copied!")
  }
 
  const encryption = () => {
    setEncryptBg("lightgreen")
    setEnCryptShadow("inset 2px 2px 5px green")
    setDecryptShadow('inset 2px 2px 5px gray')
    setDecryptBg("white")
    // setDecryptColor("lightred")
    setDecryptDisplay("none")
    setEncryptDisplay("flex")
  }

  const decryption = () => {
    setEncryptBg("white")
    setDecryptBg("rgb(250, 170, 188)")
    // setDecryptColor("white")
    setDecryptShadow("inset 2px 2px 5px darkred")
    setEnCryptShadow("inset 2px 2px 5px gray")
    setEncryptDisplay("none")
    setDecryptDisplay("flex")
  }
  
  

  return (
    <>
    <Toaster />
    <div className='flex flex-col justify-around items-center mt-50'>
      <div className='fixed px-5 top-5 flex md:gap-20 gap-5 backdrop-blur-sm bg-transparent items-center justify-around shadow-md py-5 Bbtn rounded-sm'>
          <button 
            className='px-10 py-2 font-bold rounded-full cursor-pointer  duration-300' style={{backgroundColor:encryptBg,boxShadow:enCryptShadow}} 
            onClick={encryption}>
            Encryption
          </button>
          <button 
            style={{backgroundColor:deCryptBg,boxShadow:decryptShadow}} 
            className='px-10 py-2 font-bold rounded-full duration-300 cursor-pointer' 
            onClick={decryption}
            >Decryption
          </button>
        </div>
        <div 
          style={{display:encryptDisplay}} 
          className='flex gap-10 flex-wrap justify-center items-center duration-500'>
          <div className='px-5 py-5 flex flex-col'>
              <p className='text-center font-bold mb-5 text-green-700 underline text-2xl'>Encryption</p>
              <textarea 
                name="input" 
                placeholder='Enter text' 
                cols={40} 
                rows={10} 
                className='border Einput border-green-500 rounded-sm p-2  bg-green-100 w-xs md:w-md' 
                onChange={(e) => setEncryptInput(e.target.value)}>
              </textarea> 
              <br />
              <button 
                className='px-10 Ebtn py-2 shadow-sm text-green-500 shadow-green-500 rounded-full cursor-pointer active:shadow-none duration-300 active:scale-95 font-bold'
                onClick={encryptResultFun}>Encript
              </button>
          </div>
          <div className='px-5 py-5 flex flex-col'>
            <textarea 
              readOnly 
              value={encryptResult} 
              className='border Einput p-2 w-xs md:w-md border-green-500 rounded-t-sm outline-none bg-green-100 h-50'>
            </textarea> 
            <br />
            <button 
              className='px-6 Ebtn rounded-full text-green-500 font-bold py-2 duration-300 cursor-pointer' 
              onClick={encryptCopy}>Copy
            </button>
          </div>
        </div>
        <div 
          style={{display:DecryptDisplay}} 
          className='flex gap-10 flex-wrap duration-500 justify-center items-center '>
          <div className='px-5 py-5 flex flex-col'>
              <p className='text-center font-bold mb-5 underline text-2xl text-red-600'>Decryptiom</p>
              <textarea 
                name="input" 
                id="Dinput" 
                placeholder='Enter text' 
                cols={40} 
                rows={10} 
                className='border border-red-500 rounded-sm p-2 Dinput  bg-red-100 w-xs md:w-md' 
                onChange={(e) => setDecryptInput(e.target.value)}>
              </textarea> 
              <br />
              <button 
                className='px-10 Dbtn py-2 shadow-sm text-red-500 shadow-red-500 rounded-full cursor-pointer active:shadow-none duration-300 active:scale-95 font-bold'
                onClick={decryptResultFun}
                >Decrypt
                </button>
            
          </div>
          <div className='px-5 py-5 flex flex-col '>
            <textarea 
              readOnly 
              value={decryptResult} 
              className='border p-2 w-xs md:w-md border-red-500 rounded-t-sm outline-none  bg-red-100 Dinput h-50'>
            </textarea> 
            <br />
            <button 
              className='px-6 Dbtn text-red-500 rounded-full py-2 cursor-pointer font-bold duration-300' 
              onClick={decryptCopy}
              >Copy
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
