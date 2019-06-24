import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// Shared components
import Portlet from '../../../../components/Portlet';
import PortletHeader from '../../../../components/PortletHeader';
import PortletLabel from '../../../../components/PortletLabel';
import PortletContent from '../../../../components/PortletContent';
import PortletFooter from '../../../../components/PortletFooter';

// Component styles
import styles from './styles';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

class JobForm extends Component {
  state = {
    umkmId: '',
    posisi: '',
    skillSetKey: '',
    jenjangMinimal: '',
    gajiMinimal: '',
    gajiMaksimal: '',
    deskripsi: '',
    tanggalMulai: '',
    tanggalAkhir: '',
    status: '',
  };

  handleChange = (field, value) => {
    const newState = { ...this.state };
    newState[field] = value;
    this.setState(newState);
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { 
      umkmId,
      posisi,
      skillSetKey,
      jenjangMinimal,
      gajiMinimal,
      gajiMaksimal,
      deskripsi,
      tanggalMulai,
      tanggalAkhir,
      status, } = this.state;
    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="membuat pekerjaan baru"
            title="Buat Pekerjaan"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form
            autoComplete="off"
            noValidate
          >
            <div className={classes.field}>
              <Typography
                className={classes.fieldTitle}
                variant={"display2"}
              >
                Detail Pekerjaan
              </Typography>
              <TextField
                className={classes.textField}
                helperText="Contoh: Office Boy"
                onChange={e => {this.handleChange("namaUsaha", e.target.value)}}
                label="Posisi"
                margin="dense"
                multiline={true}
                required
                value={posisi}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                helperText="Contoh: SMP/SMA"
                onChange={e => {this.handleChange("jenjangMinimal", e.target.value)}}
                label="Jenjang Minimal"
                margin="dense"
                required
                value={jenjangMinimal}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                helperText="Contoh: 1000000"
                onChange={e => {this.handleChange("gajiMinimal", e.target.value)}}
                label="Gaji Minimal"
                margin="dense"
                required
                value={gajiMinimal}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                helperText="Contoh: 1250000"
                onChange={e => {this.handleChange("gajiMaksimal", e.target.value)}}
                label="Gaji Maksimal"
                margin="dense"
                required
                value={gajiMaksimal}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                helperText="Contoh: 07/02/2019"
                onChange={e => {this.handleChange("tanggalMulai", e.target.value)}}
                label="Tanggal Mulai"
                margin="dense"
                required
                value={tanggalMulai}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                helperText="Contoh: 13/01/2019"
                onChange={e => {this.handleChange("tanggalAkhir", e.target.value)}}
                label="Tanggal Akhir"
                margin="dense"
                required
                value={tanggalAkhir}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <Typography
                className={classes.fieldTitle}
                variant={"display2"}
              >
                Deskripsi Pekerjaan
              </Typography>
              <TextField
                className={classes.textField}
                helperText="Berikan deskripsi agar pencari kerja mengetahui detail pekerjaannya"
                onChange={e => {this.handleChange("deskripsi", e.target.value)}}
                label="Deskripsi"
                multiline={true}
                margin="dense"
                required
                value={deskripsi}
                variant="outlined"
              />
            </div>
            
            {/* <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Select State"
                margin="dense"
                onChange={e => {this.handleChange("state", e.target.value)}}
                required
                select
                SelectProps={{
                  native: true
                }}
                value={state}
                variant="outlined">
                {states.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                className={classes.textField}
                label="Country"
                margin="dense"
                required
                value={country}
                variant="outlined"
              />
            </div> */}
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

JobForm.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobForm);
