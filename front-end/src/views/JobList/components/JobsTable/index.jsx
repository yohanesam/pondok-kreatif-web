import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';

// Shared components
import Portlet from '../../../../components/Portlet';
import PortletContent from '../../../../components/PortletContent';

// Component styles
import styles from './styles';

class JobsTable extends Component {
  state = {
    selectedJobs: [],
    rowsPerPage: 10,
    page: 0
  };

  handleSelectAll = event => {
    const { jobs, onSelect } = this.props;

    let selectedJobs;

    if (event.target.checked) {
      selectedJobs = jobs.map(job => job.id);
    } else {
      selectedJobs = [];
    }

    this.setState({ selectedJobs });

    onSelect(selectedJobs);
  };

  handleSelectOne = (event, id) => {
    const { onSelect } = this.props;
    const { selectedJobs } = this.state;

    const selectedIndex = selectedJobs.indexOf(id);
    let newselectedJobs = [];

    if (selectedIndex === -1) {
      newselectedJobs = newselectedJobs.concat(selectedJobs, id);
    } else if (selectedIndex === 0) {
      newselectedJobs = newselectedJobs.concat(selectedJobs.slice(1));
    } else if (selectedIndex === selectedJobs.length - 1) {
      newselectedJobs = newselectedJobs.concat(selectedJobs.slice(0, -1));
    } else if (selectedIndex > 0) {
      newselectedJobs = newselectedJobs.concat(
        selectedJobs.slice(0, selectedIndex),
        selectedJobs.slice(selectedIndex + 1)
      );
    }

    this.setState({ selectedJobs: newselectedJobs });

    onSelect(newselectedJobs);
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes, className, jobs } = this.props;
    const { activeTab, selectedJobs, rowsPerPage, page } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet className={rootClassName}>
        <PortletContent noPadding>
          <PerfectScrollbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <Checkbox
                      checked={selectedJobs.length === jobs.length}
                      color="primary"
                      indeterminate={
                        selectedJobs.length > 0 &&
                        selectedJobs.length < jobs.length
                      }
                      onChange={this.handleSelectAll}
                    />
                    Nama
                  </TableCell>
                  <TableCell align="left">Jenjang Pendidikan</TableCell>
                  <TableCell align="left">Kuota</TableCell>
                  <TableCell align="left">Gaji</TableCell>
                  <TableCell align="left">Tanggal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs
                  .filter(job => {
                    if (activeTab === 1) {
                      return !job.returning;
                    }

                    if (activeTab === 2) {
                      return job.returning;
                    }

                    return job;
                  })
                  .slice(0, rowsPerPage)
                  .map(job => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={job.id}
                      selected={selectedJobs.indexOf(job.id) !== -1}
                    >
                      <TableCell className={classes.tableCell}>
                        <div className={classes.tableCellInner}>
                          <Checkbox
                            checked={selectedJobs.indexOf(job.id) !== -1}
                            color="primary"
                            onChange={event =>
                              this.handleSelectOne(event, job.id)
                            }
                            value="true"
                          />
                          {/* <Avatar
                            className={classes.avatar}
                            src={job.avatarUrl}
                          >
                            {getInitials(job.name)}
                          </Avatar> */}
                          <Link to="#">
                            <Typography
                              className={classes.nameText}
                              variant="body1"
                            >
                              {job.posisi}
                            </Typography>
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {job.jenjang_minimal}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {job.kuota}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {job.gaji_minimal}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {moment(job.update_at).format('DD/MM/YYYY')}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </PerfectScrollbar>
          <TablePagination
            backIconButtonProps={{
              'aria-label': 'Previous Page'
            }}
            component="div"
            count={jobs.length}
            nextIconButtonProps={{
              'aria-label': 'Next Page'
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </PortletContent>
      </Portlet>
    );
  }
}

JobsTable.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  onShowDetails: PropTypes.func,
  jobs: PropTypes.array.isRequired
};

JobsTable.defaultProps = {
  jobs: [],
  onSelect: () => {},
  onShowDetails: () => {}
};

export default withStyles(styles)(JobsTable);
