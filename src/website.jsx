import './website.css'
import img1 from './images/menu.png'
import img2 from './images/add.png'
import img3 from './images/gems.png'
import img4 from './images/help-web-button.png'
import img5 from './images/restore.png'
import img6 from './images/settings.png'
import img7 from './images/gallery.jpg'
import img8 from './images/send.png'
import { Context} from './config/context'

import { useState,useRef, useContext } from 'react'




const ImageUploader = ()  => {
  const { onSent,loading,input,setinput,}=useContext(Context)
  const [img, setImg] = useState(img7);
  const [div,setdiv]=useState([])

  const newchat=useRef(null)
  const [no,setno]=useState(true)
  const [messages, setMessages] = useState([]);
  const [aimessages, setaiMessages] = useState([]);
  const [text, setText] = useState('HI,Utsav'); 
 

  
  const fileinput = useRef(null);

  const handle = () => {
    fileinput.current.click();
  };





  const handleimagechange=(event)=>{
  const files=event.target.files[0];
  if(files){
 const reader=new FileReader();
  reader.onloadend=()=>{

  setImg(reader.result);
  reader.readAsDataURl(files)
   }

  }
  }
  const dis= async()=>{
    setMessages(prev => [...prev, { sender: "You :", text: input }]);
    setno(false)
    setText('')
    setinput('');
    
    try {
      
      const response = await onSent(input);
      const newres=response.split("*");
      const newres2=newres.slice(".:").flatMap((part,index,arr)=>
        index<arr.length-1?[part,<br key={index}/>]:[part]
    )
      
      
      setaiMessages(prev => [...prev, { sender: "AI :", text: newres2}]);
      
    } catch (error) {
      console.error("Error:", error);
    }

  }
  const handledown= async (event)=>{
    if (event.key === "Enter" ) {
      setText('')
      
      setMessages(prev => [...prev, { sender: "You :", text: input }]);
      setno(false)
      setinput('');
      
      try {
        
        const response = await onSent(input);
        const newres=response.split("*");
        const newres2=newres.slice(".:").flatMap((part,index,arr)=>
          index<arr.length-1?[part,<br key={index}/>]:[part]
      )
        const newres3=newres2.slice("/?/g").flatMap((part,index,arr)=>(
         index<arr.length-1?[part,<div className="red" key={index}/>]:[part]
        ))
       
       
      
      
     
      
        
        
        
      
        
      
       
       
        setaiMessages(prev => [...prev, { sender: "AI :", text: newres3}]);
        
      } catch (error) {
        console.error("Error:", error);
      }
    }

     
  }



 
  

 







  const [visible,setvisible]=useState(true)
  

  const change={
    width:visible?'15vw': "50px",
    
    
  }
  const sizedivs={
    width: visible?"":"96vw",
    marginLeft:visible?"":"-180px",
    
  
    
    
    
  }
  const inps={
    marginLeft:visible?"":"-80px",
    width:visible?"":"900px",
     


  }
 const hiuser={
  marginLeft:visible?"":"-30px",

  

 }
 const send={
  marginLeft:visible?"":"90px"
 }
  const badla=()=>{
   setvisible(!visible)
  }

  const texts=()=>{
   if(div.length>0){
    setdiv([...messages,div])
    
   }
  console.log(div)
  setMessages([])  
  setaiMessages([])
  setText("")

  
  }
  
const maxlen=7
 return(
  
  
 <div>
   <div>
  <div className="sidenavs" style={change}>
  <img src={img1} alt="hi" onClick={badla} className='menu'/>
  
  {visible &&  <div className='addchat' onClick={texts}>
 <img src={img2} alt="add" className='add'/>
  <p >New Chat</p>
  </div>}
  {visible &&<div className='recent'>
<p>Recent</p>
<div className='recentdiv'>
{
  no?
  <p className='sidep'>no history</p>
: 
messages.map((msg,indexs)=>(
  

  <p key={indexs} className='sidep'>
  {
      msg.text.length>maxlen ? msg.text.slice(0,maxlen)+"...":msg.text
  }
    
  </p>
  ))
  
}
</div>
</div>

}
<div className='downnav'>
 <div className='downdiv'>
  <img src={img3} alt="gem" className='gem div'></img>
  {visible &&  <h5>Gem manager</h5>}
  </div>
 <div className='downdiv'>
  <img src={img4} alt="gem" className='gem div'></img>
  {visible && <h5>help</h5>}
  </div>
  <div className='downdiv'>
  <img src={img5} alt="gem"  className='gem div'></img>
  {visible && <h5>Activity</h5>}
  </div>
  <div className='downdiv'>
  <img src={img6} alt="gem"  className='gem div'></img>
  {visible && <h5>settings</h5>}
  </div>
 
 
  

</div>

  </div>
 
  
   
<div  style={sizedivs} className='gemini'>
<h1>MiniGpt</h1>


    
    <div ref={newchat} className='response'>
    {!text && messages.textContent===""?<div>no</div>:
     <div    className='users'>

   {messages.map((msg,index)=>(
    
       
     <h1 className='you' key={index}><span>{msg.sender}  </span>{msg.text}</h1>
     
    
     
     
   ))
   }
   <div>
   {
    loading? <div  className='loader'>
    <div className='load'></div>
    <div className='load'></div>
    <div className='load'> </div>
  </div> :aimessages.map((mssg,indexs)=>(
    <div className='ais' >
     
     <h1 className='ai' key={indexs}><span>{mssg.sender}  </span>{mssg.text}</h1>
    </div>
     
     
     
   ))}
   </div>
   
   </div>}
    
    
     
     
  
   
  
   
      
    
       
    
    
       
    
      
      
    </div>
    <div className='user' style={hiuser}>
      <h1>{text}</h1>
      
    </div>
  
    {<div className="ask" style={inps}>
      <input type="file" accept="image/*" className="gallery" onChange={handleimagechange}  ref={fileinput}/>
      {<img src={img}  onClick={handle}  alt="Uploaded Preview" className="preview" />}
      <input  placeholder='Ask Gemini Clone' value={input} onChange={(e)=>setinput(e.target.value)} className='inp'  onKeyUp={handledown}></input>
      <img src={img8} alt="mic" style={send} onClick={dis }className='preview'/>
      
    
      </div>}
     
    </div>
  

 







</div>
 
  </div>
  
 
 
 
 )
};



export {ImageUploader}