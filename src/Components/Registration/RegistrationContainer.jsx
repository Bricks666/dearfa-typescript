import { connect } from "react-redux";
import { mapDispatchToProps } from "../../Redux/ToProps/mapDispatchToProps";
import { mapStateToProps } from "../../Redux/ToProps/mapStateToProps";
import { Registration } from "./Registration";
import { REG } from "../../Redux/ToProps/componentsConstants";

export const RegistrationContainer = connect(
  mapStateToProps(REG),
  mapDispatchToProps(REG)
)(Registration);