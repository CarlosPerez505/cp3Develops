const  Button1 = () => {
   const handleClick=() => {
        alert('Google her full name, look at related social media postings, and of course read the official police report.');
    }
    return (
        <button onClick={handleClick} className="Button-one">
            Tips
        </button>
    );
}

export default Button1