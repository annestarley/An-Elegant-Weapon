document.addEventListener('DOMContentLoaded', function () {

  var question = document.querySelector('.question')
  var q0 = document.querySelector('#q0')
  var backdrop = document.querySelector('.backdrop')

// Loading first question
  q0.addEventListener('click', function() {
    q0.parentNode.removeChild(q0)

    var header1 = document.createElement('h3')
    header1.innerText = 'Choose a non-force related vocation:'
    question.appendChild(header1)
    var container = document.createElement('div')
    container.setAttribute('class', 'vocation-container')
    question.appendChild(container)

    var divs = []
    var imgs = []
    var h4s = []
    for (var i = 0; i < 5; i++) {
      var div = document.createElement('div')
      var img = document.createElement('img')
      var h4 = document.createElement('h4')
      divs.push(div)
      imgs.push(img)
      h4s.push(h4)
    }
    divs[0].setAttribute('id', 'senator')
    divs[0].setAttribute('class', 'vocation')
    imgs[0].setAttribute('src', 'images/senator.jpg')
    imgs[0].setAttribute('alt', 'galactic senator')
    h4s[0].innerText = 'Galactic Senator'
    container.appendChild(divs[0])
    divs[0].appendChild(imgs[0])
    divs[0].appendChild(h4s[0])
    divs[1].setAttribute('id', 'bountyhunter')
    divs[1].setAttribute('class', 'vocation')
    imgs[1].setAttribute('src', 'images/bountyhunter.jpg')
    imgs[1].setAttribute('alt', 'bounty hunter')
    h4s[1].innerText = 'Bounty Hunter'
    container.appendChild(divs[1])
    divs[1].appendChild(imgs[1])
    divs[1].appendChild(h4s[1])
    divs[2].setAttribute('id', 'musician')
    divs[2].setAttribute('class', 'vocation')
    imgs[2].setAttribute('src', 'images/musician.jpg')
    imgs[2].setAttribute('alt', 'musician')
    h4s[2].innerText = 'Musician'
    container.appendChild(divs[2])
    divs[2].appendChild(imgs[2])
    divs[2].appendChild(h4s[2])
    divs[3].setAttribute('id', 'beauty')
    divs[3].setAttribute('class', 'vocation')
    imgs[3].setAttribute('src', 'images/beauty.png')
    imgs[3].setAttribute('alt', 'beauty contestant')
    h4s[3].innerText = 'Beauty Contestant'
    container.appendChild(divs[3])
    divs[3].appendChild(imgs[3])
    divs[3].appendChild(h4s[3])
    divs[4].setAttribute('id', 'pilot')
    divs[4].setAttribute('class', 'vocation')
    imgs[4].setAttribute('src', 'images/pilot.jpeg')
    imgs[4].setAttribute('alt', 'pilot')
    h4s[4].innerText = 'Pilot'
    container.appendChild(divs[4])
    divs[4].appendChild(imgs[4])
    divs[4].appendChild(h4s[4])

    var button = document.createElement('button')
    button.setAttribute('id', 'q1')
    button.innerText = 'Submit'
    question.appendChild(button)
    var q1 = document.querySelector('#q1')



    // Loading second question
    q1.addEventListener('click', function() {
      question.parentNode.removeChild(question)
      var question2 = document.createElement('div')
      question2.setAttribute('class', 'question')
      backdrop.appendChild(question2)

      var jarjar = document.createElement('img')
      jarjar.setAttribute('src', 'images/jarjar.jpg')
      jarjar.setAttribute('alt', 'Jar Jar Binks')
      question2.appendChild(jarjar)

      var ul = document.createElement('ul')
      question2.appendChild(ul)
      var lis = []
      var inputs = []
      var labels = []
      for (var i = 0; i < 3; i++) {
        var li = document.createElement('li')
        lis.push(li)
        var input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('name', 'jarjar')
        inputs.push(input)
        var label = document.createElement('label')
        labels.push(label)
      }
      labels[0].innerText = 'Sure'
      lis[0].appendChild(inputs[0])
      lis[0].appendChild(labels[0])
      ul.appendChild(lis[0])
      labels[1].innerText = 'Meh'
      lis[1].appendChild(inputs[1])
      lis[1].appendChild(labels[1])
      ul.appendChild(lis[1])
      labels[2].innerText = 'Half-witted Nerf Herder!'
      lis[2].appendChild(inputs[2])
      lis[2].appendChild(labels[2])
      ul.appendChild(lis[2])

      var button2 = document.createElement('button')
      button2.setAttribute('id', 'q2')
      button2.innerText = 'Submit'
      question2.appendChild(button2)



      var q2 = document.querySelector('#q2')
      //Loading third question
      q2.addEventListener('click', function() {
        
      })

    })
  })
})
