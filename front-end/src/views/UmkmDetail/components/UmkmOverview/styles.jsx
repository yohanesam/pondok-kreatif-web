export default theme => ({
  root: {},
  dropdownButton: {
    marginRight: -theme.spacing.unit * 2
  },
  overviewWrapper: {
    height: '400px',
    position: 'relative'
  },
  portletFooter: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  imgHeader: {
    height: '180px'
  },
  umkmOverviewTitleWrapper: {
    paddingBottom: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
    height: 'auto',
    alignItems: 'center'
  },
  umkmLogoWrapper: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    borderRadius: '5px',
    overflow: 'hidden',
    height: '100px',
    width: '100px'
  },
  umkmLogoImage: {
    width: '100%',
    height: 'auto'
  },
  umkmDetails: {
    marginLeft: theme.spacing.unit * 2,
    flexGrow: 1
  },
  umkmTitle:{},
  umkmOwner: {
    marginTop: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  umkmEmployees: {
    marginTop: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  umkmAddress: {
    marginTop: theme.spacing.unit,
    color: theme.palette.text.secondary
  }, 
  umkmTimestamp: {
    marginTop: theme.spacing.unit,
    color: theme.palette.text.secondary
  }
});
