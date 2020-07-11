import React from 'react'

// Disini saya membuat sebuah code kecil untuk menyapa user pada home page

class HelloWorld extends React.Component{
    render(){
        return(
            <h1>
                Welcome {this.props.name}! What will you buy today?
            </h1>
        )
    }
}

export default HelloWorld