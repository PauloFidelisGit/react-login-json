import { connect } from "react-redux";
import mapDispatchToProps from "../../components/mapDispatchToProps";
import mapStateToProps from "../../components/mapStateToProps";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Main = ({ state }) => {
    const history = useHistory();

    useEffect(() => {
        if (state !== 'sucess') {
            history.push("/")
        }
    }, [state])

    return (
        <>
            <p>Main</p>
        </>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)