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
        question2.parentNode.removeChild(question2)
        var question3 = document.createElement('div')
        question3.setAttribute('class', 'question')
        backdrop.appendChild(question3)

        var header3 = document.createElement('h3')
        header3.innerText = 'Click on all Star Wars Movies you enjoyed.'
        question3.appendChild(header3)

        var div3 = document.createElement('div')
        div3.setAttribute('class', 'movies-container')
        question3.appendChild(div3)

        var imgs2 = []
        var h4s2 = []
        var divs2 = []
        for (var i = 0; i < 10; i++) {
          var div = document.createElement('div')
          var img = document.createElement('img')
          var h4 = document.createElement('h4')
          divs2.push(div)
          imgs2.push(img)
          h4s2.push(h4)
        }
        divs2[0].setAttribute('id', '1')
        imgs2[0].setAttribute('src', 'images/episode1.png')
        imgs2[0].setAttribute('alt', 'episode 1')
        h4s2[0].innerText = 'Episode 1'
        divs2[0].appendChild(imgs2[0])
        divs2[0].appendChild(h4s2[0])
        div3.appendChild(divs2[0])
        divs2[1].setAttribute('id', '2')
        imgs2[1].setAttribute('src', 'images/episode2.jpg')
        imgs2[1].setAttribute('alt', 'episode 2')
        h4s2[1].innerText = 'Episode 2'
        divs2[1].appendChild(imgs2[1])
        divs2[1].appendChild(h4s2[1])
        div3.appendChild(divs2[1])
        divs2[2].setAttribute('id', 'clone')
        imgs2[2].setAttribute('src', 'images/clonewars.jpg')
        imgs2[2].setAttribute('alt', 'clone wars')
        h4s2[2].innerText = 'Clone Wars'
        divs2[2].appendChild(imgs2[2])
        divs2[2].appendChild(h4s2[2])
        div3.appendChild(divs2[2])
        divs2[3].setAttribute('id', '3')
        imgs2[3].setAttribute('src', 'images/episode3.jpg')
        imgs2[3].setAttribute('alt', 'episode 3')
        h4s2[3].innerText = 'Episode 3'
        divs2[3].appendChild(imgs2[3])
        divs2[3].appendChild(h4s2[3])
        div3.appendChild(divs2[3])
        divs2[4].setAttribute('id', 'rogue')
        imgs2[4].setAttribute('src', 'images/rogueone.png')
        imgs2[4].setAttribute('alt', 'Rogue One')
        h4s2[4].innerText = 'Rogue One'
        divs2[4].appendChild(imgs2[4])
        divs2[4].appendChild(h4s2[4])
        div3.appendChild(divs2[4])
        divs2[5].setAttribute('id', '4')
        imgs2[5].setAttribute('src', 'images/episode4.jpg')
        imgs2[5].setAttribute('alt', 'episode 4')
        h4s2[5].innerText = 'Episode 4'
        divs2[5].appendChild(imgs2[5])
        divs2[5].appendChild(h4s2[5])
        div3.appendChild(divs2[5])
        divs2[6].setAttribute('id', '5')
        imgs2[6].setAttribute('src', 'images/episode5.jpg')
        imgs2[6].setAttribute('alt', 'episode 5')
        h4s2[6].innerText = 'Episode 5'
        divs2[6].appendChild(imgs2[6])
        divs2[6].appendChild(h4s2[6])
        div3.appendChild(divs2[6])
        divs2[7].setAttribute('id', '6')
        imgs2[7].setAttribute('src', 'images/episode6.jpg')
        imgs2[7].setAttribute('alt', 'episode 6')
        h4s2[7].innerText = 'Episode 6'
        divs2[7].appendChild(imgs2[7])
        divs2[7].appendChild(h4s2[7])
        div3.appendChild(divs2[7])
        divs2[8].setAttribute('id', '7')
        imgs2[8].setAttribute('src', 'images/episode7.jpg')
        imgs2[8].setAttribute('alt', 'episode 7')
        h4s2[8].innerText = 'Episode 7'
        divs2[8].appendChild(imgs2[8])
        divs2[8].appendChild(h4s2[8])
        div3.appendChild(divs2[8])
        divs2[9].setAttribute('id', '8')
        imgs2[9].setAttribute('src', 'images/episode8.jpg')
        imgs2[9].setAttribute('alt', 'episode 8')
        h4s2[9].innerText = 'Episode 8'
        divs2[9].appendChild(imgs2[9])
        divs2[9].appendChild(h4s2[9])
        div3.appendChild(divs2[9])

        var button3 = document.createElement('button')
        button3.innerText = 'Submit'
        button3.setAttribute('id', 'q3')
        question3.appendChild(button3)



        var q3 = document.querySelector('#q3')
        //Loading fourth question
        q3.addEventListener('click', function() {
          question3.parentNode.removeChild(question3)
          var question4 = document.createElement('div')
          question4.setAttribute('class', 'question')
          backdrop.appendChild(question4)

          var header4 = document.createElement('h3')
          header4.innerText = 'The dark side is really cool?'
          question4.appendChild(header4)


          var ul4 = document.createElement('ul')
          question4.appendChild(ul4)
          var lis4 = []
          var inputs4 = []
          var labels4 = []
          for (var i = 0; i < 3; i++) {
            var li4 = document.createElement('li')
            lis4.push(li4)
            var input4 = document.createElement('input')
            input4.setAttribute('type', 'radio')
            input4.setAttribute('name', 'darkside')
            inputs4.push(input4)
            var label4 = document.createElement('label')
            labels4.push(label4)
          }
          labels4[0].innerText = 'Yah! A pathway to many abilities some consider... unnatural'
          lis4[0].appendChild(inputs4[0])
          lis4[0].appendChild(labels4[0])
          ul4.appendChild(lis4[0])
          labels4[1].innerText = 'I respect it... but..'
          lis4[1].appendChild(inputs4[1])
          lis4[1].appendChild(labels4[1])
          ul4.appendChild(lis4[1])
          labels4[2].innerText = 'Hard pass'
          lis4[2].appendChild(inputs4[2])
          lis4[2].appendChild(labels4[2])
          ul4.appendChild(lis4[2])

          var button4 = document.createElement('button')
          button4.setAttribute('id', 'q4')
          button4.innerText = 'Submit'
          question4.appendChild(button4)



          var q4 = document.querySelector('#q4')
          //Loading fifth question
          q4.addEventListener('click', function() {
            question4.parentNode.removeChild(question4)
            var question5 = document.createElement('div')
            question5.setAttribute('class', 'question')
            backdrop.appendChild(question5)

            var header4 = document.createElement('h4')
            header4.innerText = 'Choose a galactic vacation spot:'
            question5.appendChild(header4)

            var container5 = document.createElement('div')
            container5.setAttribute('class', 'vacation-container')
            question5.appendChild(container5)
            console.log(question5)

            var divs5 = []
            var imgs5 = []
            var h4s5 = []
            for (var i = 0; i < 5; i++) {
              var div5 = document.createElement('div')
              var img5 = document.createElement('img')
              var h45 = document.createElement('h4')
              divs5.push(div5)
              imgs5.push(img5)
              h4s5.push(h45)
            }
            divs5[0].setAttribute('id', 'felucia')
            divs5[0].setAttribute('class', 'vacation')
            imgs5[0].setAttribute('src', 'images/felucia.jpeg')
            imgs5[0].setAttribute('alt', 'felucia')
            h4s5[0].innerText = 'Felucia'
            container5.appendChild(divs5[0])
            divs5[0].appendChild(imgs5[0])
            divs5[0].appendChild(h4s5[0])
            divs5[1].setAttribute('id', 'naboo')
            divs5[1].setAttribute('class', 'vacation')
            imgs5[1].setAttribute('src', 'images/naboo.jpeg')
            imgs5[1].setAttribute('alt', 'naboo')
            h4s5[1].innerText = 'Naboo'
            container5.appendChild(divs5[1])
            divs5[1].appendChild(imgs5[1])
            divs5[1].appendChild(h4s5[1])
            divs5[2].setAttribute('id', 'Hoth')
            divs5[2].setAttribute('class', 'vacation')
            imgs5[2].setAttribute('src', 'images/hoth.jpg')
            imgs5[2].setAttribute('alt', 'hoth')
            h4s5[2].innerText = 'Hoth'
            container5.appendChild(divs5[2])
            divs5[2].appendChild(imgs5[2])
            divs5[2].appendChild(h4s5[2])
            divs5[3].setAttribute('id', 'Endor')
            divs5[3].setAttribute('class', 'vacation')
            imgs5[3].setAttribute('src', 'images/endor.jpg')
            imgs5[3].setAttribute('alt', 'endor')
            h4s5[3].innerText = 'Endor'
            container5.appendChild(divs5[3])
            divs5[3].appendChild(imgs5[3])
            divs5[3].appendChild(h4s5[3])
            divs5[4].setAttribute('id', 'mustafar')
            divs5[4].setAttribute('class', 'vacation')
            imgs5[4].setAttribute('src', 'images/mustafar.jpeg')
            imgs5[4].setAttribute('alt', 'mustafar')
            h4s5[4].innerText = 'Mustafar'
            container5.appendChild(divs5[4])
            divs5[4].appendChild(imgs5[4])
            divs5[4].appendChild(h4s5[4])

            var button5 = document.createElement('button')
            button5.setAttribute('id', 'q5')
            button5.innerText = 'Submit'
            question5.appendChild(button5)



            var q5 = document.querySelector('#q5')
            //Loading sixth question
            q5.addEventListener('click', function() {
              question5.parentNode.removeChild(question5)
              var question6 = document.createElement('div')
              question6.setAttribute('class', 'question')
              backdrop.appendChild(question6)

              var header6 = document.createElement('h3')
              header6.innerText = 'Choose your droid pal:'
              question6.appendChild(header6)

              var droidcontainer = document.createElement('div')
              droidcontainer.setAttribute('class', 'droid-container')
              question6.appendChild(droidcontainer)


              var droid = []
              for (var i = 0; i < 3; i++) {
                var div = document.createElement('div')
                div.setAttribute('class', 'droid')
                droid.push(div)
              }

              var r2d2 = document.createElement('img')
              r2d2.setAttribute('src', 'images/r2d2.jpg')
              r2d2.setAttribute('alt', 'r2d2')
              r2d2.setAttribute('id', 'r2d2')
              droid[0].appendChild(r2d2)
              droidcontainer.appendChild(droid[0])

              var or = document.createElement('h4')
              or.innerText = 'or'
              droid[1].appendChild(or)
              droidcontainer.appendChild(droid[1])

              var bb8 = document.createElement('img')
              bb8.setAttribute('src', 'images/bb8.jpg')
              bb8.setAttribute('alt', 'BB8')
              bb8.setAttribute('id', 'bb8')
              droid[2].appendChild(bb8)
              droidcontainer.appendChild(droid[2])

              var button6 = document.createElement('button')
              button6.setAttribute('id', 'q6')
              button6.innerText = "Let's see your results!"
              question6.appendChild(button6)
            })
        })
        })
      })

    })
  })
})
