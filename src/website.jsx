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

import { useState,useRef, useContext, useEffect } from 'react'




const ImageUploader = ()  => {
  const { onSent,loading,input,setinput,setloading}=useContext(Context)
  const [img, setImg] = useState(img7);
  const [div,setdiv]=useState([])
  const [username,setusername]=useState("")
  const newchat=useRef(null)
  const [no,setno]=useState(true)
  const [messages, setMessages] = useState([]);
  const [inpmessages, setinpMessages] = useState([]);
  const messageRefs = useRef([]);
  let youMsgCounter = 0;

  
  const [showUsername, setShowUsername] = useState(true);
  const [nointernet, setnointernet] = useState(false);

  const [text, setText] = useState('HI,User'); 
 

  
  const fileinput = useRef(null);

  const handle = () => {
    fileinput.current.click();
  };

useEffect(()=>{
  setTimeout(() => {
    setnointernet(false)
    
  },2000);
})

  
const Textss=()=>{
  const hi= localStorage.getItem("user")
   
useEffect(()=>{
  setusername(hi)
  if(!hi){
  const a=prompt("Enter your name to Log-In :");
  if(a.trim()!==""){
   
    localStorage.setItem("user",a)
    
    setusername(a)
    setShowUsername(true)
   
  }
  else{
    setusername(hi)
    setShowUsername(true)
  }
  
  }
 
})
return(hi? showUsername && <h1>{"HI, "+username}</h1>:<h1>{text}</h1>)
}







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
    setinpMessages(prev => [...prev, { sender: "You :", text: input }])
    setno(false)
  
    setText('')
    setinput('');
    setShowUsername(false)
    
    try {
      
      const response = await onSent(input);
        const newres=response.split("*");
       const newres2=newres.map((part,index)=>{
      
   if(part.includes("?")){
    
    return [<span  className='red' key={index}><br></br>{part}<br></br></span>]
    

   }
  else{
  return part 
  }

      })
      const newres3=newres2.map((part,index)=>{
      
        if(part.includes(":")){
         
         return [<span className='red' key={index}><br></br>{part}<br></br></span>]
         
     
        }
       else{
        return part
       }
       
     
           })
     
      
      
      setMessages(prev => [...prev, { sender: "AI :", text: newres3}]);
      
    } catch (error) {
      console.error("Error:", error);
    }

  }
  const handledown= async (event)=>{
    if (event.key === "Enter" ) {

      setText('')
      setShowUsername(false)
      setMessages(prev => [...prev, { sender: "You :", text: input }]);
      setinpMessages(prev => [...prev, { sender: "You :", text: input }])
      
      setno(false)
      setinput('');
      
      try {
        
        const response = await onSent(input);
        const newres=response.split("*");
       const newres2=newres.map((part,index)=>{
      
   if(part.includes("?")){
    
    return [<span  className='red' key={index}><br></br>{part}<br></br></span>]
    

   }
  else{
  return part 
  }

      })
      const newres3=newres2.map((part,index)=>{
      
        if(part.includes(":")){
         
         return [<span className='red' key={index}><br></br>{part}<br></br></span>]
         
     
        }
       else{
        return part
       }
       
     
           })
     

  
       
       
      
      
      
     
      
        
        
        
      
        
      
      
       
        setMessages(prev => [...prev, { sender: "AI :", text: newres3}]);
      
      
        
      }
       catch (error) {

        setloading(false)
        
        setnointernet(true)
       
        console.error(error)
      
         
         
      
      }
    }
   
     
  }
  
  


 
  

 







  const [visible,setvisible]=useState(false)
  

  const change={
    width:visible?'183px': "50px",
    
    
    
  }
  const imgss={
    width:visible?"180px":"30px"
  }

  const sizedivs={
    marginLeft:visible?"":"-70px",
    width: visible?"":"80vw",
    height:visible?"":"80vh",
    
  
    
    
  
    }

  const inps={
    marginLeft:visible?"":"-80px",
    width:visible?"":"900px",
    position:visible?"fixed":"fixed",
    top:visible?"630px":"630px",
    
    left:visible?"450px":"450px",
   
     


  }
  const mobileinps={
    width:visible?"285px":"285px",
    height:visible?"45px":"45px",
    position:visible?"fixed":"fixed",
    top:visible?"600px":"600px",
    zIndex:visible?"1":"1",
    left:visible?"60px":"60px",
    borderRadius: visible?"5px":"5px",
    PointerEvent:visible?"none":"",
    filter:visible?"blur(6px)":""
   
  

  }
  

 const hiuser={
  marginLeft:visible?"":"-30px",

  

 }

 const mobilehiuser={
  
  fontSize:visible?"12px":"12px",
  PointerEvent:visible?"none":"",
  filter:visible?"blur(6px)":""
 
  

 }
 const mobile={
  width: visible?"90vw":"90vw",
  marginLeft:visible?"-190px":"-190px",

  PointerEvent:visible?"none":"",
  filter:visible?"blur(6px)":"",
 
  position:visible?"fixed":"fixed",
  
 
  zIndex:visible?"1":"1",

 }

 const send={
  marginLeft:visible?"":"90px"
 }
 const mobilesend={
  marginRight:visible?"10px":"10px",
  
  width:visible?"30px":"30px",
  
  height:visible?"30px":"30px",

  

 }
 const youm={
  color:"black"
 }
 const aim={
  color:"red"
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
 setinpMessages([])
 setno(true)
  setText("")
  setShowUsername(false)
  setloading(false)
  
  
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
       </div>
       }
      {visible &&<div className='recent'>
      <p>Recent</p>
      <div className='recentdiv'>
{
  no?
  <p className='sidep'>no history</p>
: 
inpmessages.map((msg, indexs) => (
  <p key={indexs} className='sidep' onClick={() => {
    const el = messageRefs.current[indexs];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add("highlight");
    }
  }}>
    {
      msg.text.length > maxlen ? msg.text.slice(0, maxlen) + "..." : msg.text
    }
  </p>
))

  
}
</div>
</div>

}
<div className='downnav' >
 <div className='downdiv'style={imgss}>
  <img src={img3} alt="gem" className='gem div'></img>
  {visible &&  <h5>Gem manager</h5>}
  </div>
 <div className='downdiv' style={imgss}>
  <img src={img4} alt="gem" className='gem div'></img>
  {visible && <h5>help</h5>}
  </div>
  <div className='downdiv' style={imgss}>
  <img src={img5} alt="gem"  className='gem div'></img>
  {visible && <h5>Activity</h5>}
  </div>
  <div className='downdiv' style={imgss}>
  <img src={img6} alt="gem"  className='gem div'></img>
  {visible && <h5>settings</h5>}
  </div>
 
 
  

