document.addEventListener('DOMContentLoaded', function () {

  var question = document.querySelector('.question')
  var q0 = document.querySelector('#q0')
  var backdrop = document.querySelector('.backdrop')
  var answers = ["", "", "", "", ""]
  var boxes = document.querySelectorAll('#box')

// Loading first question
  q0.addEventListener('click', function() {
    q0.parentNode.removeChild(q0)

    boxes[0].setAttribute('class', '')
    boxes[1].setAttribute('class', 'current')

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
    imgs[0].setAttribute('id', 'senator')
    imgs[0].setAttribute('id', 'job')
    divs[0].setAttribute('class', 'vocation')
    imgs[0].setAttribute('src', 'images/senator.jpg')
    imgs[0].setAttribute('alt', 'senator')
    h4s[0].innerText = 'Galactic Senator'
    container.appendChild(divs[0])
    divs[0].appendChild(imgs[0])
    divs[0].appendChild(h4s[0])
    imgs[1].setAttribute('id', 'bountyhunter')
    imgs[1].setAttribute('id', 'job')
    divs[1].setAttribute('class', 'vocation')
    imgs[1].setAttribute('src', 'images/bountyhunter.jpg')
    imgs[1].setAttribute('alt', 'bounty-hunter')
    h4s[1].innerText = 'Bounty Hunter'
    container.appendChild(divs[1])
    divs[1].appendChild(imgs[1])
    divs[1].appendChild(h4s[1])
    imgs[2].setAttribute('id', 'musician')
    imgs[2].setAttribute('id', 'job')
    divs[2].setAttribute('class', 'vocation')
    imgs[2].setAttribute('src', 'images/musician.jpg')
    imgs[2].setAttribute('alt', 'musician')
    h4s[2].innerText = 'Musician'
    container.appendChild(divs[2])
    divs[2].appendChild(imgs[2])
    divs[2].appendChild(h4s[2])
    imgs[3].setAttribute('id', 'beauty')
    imgs[3].setAttribute('id', 'job')
    divs[3].setAttribute('class', 'vocation')
    imgs[3].setAttribute('src', 'images/beauty.png')
    imgs[3].setAttribute('alt', 'beauty-contestant')
    h4s[3].innerText = 'Beauty Contestant'
    container.appendChild(divs[3])
    divs[3].appendChild(imgs[3])
    divs[3].appendChild(h4s[3])
    imgs[4].setAttribute('id', 'pilot')
    imgs[4].setAttribute('id', 'job')
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



    // The code that allows for a target picture to be selected
    var jobs = document.querySelectorAll('#job')
    for (var i = 0; i < jobs.length; i++) {
      jobs[i].addEventListener('click', function(e) {
        var eClasses = e.target.classList
        if (eClasses.contains('selected')) {
          e.target.classList.remove('selected')
        } else {
          for (var i = 0; i < jobs.length; i++) {
            jobs[i].classList.remove('selected')
          }
          e.target.classList.add('selected')
        }
      })
    }


    // Loading second question
    q1.addEventListener('click', function() {
      question.parentNode.removeChild(question)
      var question2 = document.createElement('div')
      question2.setAttribute('class', 'question')
      backdrop.appendChild(question2)

      boxes[1].setAttribute('class', '')
      boxes[2].setAttribute('class', 'current')

      var jarjar = document.createElement('img')
      jarjar.setAttribute('src', 'images/jarjar.jpg')
      jarjar.setAttribute('alt', 'Jar Jar Binks')
      question2.appendChild(jarjar)

      var ul = document.createElement('ul')
      ul.setAttribute('id', 'jarjarbinks')
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
      inputs[0].setAttribute('id', 'sure')
      lis[0].appendChild(inputs[0])
      lis[0].appendChild(labels[0])
      ul.appendChild(lis[0])
      labels[1].innerText = 'Meh'
      inputs[1].setAttribute('id', 'meh')
      lis[1].appendChild(inputs[1])
      lis[1].appendChild(labels[1])
      ul.appendChild(lis[1])
      labels[2].innerText = 'Half-witted Nerf Herder!'
      inputs[2].setAttribute('id', 'no')
      lis[2].appendChild(inputs[2])
      lis[2].appendChild(labels[2])
      ul.appendChild(lis[2])


      // Adding answers array algorithm for q2
      ul.addEventListener('click', function(e) {
        if (document.getElementById('sure').checked) {
          answers[1] = 'sure'
        } else if (document.getElementById('meh').checked) {
          answers[1] = 'meh'
        } else if (document.getElementById('no').checked) {
          answers[1] = 'no'
        }
      })

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

        boxes[2].setAttribute('class', '')
        boxes[3].setAttribute('class', 'current')

        var header3 = document.createElement('h3')
        header3.innerText = 'Click on ALL Star Wars Movies you enjoyed.'
        question3.appendChild(header3)

        var div3 = document.createElement('div')
        div3.setAttribute('class', 'movies-container')
        question3.appendChild(div3)

        var imgs2 = []
        var h4s2 = []
        var divs2 = []
        for (var i = 0; i < 10; i++) {
          var div = document.createElement('div')
          div.setAttribute('class', 'movie-div')
          var img = document.createElement('img')
          var h4 = document.createElement('h4')
          divs2.push(div)
          imgs2.push(img)
          h4s2.push(h4)
        }
        imgs2[0].setAttribute('id', 'movies')
        imgs2[0].setAttribute('src', 'images/episode1.png')
        imgs2[0].setAttribute('alt', 'episode 1')
        h4s2[0].innerText = 'Episode 1'
        divs2[0].appendChild(imgs2[0])
        divs2[0].appendChild(h4s2[0])
        div3.appendChild(divs2[0])
        imgs2[1].setAttribute('id', 'movies')
        imgs2[1].setAttribute('src', 'images/episode2.jpg')
        imgs2[1].setAttribute('alt', 'episode 2')
        h4s2[1].innerText = 'Episode 2'
        divs2[1].appendChild(imgs2[1])
        divs2[1].appendChild(h4s2[1])
        div3.appendChild(divs2[1])
        imgs2[2].setAttribute('id', 'movies')
        imgs2[2].setAttribute('src', 'images/clonewars.jpg')
        imgs2[2].setAttribute('alt', 'clone wars')
        h4s2[2].innerText = 'Clone Wars'
        divs2[2].appendChild(imgs2[2])
        divs2[2].appendChild(h4s2[2])
        div3.appendChild(divs2[2])
        imgs2[3].setAttribute('id', 'movies')
        imgs2[3].setAttribute('src', 'images/episode3.jpg')
        imgs2[3].setAttribute('alt', 'episode 3')
        h4s2[3].innerText = 'Episode 3'
        divs2[3].appendChild(imgs2[3])
        divs2[3].appendChild(h4s2[3])
        div3.appendChild(divs2[3])
        imgs2[4].setAttribute('id', 'movies')
        imgs2[4].setAttribute('src', 'images/rogueone.png')
        imgs2[4].setAttribute('alt', 'Rogue One')
        h4s2[4].innerText = 'Rogue One'
        divs2[4].appendChild(imgs2[4])
        divs2[4].appendChild(h4s2[4])
        div3.appendChild(divs2[4])
        imgs2[5].setAttribute('id', 'movies')
        imgs2[5].setAttribute('src', 'images/episode4.jpg')
        imgs2[5].setAttribute('alt', 'episode 4')
        h4s2[5].innerText = 'Episode 4'
        divs2[5].appendChild(imgs2[5])
        divs2[5].appendChild(h4s2[5])
        div3.appendChild(divs2[5])
        imgs2[6].setAttribute('id', 'movies')
        imgs2[6].setAttribute('src', 'images/episode5.jpg')
        imgs2[6].setAttribute('alt', 'episode 5')
        h4s2[6].innerText = 'Episode 5'
        divs2[6].appendChild(imgs2[6])
        divs2[6].appendChild(h4s2[6])
        div3.appendChild(divs2[6])
        imgs2[7].setAttribute('id', 'movies')
        imgs2[7].setAttribute('src', 'images/episode6.jpg')
        imgs2[7].setAttribute('alt', 'episode 6')
        h4s2[7].innerText = 'Episode 6'
        divs2[7].appendChild(imgs2[7])
        divs2[7].appendChild(h4s2[7])
        div3.appendChild(divs2[7])
        imgs2[8].setAttribute('id', 'movies')
        imgs2[8].setAttribute('src', 'images/episode7.jpg')
        imgs2[8].setAttribute('alt', 'episode 7')
        h4s2[8].innerText = 'Episode 7'
        divs2[8].appendChild(imgs2[8])
        divs2[8].appendChild(h4s2[8])
        div3.appendChild(divs2[8])
        imgs2[9].setAttribute('id', 'movies')
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


        //Adding the code to allow users to select movies they enjoy
        var moviesList = document.querySelectorAll('#movies')
        for (var i = 0; i < moviesList.length; i++) {
          moviesList[i].addEventListener('click', function(e) {
            var eClasses = e.target.classList
            if (eClasses.contains('selected')) {
              e.target.classList.remove('selected')
            } else {
              e.target.classList.add('selected')
            }
          })
        }




        var q3 = document.querySelector('#q3')
        //Loading fourth question
        q3.addEventListener('click', function() {
          question3.parentNode.removeChild(question3)
          var question4 = document.createElement('div')
          question4.setAttribute('class', 'question')
          backdrop.appendChild(question4)

          boxes[3].setAttribute('class', '')
          boxes[4].setAttribute('class', 'current')

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
          inputs4[0].setAttribute('id', 'ya')
          lis4[0].appendChild(inputs4[0])
          lis4[0].appendChild(labels4[0])
          ul4.appendChild(lis4[0])
          labels4[1].innerText = 'I respect it... but..'
          inputs4[1].setAttribute('id', 'respect')
          lis4[1].appendChild(inputs4[1])
          lis4[1].appendChild(labels4[1])
          ul4.appendChild(lis4[1])
          labels4[2].innerText = 'Hard pass'
          inputs4[2].setAttribute('id', 'pass')
          lis4[2].appendChild(inputs4[2])
          lis4[2].appendChild(labels4[2])
          ul4.appendChild(lis4[2])



          // Adding answers array algorithm for q2
          ul4.addEventListener('click', function(e) {
            if (document.getElementById('ya').checked) {
              answers[2] = 'yah'
            } else if (document.getElementById('respect').checked) {
              answers[2] = 'respect'
            } else if (document.getElementById('pass').checked) {
              answers[2] = 'pass'
            }
          })

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

            boxes[4].setAttribute('class', '')
            boxes[5].setAttribute('class', 'current')

            var header4 = document.createElement('h4')
            header4.innerText = 'Choose a galactic vacation spot:'
            question5.appendChild(header4)

            var container5 = document.createElement('div')
            container5.setAttribute('class', 'vacation-container')
            question5.appendChild(container5)

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
            imgs5[0].setAttribute('id', 'felucia')
            imgs5[0].setAttribute('id', 'vacation-spot')
            divs5[0].setAttribute('class', 'vacation')
            imgs5[0].setAttribute('src', 'images/felucia.jpeg')
            imgs5[0].setAttribute('alt', 'felucia')
            h4s5[0].innerText = 'Felucia'
            container5.appendChild(divs5[0])
            divs5[0].appendChild(imgs5[0])
            divs5[0].appendChild(h4s5[0])
            imgs5[1].setAttribute('id', 'naboo')
            imgs5[1].setAttribute('id', 'vacation-spot')
            divs5[1].setAttribute('class', 'vacation')
            imgs5[1].setAttribute('src', 'images/naboo.jpeg')
            imgs5[1].setAttribute('alt', 'naboo')
            h4s5[1].innerText = 'Naboo'
            container5.appendChild(divs5[1])
            divs5[1].appendChild(imgs5[1])
            divs5[1].appendChild(h4s5[1])
            imgs5[2].setAttribute('id', 'alderaan')
            imgs5[2].setAttribute('id', 'vacation-spot')
            divs5[2].setAttribute('class', 'vacation')
            imgs5[2].setAttribute('src', 'images/alderaan.jpg')
            imgs5[2].setAttribute('alt', 'alderaan')
            h4s5[2].innerText = 'Alderann (pre-blow-up)'
            container5.appendChild(divs5[2])
            divs5[2].appendChild(imgs5[2])
            divs5[2].appendChild(h4s5[2])
            imgs5[3].setAttribute('id', 'endor')
            imgs5[3].setAttribute('id', 'vacation-spot')
            divs5[3].setAttribute('class', 'vacation')
            imgs5[3].setAttribute('src', 'images/endor.jpg')
            imgs5[3].setAttribute('alt', 'endor')
            h4s5[3].innerText = 'Endor'
            container5.appendChild(divs5[3])
            divs5[3].appendChild(imgs5[3])
            divs5[3].appendChild(h4s5[3])
            imgs5[4].setAttribute('id', 'coruscant')
            imgs5[4].setAttribute('id', 'vacation-spot')
            divs5[4].setAttribute('class', 'vacation')
            imgs5[4].setAttribute('src', 'images/coruscant.jpeg')
            imgs5[4].setAttribute('alt', 'coruscant')
            h4s5[4].innerText = 'Coruscant (also, pre-blow-up)'
            container5.appendChild(divs5[4])
            divs5[4].appendChild(imgs5[4])
            divs5[4].appendChild(h4s5[4])

            var button5 = document.createElement('button')
            button5.setAttribute('id', 'q5')
            button5.innerText = 'Submit'
            question5.appendChild(button5)



            // Adding the code that allows for selection of a vacation spot
            var vacationSpots = document.querySelectorAll('#vacation-spot')
            for (var i = 0; i < vacationSpots.length; i++) {
              vacationSpots[i].addEventListener('click', function(e) {
                var eClasses = e.target.classList
                if (eClasses.contains('selected')) {
                  e.target.classList.remove('selected')
                } else {
                  for (var i = 0; i < vacationSpots.length; i++) {
                    vacationSpots[i].classList.remove('selected')
                  }
                  e.target.classList.add('selected')
                }
              })
            }



            var q5 = document.querySelector('#q5')
            //Loading sixth question
            q5.addEventListener('click', function() {
              question5.parentNode.removeChild(question5)
              var question6 = document.createElement('div')
              question6.setAttribute('class', 'question')
              backdrop.appendChild(question6)

              boxes[5].setAttribute('class', '')
              boxes[6].setAttribute('class', 'current')

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
              r2d2.setAttribute('alt', 'R2D2')
              r2d2.setAttribute('id', 'r2d2')
              r2d2.setAttribute('id', 'droid-type')
              droid[0].appendChild(r2d2)
              var r2d2name = document.createElement('h4')
              r2d2name.innerText = "R2D2"
              droid[0].appendChild(r2d2name)
              droidcontainer.appendChild(droid[0])

              var or = document.createElement('h4')
              or.innerText = 'or'
              droid[1].appendChild(or)
              droid[1].setAttribute('style', 'margin-top: 40px; margin-bottom: 40px; font-style: italic;')
              droidcontainer.appendChild(droid[1])

              var bb8 = document.createElement('img')
              bb8.setAttribute('src', 'images/bb8.jpg')
              bb8.setAttribute('alt', 'BB8')
              bb8.setAttribute('id', 'bb8')
              bb8.setAttribute('id', 'droid-type')
              droid[2].appendChild(bb8)
              var bb8name = document.createElement('h4')
              bb8name.innerText = 'BB8'
              droid[2].appendChild(bb8name)
              droidcontainer.appendChild(droid[2])

              var button6 = document.createElement('button')
              button6.setAttribute('id', 'q6')
              button6.innerText = "Let's see your results!"
              question6.appendChild(button6)



              // Code that allows user to select a droid
              var droids = document.querySelectorAll('#droid-type')
              for (var i = 0; i < droids.length; i++) {
                droids[i].addEventListener('click', function(e) {
                  var eClasses = e.target.classList
                  if (eClasses.contains('selected')) {
                    e.target.classList.remove('selected')
                  } else {
                    for (var i = 0; i < droids.length; i++) {
                      droids[i].classList.remove('selected')
                    }
                    e.target.classList.add('selected')
                  }
                })
              }



              var q6 = document.querySelector('#q6')
              // Laoding answer page
              q6.addEventListener('click', function() {
                question6.parentNode.removeChild(question6)
                var answer = document.createElement('div')
                answer.setAttribute('class', 'question')
                backdrop.appendChild(answer)

                boxes[6].setAttribute('class', '')
                boxes[7].setAttribute('class', 'current')

                var header7 = document.createElement('h3')
                header7.innerText = 'And your lightsaber is...'
                answer.appendChild(header7)



                // filling out answers algorithm
                //q1
                for (var i = 0; i < jobs.length; i++) {
                  if (jobs[i].classList.contains('selected')) {
                    answers[0] = jobs[i].alt
                  }
                }
                // q2 - up in q2 section
                // q4 - up in q4 section
                // q5
                for (var i = 0; i < vacationSpots.length; i++) {
                  if (vacationSpots[i].classList.contains('selected')) {
                    answers[3] = vacationSpots[i].alt
                  }
                }
                // q6
                for (var i = 0; i < droids.length; i++) {
                  if (droids[i].classList.contains('selected')) {
                    answers[4] = droids[i].alt
                  }
                }
                console.log(answers)



                //algorithm for figuring out which lightsaber
                var lightsaber;
                var count = 0;

                for (var i = 0; i < answers.length; i++) {
                  if (answers[i] === "") {
                    count++
                  }
                }

                var ansHeader = document.createElement('h2')
                var ansImg = document.createElement('img')
                ansHeader.setAttribute('style', 'margin-top: 60px')
                var ansParagraph = document.createElement('h4')

                if (answers[0] === '' && answers[1] === '' && answers[2] === '' && answers[3] === '' && answers[4] === '') {
                  ansHeader.innerText = 'BLASTER'
                  ansImg.setAttribute('src', 'images/blaster.png')
                  ansImg.setAttribute('alt', 'blaster')
                  ansParagraph.innerText = "Looks like your not a force wielder... a blaster is the weapon for you!"
                } else if (count > 2) {
                  ansHeader.innerText = 'DARKSABER'
                  ansImg.setAttribute('src', 'images/darksaber.jpg')
                  ansImg.setAttribute('alt', 'darksaber')
                  ansParagraph.innerText = "An ancient and unique lightsaber design with only one previously created. It has since been stolen from the Jedi temple."
                } else if (answers[0] === 'senator') {
                  if (answers[3] === ('coruscant' || 'alderaan')) {
                    ansHeader.innerText = 'GREEN DOUBLE-BLADED LIGHTSABER'
                    ansImg.setAttribute('src', 'images/greendouble.jpg')
                    ansImg.setAttribute('alt', 'green double-bladed lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = "A single hilt with a beam emmiter at both ends, the double-bladed sword was first invented by the Sith empire but the design has since been used by the Jedi."
                  } else {
                    ansHeader.innerText = 'GREEN SINGLE-BLADED LIGHTSABER'
                    ansImg.setAttribute('src', 'images/greensingle.jpg')
                    ansImg.setAttribute('alt', 'green single-bladed lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  }
                } else if (answers[0] === 'pilot') {
                  if (answers[3] === ('endor' || 'felucia')) {
                    ansHeader.innerText = 'BLUE DOUBLE-BLADED LIGHTSABER'
                    ansImg.setAttribute('src', 'images/bluedouble.jpg')
                    ansImg.setAttribute('alt', 'blue double-bladed lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  } else {
                    ansHeader.innerText = 'BLUE SINGLE-BLADED LIGHTSABER'
                    ansImg.setAttribute('src', 'images/bluesingle.jpg')
                    ansImg.setAttribute('alt', 'blue single-bladed lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  }
                } else if (answers[0] === 'bounty-hunter') {
                  if (answers[3] === ('naboo' || 'felucia')) {
                    ansHeader.innerText = 'RED DOUBLE-BLADED LIGHTSABER'
                    ansImg.setAttribute('src', 'images/reddouble.jpg')
                    ansImg.setAttribute('alt', 'red double-bladed lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  } else if (answers[3] === 'endor') {
                    ansHeader.innerText = 'RED CROSS-GUARD LIGHTSABER'
                    ansImg.setAttribute('src', 'images/redcrossgaurd.png')
                    ansImg.setAttribute('alt', 'red cross-guard lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  } else {
                    ansHeader.innerText = 'RED SINGLE-BLADED LIGHTSABER'
                    ansImg.setAttribute('src', 'images/redsingle.png')
                    ansImg.setAttribute('alt', 'red single-bladed lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  }
                } else if (answers[0] === 'musician' && answers[2] === 'yah') {
                  ansHeader.innerText = 'PURPLE SINGLE-BLADED LIGHTSABER'
                  ansImg.setAttribute('src', 'images/purple.jpg')
                  ansImg.setAttribute('alt', 'purple single-bladed lightsaber')
                  ansImg.setAttribute('style', 'height: 300px;')
                  ansParagraph.innerText = ""
                } else if (answers[0] === 'musician' && answers[2] === ('respect' || '')) {
                  if (answers[4] === ('BB8')) {
                    ansHeader.innerText = 'YELLOW PIKE-STAFF LIGHTSABER'
                    ansImg.setAttribute('src', 'images/yellowdouble.png')
                    ansImg.setAttribute('alt', 'yellow pike-staff lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  } else {
                    ansHeader.innerText = 'YELLOW SINGLE-BLADED LIGHTSABER'
                    ansImg.setAttribute('src', 'images/yellowsingle.jpg')
                    ansImg.setAttribute('alt', 'yellow single-bladed lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  }
                } else if (answers[0] === 'pass') {
                  ansHeader.innerText = 'WHITE SINGLE-BLADED LIGHTSABER'
                  ansImg.setAttribute('src', 'images/whitesingle.png')
                  ansImg.setAttribute('alt', 'white single-bladed lightsaber')
                  ansImg.setAttribute('style', 'height: 300px;')
                  ansParagraph.innerText = ""
                } else if (answers[0] === 'beauty-contestant' && answers[2] === 'respect') {
                  ansHeader.innerText = 'PURPLE SINGLE-BLADED LIGHTSABER'
                  ansImg.setAttribute('src', 'images/purple.jpg')
                  ansImg.setAttribute('alt', 'purple single-bladed lightsaber')
                  ansImg.setAttribute('style', 'height: 300px;')
                  ansParagraph.innerText = ""
                } else if (answers[0] === 'beauty-contestant' && answers[2] === 'yah') {
                  ansHeader.innerText = 'WHITE SINGLE-BLADED LIGHTSABER'
                  ansImg.setAttribute('src', 'images/whitesingle.png')
                  ansImg.setAttribute('alt', 'white single-bladed lightsaber')
                  ansImg.setAttribute('style', 'height: 300px;')
                  ansParagraph.innerText = ""
                } else if (answers[0] === 'beauty-contestant' && answers[2] === ('meh' || '')) {
                  if (answers[3] === ('coruscant' || 'naboo')) {
                    ansHeader.innerText = 'YELLOW PIKE-STAFF LIGHTSABER'
                    ansImg.setAttribute('src', 'images/yellowdouble.png')
                    ansImg.setAttribute('alt', 'yellow pike-staff lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  } else {
                    ansHeader.innerText = 'YELLOW SINGLE-BLADED LIGHTSABER'
                    ansImg.setAttribute('src', 'images/yellowsingle.jpg')
                    ansImg.setAttribute('alt', 'yellow single-bladed lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                  }
                } else if (answers[0] === '' && answers[2] === 'yah') {
                  ansHeader.innerText = 'WHITE SINGLE-BLADED LIGHTSABER'
                  ansImg.setAttribute('src', 'images/whitesingle.png')
                  ansImg.setAttribute('alt', 'white single-bladed lightsaber')
                  ansImg.setAttribute('style', 'height: 300px;')
                  ansParagraph.innerText = ""
                } else if (answers[0] === '' && answers[2] === 'respect') {
                  if (answers[4] === 'R2D2') {
                    ansHeader.innerText = 'YELLOW PIKE-STAFF LIGHTSABER'
                    ansImg.setAttribute('src', 'images/yellowdouble.png')
                    ansImg.setAttribute('alt', 'yellow pike-staff lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                    ansParagraph.innerText = ""
                  } else {
                    ansHeader.innerText = 'YELLOW SINGLE-BLADED LIGHTSABER'
                    ansImg.setAttribute('src', 'images/yellowsingle.jpg')
                    ansImg.setAttribute('alt', 'yellow single-bladed lightsaber')
                    ansImg.setAttribute('style', 'height: 300px;')
                  }
                } else if (answers[0] === '' && answers[2] === ('' || 'meh')) {
                  ansHeader.innerText = 'PURPLE SINGLE-BLADED LIGHTSABER'
                  ansImg.setAttribute('src', 'images/purple.jpg')
                  ansImg.setAttribute('alt', 'purple single-bladed lightsaber')
                  ansImg.setAttribute('style', 'height: 300px;')
                  ansParagraph.innerText = ""
                } else {
                  alert('default')
                  ansHeader.innerText = 'BLUE SINGLE-BLADED LIGHTSABER'
                  ansImg.setAttribute('src', 'images/bluesingle.jpg')
                  ansImg.setAttribute('alt', 'blue single-bladed lightsaber')
                  ansImg.setAttribute('style', 'height: 300px;')
                  ansParagraph.innerText = ""
                }

                answer.appendChild(ansHeader)
                answer.appendChild(ansImg)
                answer.appendChild(ansParagraph)



                var playAgain = document.createElement('button')
                playAgain.innerText = 'Click to play again!'
                answer.appendChild(playAgain)

                playAgain.addEventListener('click', function() {
                  location.reload();
                })

              })
            })
          })
        })
      })
    })
  })
})
