import React, { Component, Fragment } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// Shared components
import SearchInput from '../../../../components/SearchInput';

// Component styles
import styles from './styles';

class UsersToolbar extends Component {
  render() {
    const { classes, className, selectedUsers } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <div className={classes.row}>
          <span className={classes.spacer} />
          {selectedUsers.length > 0 && (
            <IconButton
              className={classes.deleteButton}
              onClick={this.handleDeleteUsers}
            >
              <DeleteIcon />
            </IconButton>
          )}
          {selectedUsers.length === 1 && (
            <Link href="/buat-pekerjaan">
              <Button 
                className={classes.EditButton}
                color="primary"
                size="small"
                variant="outlined"
              >
                Edit Pekerjaan
              </Button>
            </Link>
          )}
          <Link href="/buat-pekerjaan">
            <Button 
              color="primary"
              size="small"
              variant="outlined"
            >
              Tambah Pekerjaan
            </Button>
          </Link>
        </div>
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search user"
          />
          <span className={classes.spacer} />
        </div>
      </div>
    );
  }
}

UsersToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectedUsers: PropTypes.array
};

UsersToolbar.defaultProps = {
  selectedUsers: []
};

export default withStyles(styles)(UsersToolbar);
