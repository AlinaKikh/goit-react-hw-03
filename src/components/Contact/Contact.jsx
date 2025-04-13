const Contact = ({ id, name, number, onDelete }) => {
    return (
      <li>
        <p>👤 {name}</p>
        <p>📞 {number}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  };
  
  export default Contact;