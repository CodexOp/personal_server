import React, {useState} from "react";
import styled from "styled-components";
import messgae from "./message.jpg";
import { AiFillCaretUp } from "react-icons/ai";





const Contact = () => {
 

 
    const change = () => {
        const button = document.querySelector('.button_up');
      if(window.scrollY>= 500){
        button.style.display="block";
      console.log('aa')
      
    }
  else{
    button.style.display="none";
  }
  }
    
    window.addEventListener('scroll', change);

    function scrolltotop(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }

    const [name, setname] = useState();
    const [mail, setmail] = useState();
    const [mail_correct, setmail_correct] = useState();


    
    function submit(){
        if(valid()){
            alert("form has been submitted")
        }
    }
    
    
    function valid(){
        if(!mail.includes('@')){
         setmail_correct("Please Enter A Valid Email Address");
        }


        else{
            setmail_correct("");
        }
    }


    

    return(
      
        <Con>
            <h1 className="heading"> Contact Me</h1>
            <div className="mssg_outer">
                <div className="mssg_image">
                    <img src={messgae} className="image_mssg" alt="as" />
                </div>
                <div className="mssg_form">
                    <label className="labels">Name</label><br></br>
                <input className="inputs" name="name" type="text" placeholder="Enter your name" 
                onChange={(event)=>{
                setname(event.target.value)}} />
                <p></p>
                <label className="labels">Email</label><br></br>
                <input className="inputs" name="mail" type="text" placeholder="Enter your email address"  
                onChange={(event)=>setmail(event.target.value)}  />
                 <p>{mail_correct}</p>
                 <label className="labels">Message</label><br></br>
                 <textarea className="inputs_textarea" name="message" placeholder="Enter your message"> </textarea>
                 <br></br>
                <button className="button_submit" onClick={()=> submit()}>Submit </button>
                </div>
            </div>
            <div className="button_up_div"><AiFillCaretUp onClick={()=>scrolltotop()} className="button_up" /></div>
        </Con>
    );
}

const Con = styled.div`
width:80%;
margin:auto;

.heading{
    text-align:center;
    margin-top:50px;
}

html{
    scroll-behavior:smooth;
}

.button_up{
    float:right;
    font-size:30px;
    border:1px solid black;
    padding:2px;
    position:fixed;
    bottom:20px;
    right:40px;
    display:none;

}

.button_up:hover{
    background:#01E4C1;
}

.mssg_outer{
    display:flex;
    width:100%;
}

.inputs{
    width:75%;
    border:none;
    border-bottom:1px solid grey;
    outline:none;
    focus:none;
    height:30px;
    
}

.inputs_textarea{
    width:75%; 
    outline:none;
    focus:none;
    height:100px;
    padding:10px;
}


.labels{
  line-height:2.0  ;
}

.mssg_form{
    margin-top:50px;
    width:50%;
}
.mssg_image{
    width:50%;
}

.image_mssg{
    width:100%;
}

.button_submit{
    width:50%;
    border:2px solid #224482 !important;
    background:none;
    height:25px;
    margin-top:10px;
    
}

.button_submit:hover{
 background:#224482;
 transition:all 0.5s ease;
 color:white;
    
}

@media(max-width:750px){
    .mssg_outer{
        display:flex;
       flex-direction:column;
    }

    .mssg_image{
        width:100%;
    }
    
    .mssg_form{
        width:100%;
        margin:0;
    }

    
     .inputs{
    width:100%;
    
    }

    .inputs_textarea{
        width:100%; 
    }

    .button_submit{
      margin:auto;
    }

}

`

export default Contact;
