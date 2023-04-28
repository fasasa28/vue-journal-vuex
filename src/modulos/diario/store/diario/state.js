// El state es reactivo, es donde se almacena la información

export default () => ({
    isLoading: true,
    entries: [{
        id: new Date().getTime(),
        date: new Date().toDateString(),
        text: 'sadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        picture: null,
    },
    {
        id: new Date().getTime() + 100,
        date: new Date().toDateString(),
        text: 'sadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        picture: null,
    },
    {
        id: new Date().getTime() + 200,
        date: new Date().toDateString(),
        text: 'sadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        picture: null,
    }    
]
})