const fs = require('fs')

const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((item) => {
    return item.title === title
  })
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes)
    console.log('New Note added')
  } else {
    console.log('Note Title Taken')
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const newNote = notes.filter((item) => {
    return item.title !== title
  })
  saveNotes(newNote)
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
}