</div>

  </div>
 
  
   
<div  style={window.innerWidth>600?sizedivs:mobile} className='gemini'>

<h1 className='minigpt'>MiniGpt</h1>



    <div ref={newchat} className='response' >
    
     <div    className='users'>
     <div className='user' style={window.innerWidth>600?hiuser:mobilehiuser}>
     {Textss()}
      
    </div>

     
{messages.map((msg, index) => {
  const isYou = msg.sender === "You :";
  const refIndex = youMsgCounter; 
  if (isYou) youMsgCounter++;

  return (
    <h1
      className={isYou ? 'you' : 'ai'}
      key={index}
      ref={(el) => {
        if (isYou) {
          messageRefs.current[refIndex] = el;
        }
      }}
    >
      <span style={isYou ? youm : aim}>{msg.sender} </span>{msg.text}
    </h1>
  );
})}



   <div>
   {
    loading? <div  className='loader'>
    <div className='load'></div>
    <div className='load'></div>
    <div className='load'> </div>
  </div> :<div>
  </div>
  
  }
  {
    nointernet && <div className={window.innerWidth>600?"noi":"noimobile"}>
    <h1 >no internet connection</h1>
   </div>

    
  

  }
  
    </div>
  
  </div>
    
  
    
    
     
     
  
   
  
   
      
    
       
    
    
       
    
      
      
</div>
   
  
    {<div className="ask" style={window.innerWidth>600?inps:mobileinps}>
      <input type="file" accept="image/*" className="gallery" onChange={handleimagechange}  ref={fileinput}/>
      {<img src={img}  onClick={handle}  alt="Uploaded Preview" className="preview" />}
      <input  placeholder='Ask Gemini Clone' value={input} onChange={(e)=>setinput(e.target.value)} className='inp'  onKeyUp={handledown}></input>
      <img src={img8} alt="mic" style={window.innerWidth>600?send:mobilesend} onClick={dis }className='preview'/>
      
    
      </div>}
     
    </div>
  

 







</div>
 
  </div>
  
 
 
 
 )
};



export {ImageUploader}