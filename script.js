let timeLine = gsap.timeline({ defaults: { duration:1}})
timeLine
.to('.image', {opacity:1, scale:1, ease:'bounce'})
.from('.document', {opacity:0, rotate:500, stagger: 0.3}, 0.2)
.from('.text', {opacity:0, ease:'cric'},0.4)
.from('.bar', {width:'1%' , ease:'expo'}, 0.1)
.from('.size',{textContent:0, ease:'expo', snap:{textContent:1}}, 0.1)
.from('.arrow', {rotate:240, ease:'bounce', transformOrigin:'0% 0'}, 0.5)