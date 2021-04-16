// const square = function (x) {
//   return x * x
// }

// const square = (x) => {
//   console.log(x * x)
// // }
// const square = (x) => console.log(x * x)

// square(3)

const event = {
  name: 'Birthday Party',
  guestList: ['John', 'Mike', 'Suzy'],
  printGuestList() {
    console.log('Guest List for ' + this.name)
    this.guestList.forEach((item) => {
      console.log(`${item} is attending the ${this.name} `)
    })
  },
}

event.printGuestList()
