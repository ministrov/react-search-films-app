import styles from './SearchInput.module.css';

export default function SearchInput() {
  return (
    <label className={styles['search-input']} htmlFor="search">
      <input type="text" name='search' placeholder='Введите название'/>
    </label>
  )
}
