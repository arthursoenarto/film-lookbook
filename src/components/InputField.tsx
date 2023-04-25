import React, {useRef, useState} from 'react'
import "./InputField.css"
import Wizard from './Wizard';
import {set_design_output, makeup_output, visual_effects_output, lighting_output } from '../constants/global';
// import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore";

let prop_lst: string[]
let costume_lst: string[]

const InputField = () => {

  const messageRef = useRef<HTMLInputElement>(null);

  // const ref = collection(firestore, "messages");

  const [props, setProps] =useState("")
  const [proplst, setProplst] = useState([""])
  const [costumelst, setCostumelst] = useState([""])
  prop_lst = [];
  costume_lst = [];

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    if (messageRef.current !== null) {
      console.log(messageRef.current.value);

      const lookbook = {
        "scene": messageRef.current.value,
        "props": "",
        "set_designs": set_design_output,
        "visual_effects": visual_effects_output,
        "makeup": makeup_output,
        "lighting": lighting_output,
      }
      
      let prop_prompt = "Can you give me 5 potential props for a movie scene that portrays '" + messageRef.current.value + '"'
      let prop_output = ""
      let costume_prompt = "Can you give me 5 potential costumes/wardrobes for a movie scene that portrays '" + messageRef.current.value + '"' 
      let costume_output = ""

      // props
      fetch('http://localhost:8080/gpt35', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: prop_prompt
        })
      }).then(response => response.json())
      .then(data => {
        console.log(data.content);// setImageUrl(data);
        setProps(data.content);
        prop_output = data.content;
        const prop_regex = /[1-9]. /

        prop_lst = prop_output.replaceAll("\n","").split(prop_regex)
        prop_lst.shift()
        lookbook.props = prop_output

        // addDoc(ref, lookbook);
        setProplst(prop_lst);
        console.log(proplst)

      })
      .catch(error => {
        console.log(error);
      });
      
      // costumes
      fetch('http://localhost:8080/gpt35', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: costume_prompt
        })
      }).then(response => response.json())
      .then(data => {
        console.log(data.content);// setImageUrl(data);

        costume_output = data.content;
        const prop_regex = /[1-9]. /

        costume_lst = costume_output.replaceAll("\n","").split(prop_regex)
        costume_lst.shift()

        // addDoc(ref, lookbook);
        setCostumelst(costume_lst);
        console.log(costumelst);

      })
      .catch(error => {
        console.log(error);
      });

    }
    console.log(props)
  };


  return (
    <div className="body_div">
      <div className="input_div">
        <form onSubmit={(e)=>handleSave(e)}> 
          <input
            type="text"
            placeholder="Describe a scene"
            className="input_box"
            ref={messageRef}>
          </input>
          <button type="submit" className="input_submit">
            Generate
          </button>
        </form>
      </div>
      <Wizard props={proplst} costumes={costumelst}></Wizard>
    </div>
  )
}

export default InputField