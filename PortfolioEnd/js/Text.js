const txtAnim = document.querySelector('.Text');

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay(20)
.typeString('<strong>Bonjour a toi</strong> !')
.pauseFor(300)
.deleteChars(15)
.typeString('<strong>Moi c\'est Leroy Bryan</strong>')
.pauseFor(300)
.typeString("<strong>, Dev Full-Stack</strong> !")
.pauseFor(800)
.deleteChars(13)
.typeString('<span style="color: #ff0000"><strong> CSS</strong></span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #00ff40"><strong> JavaScript</strong></span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #ff0000"><strong> HTML</strong></span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #00ff40"><strong> EN FORMATION</strong></span> !')
.pauseFor(1000)
.deleteChars(49)
.typeString('<span style="color: white"><strong>Bienvenue sur mon </strong></span>')
.typeString('<span style="color: #ff0000"><strong>Port</strong></span>')
.typeString('<span style="color: #00ff40"><strong>folio!</strong></span>')
.pauseFor(1000)
.deleteChars(40)
.start()

const txtAnim1 = document.querySelector('.Titre');

new Typewriter(txtAnim1, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay(20)
.pauseFor(1000)
.typeString('<span style="color: #ffffff"><strong>Présentation</strong></span>')
.pauseFor(1500)
.start()

const txtAnim2 = document.querySelector('.Formation h3');

new Typewriter(txtAnim2, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay(20)
.pauseFor(1000)
.typeString('<span style="color: #fff"><strong>MES </strong></span>')
.typeString('<span style="color: #00ff40"><strong>FORMATIONS </strong></span>')
.typeString('<span style="color: #fff"><strong>/ </strong></span>')
.typeString('<span style="color: #ff0000"><strong>ÉXPERIENCES !</strong></span>')
.pauseFor(1500)
.start()

const txtAnim3 = document.querySelector('.Projets h3');

new Typewriter(txtAnim3, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay(20)
.pauseFor(1000)
.typeString('<span style="color: #fff"><strong>MES </strong></span>')
.typeString('<span style="color: #00ff40"><strong>PROJETS</strong></span>')
.pauseFor(1500)
.start()