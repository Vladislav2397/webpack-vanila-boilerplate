import _ from 'lodash'

function component() {
    const element = document.createElement('div')

    console.log('Hello from console')

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', 'from scratch'], ' ')

    return element
}

document.body.appendChild(component())
