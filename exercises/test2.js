/ const schoolList = [ 
  // { city: 'paris', students: 51 },
  // { city: 'toulouse', students: 30 },
  // { city: 'orleans', students: 30 },
  // { city: 'lille', students: 23 },
  // { city: 'strasbourg', students: 17 },
// ]

 
// const getTotalStudents = list => {
// let totalStudents = 0
  
// list.forEach(school => {
// totalStudents += school.students
// })

// return totalStudents
 
// }

// console.log(getTotalStudents(schoolList))

const schoolList = [ 
  { city: 'la loupe', students: 14, languages: [ 'js' ] },
  { city: 'paris', students: 51, languages: [ 'js' ] },
  { city: 'toulouse', students: 32, languages: [ 'js', 'java' ] },
  { city: 'bordeaux', students: 28, languages: [ 'js', 'java' ] },
  { city: 'reims', students: 20, languages: [ 'js' ] },
  { city: 'lyon', students: 21, languages: [ 'js' ] },
  { city: 'strasbourg', students: 17, languages: [ 'php' ] },
  { city: 'lille', students: 23, languages: [ 'php' ] },
  { city: 'orleans', students: 30, languages: [ 'php' ] },
  { city: 'biarritz', students: 0, languages: [ 'java' ] },
]

const getCity = school => school.city 

const getSchoolCities = schools => {
  return schools.map(getCity)
}
console.log(getSchoolCities(schoolList))





const isBigSchool = school => school.students >= 30

const getBiggestSchools = schools => schools.filter(isBigSchool)


console.log(getBiggestSchools(schoolList))

