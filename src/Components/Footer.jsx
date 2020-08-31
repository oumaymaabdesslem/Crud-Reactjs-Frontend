import React, { Component } from 'react'
 class Footer extends Component {

    constructor(props){
        super(props)

        this.state= {

        }
    }
    render() {
        return (
            <div>
            <footer className="page-footer font-small ">
                <div className="footer-copyright text-center py-3 ">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            </footer>
            </div>
        )
    }
}

export default Footer
