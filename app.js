const chalk = require('chalk')
const getMyNotes = require('./notes.js')
const yargs = require('yargs')
const { demandOption } = require('yargs')

yargs.command({
    command: 'list',
    describe: 'List out all a notes',
    handler: function(){
        console.log('Listing out all notes!')
    }
})

//Create remove command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Command body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('myTitle: ' + argv.title)
        console.log('Command body: ' + argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('Removing a note!')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the note',
    handler: function(){
        console.log('Reading the note')
    }
})
yargs.parse()