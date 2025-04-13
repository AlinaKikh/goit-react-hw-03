import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
    return (
      <li className={styles.li}>
        <p>👤 {name}</p>
        <p>📞 {number}</p>
        <button className={styles.button} onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  };
  
  export default Contact;