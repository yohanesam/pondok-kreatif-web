import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import compose from 'recompose/compose';
import axios from 'axios';
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

// Option value
import bidang from '../../../../data/bidang'

// Component styles
import styles from './styles';

// URL 
import { 
  BASE_URL, 
  PROFILE_URI 
} from '../../../../config/Apis';

// Service methods
const getUmkm = (id) => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}${PROFILE_URI}${id}`
  });
};

const updateUmkm = (request) => {
  console.log(request.status);
  return axios({
    method: 'PUT',
    url: `${BASE_URL}${PROFILE_URI}${request.id}`,
    data: {
      "nama_usaha": request.namaUsaha,
      "nama_pemilik": request.namaPemilik,
      "no_izin_usaha": request.noIzinUsaha,
      'kategori': request.kategori,
      "jam_operasi": request.jamOperasi,
      "gambar": request.gambar,
      "bidang_id": request.bidangId,
      "alamat": request.alamat,
      "koordinat": request.koordinat,
      "no_telp": request.noTelp,
      "deskripsi": request.deskripsi,
      "website": request.website,
      "jumlah_karyawan": request.jumlahKaryawan,
      "tanggal_berdiri": request.tanggalBerdiri,
      "status": request.status,
    }
  });
}

class AccountDetails extends Component {
  state = {
    id: '',
    namaUsaha: '',
    namaPemilik: '',
    noIzinUsaha: '',
    kategori: '',
    jamOperasi: '',
    gambar: '',
    bidangId: '',
    alamat: '',
    koordinat: '',
    noTelp: '',
    deskripsi: '',
    website: '',
    jumlahKaryawan: '',
    tanggalBerdiri: '',
    status: '',
  };

  componentDidMount = () => {
    this.getUmkmComponent();
  }

  getUmkmComponent = async () => {
    const state = JSON.parse(localStorage.getItem('userInfoState'));
    const res = await getUmkm(state.role_user_id);
    this.setState({ 
      id: res.data.id,
      namaUsaha: res.data.nama_usaha,
      namaPemilik: res.data.nama_pemilik,
      noIzinUsaha: res.data.no_izin_usaha,
      kategori: res.data.kategori,
      jamOperasi: res.data.jam_operasi,
      gambar: res.data.gambar,
      bidangId: res.data.bidang_id,
      alamat: res.data.alamat,
      koordinat: res.data.koordinat,
      noTelp: res.data.no_telp,
      deskripsi: res.data.deskripsi,
      website: res.data.website,
      jumlahKaryawan: res.data.jumlah_karyawan,
      tanggalBerdiri: res.data.tanggal_berdiri,
      status: res.data.status,
    })
  }

  handleChange = (field, value) => {
    const newState = { ...this.state };
    newState[field] = value;
    this.setState(newState);
  };

  handleSubmit = async () => {
    const { history } = this.props;
    try{
      await updateUmkm({
        id: this.state.id,
        namaUsaha: this.state.namaUsaha,
        namaPemilik: this.state.namaPemilik,
        noIzinUsaha: this.state.noIzinUsaha,
        kategori: this.state.kategori,
        jamOperasi: this.state.jamOperasi,
        gambar: this.state.gambar,
        bidangId: this.state.bidangId,
        alamat: this.state.alamat,
        koordinat: this.state.koordinat,
        noTelp: this.state.noTelp,
        deskripsi: this.state.deskripsi,
        website: this.state.website,
        jumlahKaryawan: this.state.jumlahKaryawan,
        tanggalBerdiri: this.state.tanggalBerdiri,
        status: this.state.status,
      });
      history.push("/account");
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const { classes, className, ...rest } = this.props;
    const { 
      namaUsaha,
      namaPemilik,
      noIzinUsaha,
      kategori,
      jamOperasi,
      bidangId,
      alamat,
      koordinat,
      noTelp,
      deskripsi,
      website,
      jumlahKaryawan,
      tanggalBerdiri,
      status, } = this.state;
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
                variant={"body2"}
              >
                Overview Usaha
              </Typography>
              <TextField
                className={classes.textField}
                // helperText="Please specify the first name"
                onChange={e => {this.handleChange("namaUsaha", e.target.value)}}
                label="Nama Usaha"
                margin="dense"
                required
                value={namaUsaha}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("kategori", e.target.value)}}
                label="Kategori Usaha"
                margin="dense"
                required
                value={kategori}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="Bidang"
                margin="dense"
                onChange={e => {this.handleChange("bidangId", e.target.value)}}
                required
                select
                SelectProps={{
                  native: true
                }}
                value={bidangId}
                variant="outlined">
                {bidang.map(option => (
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
                onChange={e => {this.handleChange("jamOperasi", e.target.value)}}
                label="Jam Operasi Usaha"
                margin="dense"
                required
                value={jamOperasi}
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
                type="number"
                required
                value={jumlahKaryawan}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                onChange={e => {this.handleChange("website", e.target.value)}}
                label="Website"
                margin="dense"
                required
                value={website}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <Typography
                className={classes.fieldTitle}
                variant={"body2"}
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
                onChange={e => {this.handleChange("koordinat", e.target.value)}}
                label="koordinat"
                margin="dense"
                value={koordinat}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <Typography
                className={classes.fieldTitle}
                variant={"body2"}
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
                value={status}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <Typography
                className={classes.fieldTitle}
                variant={"body2"}
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

AccountDetails.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(AccountDetails);
