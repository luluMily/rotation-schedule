import React, { Component } from 'react';
import axios from 'axios'

export default class Rotation extends Component {
    state = {
        error: false,
        loading: false
    }
    
    async componentDidMount() {
        try {
            const response = await axios.get('/rotation')
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    render () {
        return (
            <div>Hello</div>
        )
    }
}
