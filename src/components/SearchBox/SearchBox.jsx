import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onFilterChange }) => {
    return (
      <div>
        <label className={styles.label}>
          Find contacts by name
          <input
          className={styles.input}
            type="text"
            value={value}
            onChange={(e) => onFilterChange(e.target.value)}
          />
        </label>
      </div>
    );
  };
  
  export default SearchBox;