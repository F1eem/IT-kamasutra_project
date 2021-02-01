import {SideBar} from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
        }
    }
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps ) (SideBar)
