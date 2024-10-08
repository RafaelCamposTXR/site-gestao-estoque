import React, {useState} from 'react';
import {Textbox} from '../../../components/input/text-box/Textbox';
import SelectBox from '../../../components/input/select/Select';
import './JanelaEditar.scss';

function InputEditar({ label, content, type, tamanho, placeholder, marginRight, desativado}) {

  const [input0Focused, setInput0Focused] = useState(false);
  const [input0Value, setInput0Value] = useState('');


  return (
    <div className="input-editar" style={{width:`calc(${tamanho} + 1.1vw)`,marginRight: `${marginRight}`}}>
      <div className="texto-input">
        {label}
      </div>
      <div className="box-input">
        {type === "textbox" && 
          <div style={{width:`${tamanho}`, }}>
            <Textbox
              label={content}
              inputFocused={input0Focused}
              setInputFocused={setInput0Focused}
              inputValue={input0Value}
              setInputValue={setInput0Value}
            />
          </div>
        }
        {type === "select" && 
        <div style={{width:`${tamanho}`, }}>
            <SelectBox
              label={content}
              placeholder={content}
              tamanho={tamanho}
              desativado={desativado}
            />
        </div>
        }
      
      </div>
    </div>
  )
}

export default InputEditar



