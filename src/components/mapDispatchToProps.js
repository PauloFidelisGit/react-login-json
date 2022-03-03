const mapDispatchToProps = (dispatch) => {
    return {
        setState: (newState) => dispatch({
            type: 'SET_STATE',
            payload: { state: newState }
        }),
    }
}
export default mapDispatchToProps;