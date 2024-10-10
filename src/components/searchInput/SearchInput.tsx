import styles from './SearchInput.module.css';

export default function SearchInput({ ...props }) {
  return (
    <label className={styles['search-input']} htmlFor="search">
      <input {...props} type="text" name='search' placeholder='Введите название' />
    </label>
  )
}
