// import { forwardRef, InputHTMLAttributes, useState } from 'react';
// import styles from './EnterInput.module.css';

// const EnterInput = forwardRef(function EnterInput({ onChange }, ref) {
//   const [text, setText] = useState('');

//   const getInputValue = (event: HTMLInputElement) => {
//     setText(event.target.value);
//     onChange(text);
//   }

//   return (
//     <label className={styles['enter-input']} htmlFor="name">
//       <input 
//         type="text" 
//         name='name' 
//         placeholder='Ваше имя' 
//         onChange={getInputValue} 
//         value={text} 
//         ref={ref} 
//         autoComplete='off' 
//       />
//     </label>
//   )
// });

// export default EnterInput;
