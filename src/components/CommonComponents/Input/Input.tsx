import './Input.scss';
import { IInput } from '../../../types/InputInterface';


export default function Input({ children, id, inputState, inputType, classText, placeholder, isError, inputValue, changeFunction }: IInput) {
  return (
    <div className={`input-holder ${classText ? classText + '-holder' : ''}`}>
      {children && <label htmlFor={id} className='input-holder__label'>{children}</label>}
      <input id={id} name={id} type={inputType} className={`input-holder__input ${inputState ? inputState : ''} ${classText ? classText : ''}`} placeholder={placeholder} value={inputValue} onChange={(e) => changeFunction(e)} />
      {isError && <div className='input-holder__error'>Error text</div>}
    </div>
  );
}
