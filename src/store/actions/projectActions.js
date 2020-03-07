export const createProject = (project) => {
    // return (
    //     type: 'ADD_PROJECT',
    //     project: project,
    // )

    // thunk allow us to return 2 things
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();

        // The method firestore.collection is asynchronous. It returns a promise!!
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Daniel',
            authorLastName: 'Prol',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch( (err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        });

        
    }
};