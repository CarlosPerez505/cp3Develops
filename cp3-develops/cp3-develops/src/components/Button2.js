const  Button2 = () => {
    const handleClick=() => {
        alert('Google her full name, look at related social media postings, and of course read the official police report.');
    }
    return (
        <button onClick={handleClick}>
            Next
        </button>
    );
}

export default Button2