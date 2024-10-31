// import { ChangeEvent, useState } from 'react';
// import styles from './EnterInput.module.css';

// type EnterInputProps = {
//   onChange: (f: string) => void;
// }

// function EnterInput({ onChange }: EnterInputProps) {
//   const [text, setText] = useState('');

//   const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
//     setText(event.target.value);
//     onChange(text);
//   }

//   console.log(text);

//   return (
//     <div className={styles['enter-input']}>
//       <label htmlFor="login"></label>
//       <input
//         type="text"
//         name="login"
//         placeholder='Ваше имя'
//         onChange={getInputValue}
//         value={text}
//         autoComplete='off'
//         id="login"
//         required
//       />
//     </div>
//   )
// };

// export default EnterInput;
