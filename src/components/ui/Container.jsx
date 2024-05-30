function Container(props) {
    
    const style = {
        width: "90%",
        margin: "auto",
        border: "1px solid green"
      }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Container;