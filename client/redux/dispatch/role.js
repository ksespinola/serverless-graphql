import { createRole } from './../ducks/role';
import { bindActionCreators } from 'redux';

export default dispatch => ({
  createRole: name => dispatch(createRole(name)),
});