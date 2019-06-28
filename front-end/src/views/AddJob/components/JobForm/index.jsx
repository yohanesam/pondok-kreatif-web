import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import axios from 'axios';
import compose from 'recompose/compose';
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

// option value
import jenjang from '../../../../data/jenjang';

// URL 
import { 
  BASE_URL, 
  JOB_URI 
} from '../../../../config/Apis';

// Component styles
import styles from './styles';

const statusKey = [
  {
    value: null,
    label: 'Pilih Status'
  },
  {
    value: true,
    label: 'Disabilitas'
  },
  {
    value: false,
    label: 'Normal'
  },
];

// Service methods
const createJob = (request) => {
  console.log(request);
  return axios({
    method: 'POST',
    url: `${BASE_URL}${JOB_URI}`,
    data: {
      "umkm_id": request.umkmId,
      "posisi": request.posisi,
      "skill_set_key": request.skillSetKey,
      "jenjang_minimal": request.jenjangMinimal,
      "gaji_minimal": request.gajiMinimal,
      "kuota": request.kuota,
      "tanggal_mulai": request.tanggalMulai,
      "tanggal_akhir": request.tanggalAkhir,
      "gaji_maksimal": request.gajiMaksimal,
      "status": request.status,
      "deskripsi": request.deskripsi,
    },
  });
};

class JobForm extends Component {
  state = {
    value: {
      umkmId: '',
      posisi: '',
      kuota: '',
      // skillSetKey: '',
      jenjangMinimal: '',
      gajiMinimal: '',
      gajiMaksimal: '',
      deskripsi: '',
      tanggalMulai: '',
      tanggalAkhir: '',
      status: '',
    },
    serviceError: null,
  };

  handleChange = (field, value) => {
    const newState = { ...this.state };
    newState.value[field] = value;
    this.setState(newState);
  };

  handleSubmit = async () => {
    const value = { ...this.state.value };
    const { history } = this.props;
    const state = JSON.parse(localStorage.getItem('userInfoState'))
    try {
      await createJob({
        umkmId: state.role_user_id,
        posisi: value.posisi,
        kuota: value.kuota,
        // skillSetKey: value.skillSetKey,
        jenjangMinimal: value.jenjangMinimal,
        gajiMinimal: value.gajiMinimal,
        gajiMaksimal: value.gajiMaksimal,
        deskripsi: value.deskripsi,
        tanggalMulai: value.tanggalMulai,
        tanggalAkhir: value.tanggalAkhir,
        status: value.status,
      });

      history.push("/view-pekerjaan");
    } catch(error) {
      this.setState({
        serviceError: error
      });
    }
  }

  render() {
    const { classes, className, ...rest } = this.props;
    const {
      posisi,
      kuota,
      // skillSetKey,
      jenjangMinimal,
      gajiMinimal,
      gajiMaksimal,
      deskripsi,
      tanggalMulai,
      tanggalAkhir,
      status, } = this.state.value;
    const rootClassName = classNames(classes.root, className);
    
    console.log(this.state)

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="merubah pekerjaan yang diinginkan"
            title="Edit Pekerjaan"
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
                variant={"h2"}
              >
                Detail Pekerjaan
              </Typography>
              <TextField
                className={classes.textField}
                helperText="Contoh: Office Boy"
                onChange={e => {this.handleChange("posisi", e.target.value)}}
                label="Posisi"
                margin="dense"
                required
                value={posisi}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                helperText="Contoh: 100 (dalam angka)"
                onChange={e => {this.handleChange("kuota", e.target.valueAsNumber)}}
                label="Kuota Pegawai"
                margin="dense"
                type="number"
                required
                value={kuota}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                helperText="Contoh: Sekolah Dasar"
                label="Jenjang Minimal"
                margin="dense"
                onChange={e => {this.handleChange("jenjangMinimal", parseInt(e.target.value, 10))}}
                required
                select
                SelectProps={{
                  native: true
                }}
                value={jenjangMinimal}
                variant="outlined">
                {jenjang.map(option => (
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
                helperText="Contoh: 1000000 (dalam angka)"
                onChange={e => {this.handleChange("gajiMinimal", e.target.valueAsNumber)}}
                label="Gaji Minimal"
                margin="dense"
                type="number"
                required
                value={gajiMinimal}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                helperText="Contoh: 1250000 (dalam angka)"
                onChange={e => {this.handleChange("gajiMaksimal", e.target.valueAsNumber)}}
                label="Gaji Maksimal"
                margin="dense"
                type="number"
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
                type="date"
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
                type="date"
                required
                value={tanggalAkhir}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="Status Pekerjaan"
                helperText="Contoh: Aktif/Tidak Aktif"
                margin="dense"
                type="number"
                onChange={e => {this.handleChange("status", e.target.value)}}
                required
                select
                SelectProps={{
                  native: true
                }}
                value={status}
                variant="outlined">
                {statusKey.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className={classes.field}>
              <Typography
                className={classes.fieldTitle}
                variant={"h2"}
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
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
          >
            Simpan Perubahan
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

export default compose(
  withRouter,
  withStyles(styles)
)(JobForm);
