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

class Account extends Component {
  state = {
    namaUsaha: '',
    namaPemilik: '',
    noIzinUsaha: '',
    bidang: '',
    alamat: '',
    koordinat: '',
    noTelp: '',
    deskripsi: '',
    kelurahan: '',
    kecamatan: '',
    omzet: '',
    jumlahKaryawan: '',
    tanggalBerdiri: '',
    status: '',
    statusImb: '',
  };

  handleChange = (field, value) => {
    const newState = { ...this.state };
    newState[field] = value;
    this.setState(newState);
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { 
      namaUsaha,
      namaPemilik,
      noIzinUsaha,
      bidang,
      alamat,
      koordinat,
      noTelp,
      deskripsi,
      kelurahan,
      kecamatan,
      omzet,
      jumlahKaryawan,
      tanggalBerdiri,
      status,
      statusImb, } = this.state;
    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="Informasi dapat di ubah"
            title="Profil"
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
                Overview Usaha
              </Typography>
              <TextField
                className={classes.textField}
                // helperText="Please specify the first name"
                onChange={e => {this.handleChange("namaUsaha", e.target.value)}}
                label="Nama Usaha"
                margin="dense"
                multiline={true}
                required
                value={namaUsaha}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("namaPemilik", e.target.value)}}
                label="Nama Pemilik"
                margin="dense"
                required
                value={namaPemilik}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("bidang", e.target.value)}}
                label="Bidang"
                margin="dense"
                required
                value={bidang}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("tanggalBerdiri", e.target.value)}}
                label="Tanggal Berdiri"
                margin="dense"
                required
                value={tanggalBerdiri}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("noTelp", e.target.value)}}
                label="Nomor Telpon"
                margin="dense"
                required
                value={noTelp}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("jumlahKaryawan", e.target.value)}}
                label="Jumlah Karyawan"
                margin="dense"
                required
                value={jumlahKaryawan}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("omzet", e.target.value)}}
                label="Omzet Usaha"
                margin="dense"
                required
                value={omzet}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <Typography
                className={classes.fieldTitle}
                variant={"display2"}
              >
                Detail Daerah
              </Typography>
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("alamat", e.target.value)}}
                label="Alamat"
                margin="dense"
                required
                value={alamat}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("alamat", e.target.value)}}
                label="Kelurahan"
                margin="dense"
                type="number"
                value={kelurahan}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("kecamatan", e.target.value)}}
                label="kecamatan"
                margin="dense"
                type="number"
                value={kecamatan}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("koordinat", e.target.value)}}
                label="koordinat"
                margin="dense"
                type="number"
                value={koordinat}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <Typography
                className={classes.fieldTitle}
                variant={"display2"}
              >
                Keabsahan Usaha
              </Typography>
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("noIzinUsaha", e.target.value)}}
                label="Nomor Izin Usaha"
                margin="dense"
                required
                value={noIzinUsaha}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("status", e.target.value)}}
                label="Status Usaha"
                margin="dense"
                type="number"
                value={status}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("statusImb", e.target.value)}}
                label="Status IMB"
                margin="dense"
                type="number"
                value={statusImb}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("koordinat", e.target.value)}}
                label="koordinat"
                margin="dense"
                type="number"
                value={koordinat}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <Typography
                className={classes.fieldTitle}
                variant={"display2"}
              >
                Deskripsi Usaha
              </Typography>
              <TextField
                className={classes.textField}
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
            Simpan Perubahan
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Account.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
