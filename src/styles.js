const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px',

    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      marginBottom: '20px',
    },
    input: {
      flexGrow: 1,
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginRight: '10px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    todoList: {
      listStyle: 'none',
      paddingLeft: '0',
      width: '100%',
      maxWidth: '400px',
    },
    todoItem: {
      backgroundColor: '#eee',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    editInput: {
      flexGrow: 1,
      marginRight: '10px',
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    saveButton: {
      padding: '5px 10px',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    editButton: {
      padding: '5px 10px',
      marginLeft: '10px',
      marginRight: '10px',
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    deleteButton: {
      padding: '5px 10px',
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    todoText: {
      flexGrow: 1,
    },
    noItems: {
      color: '#777',
      textAlign: 'center',
    },
  };



  export default styles;