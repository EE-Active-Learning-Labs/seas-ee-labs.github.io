/* EDIT THIS FILE to manage the course list.
   Every course gets a page automatically at courses/course/#id.
   Optional fields for any course
     title        a short course title shown under the course number
     access       text that replaces the default access message
     canvas       link to the course Canvas site
     labGuide     link to that course's latest lab activities
     labGuideLabel  text for the lab guide button
     extras       more links, as a list like [{label:'Name', href:'https://...'}]
*/
window.EE_COURSE_DEFAULTS = {
  access: 'Access procedures for this course are posted on the course Canvas site.',
  labFolder: 'https://drive.google.com/drive/folders/1n4fMJf8UUFInBMncaAQJ-m7vMAUm99gx?usp=drive_link'
};
window.EE_COURSES = [
  {id:'es50',code:'ES 50'},
  {id:'es55',code:'ES 55'},
  {id:'es100',code:'ES 100'},
  {id:'es145',code:'ES 145'},
  {id:'es151',code:'ES 151'},
  {id:'es152',code:'ES 152'},
  {id:'es154',code:'ES 154'},
  {id:'es155',code:'ES 155'},
  {id:'es156',code:'ES 156'},
  {id:'es157',code:'ES 157'},
  {id:'es158',code:'ES 158'},
  {id:'es159',code:'ES 159'},
  {id:'es173',code:'ES 173',title:'Introduction to Electronic and Photonic Devices',extras:[{label:'Lab 2 walkthrough, photoelectrochemical etching',href:'../es173-lab2/'}]},
  {id:'es176',code:'ES 176'},
  {id:'es177',code:'ES 177'},
  {id:'es223',code:'ES 223'},
  {id:'es227',code:'ES 227'},
  {id:'ese6',code:'ESE 6'},
  {id:'ese135',code:'ESE 135'},
  {id:'ese160',code:'ESE 160'},
  {id:'ese166',code:'ESE 166'},
  {id:'ence10',code:'EnCE 10'},
  {id:'ence50',code:'EnCE 50'},
  {id:'ece215',code:'ECE 215'},
  {id:'cs1410',code:'CS 1410'},
  {id:'cs1411',code:'CS 1411'},
  {id:'cs1480',code:'CS 1480'},
  {id:'cs286cee',code:'CS 286 CEE'},
  {id:'be124-es224',code:'BE 124 / ES 224'},
  {id:'be129',code:'BE 129'},
  {id:'tvi',code:'TVI'}
];
