const mainContainer = document.querySelector("#root")

function customRender(reactelement , container){
    // const domElement = document.createElement(reactelement.type)
    // domElement.innerHTML = reactelement.children
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target' ,reactElement.props.target)
    // mainContainer.appendChild(domElement)

    const domElement  = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    for (const prop in reactelement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactelement.props[prop])
        
    }
    mainContainer.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href : 'http://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

customRender(reactElement , mainContainer)