import indigo from 'material-ui/colors/indigo';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';

export const styles = theme => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    },
    main: {
        flex: '1 0 auto'
    },
    paper: {
        marginTop: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 2,
    },
    card: {
        marginTop: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.primary.dark
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    media: {
        height: '100%',
        maxWidth: '25%',
        padding: theme.spacing.unit * 2
    },
    factionIcon: {
        height: '100%',
        maxWidth: '10%',
        padding: theme.spacing.unit * 2
    },
    vs: {
        border: `solid 2px ${indigo[900]}`,
    },
    nc: {
        border: `solid 2px ${blue[800]}`,
    },
    tr: {
        border: `solid 2px ${red[700]}`,
    },
    listItem: {
        color: theme.palette.primary.contrastText
    },
    footer: {
        marginTop: 10,
        backgroundColor: `${theme.palette.primary.main}`,
        borderTop: `solid 2px ${theme.palette.secondary.main}`,
        paddingTop: 4,
        paddingBottom: 4,
        overflowX: 'hidden'
    },
});