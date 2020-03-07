const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'},
        {id: '4', title: 'save luigi from mansion', content: 'blah blah blah'},
    ]
}

// when we don't have a state it will take 'initState' as the initial state!
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }

    return state
};

export default projectReducer;