
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>
                Custom React !
            </h1>
        </div>
    )
}
const ReactElement = {
    type: 'a',
    props: {
        href : 'http://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
  
  //   This won't work as the key and values we have set is not compatible to how react gets it
  // there is a fixed method of react for it

}
const reactElement = React.createElement(
    // tag
    'a',
    // attribute
    {href: "http://google.com" , target:"_blank"},
    // text
    'click me to visit gooooogle'
    // all the variables will come after this
    // all the evaluated expressions
)





const anotherElement = (
    <a href="http://google.com" target = "_blank">Visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    /* MyApp()  ,  same thing      */
    // ReactElement              // cuzz it is an object
    // anotherElement
    reactElement
    
)
