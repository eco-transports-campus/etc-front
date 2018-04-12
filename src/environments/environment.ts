// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    menu: [
        { title: 'Accueil', icon: 'home', link: '', withDivider: false },
        { title: 'Mon compte', icon: 'account_circle', link: '', withDivider: true },
        { title: 'Proposer un trajet', icon: 'directions_car', link: '', withDivider: false },
        { title: 'Demander un trajet', icon: 'transfer_within_a_station', link: '', withDivider: true },
        { title: 'Statistiques', icon: 'show_chart', link: '', withDivider: true },
        { title: 'Reporter un bug', icon: 'bug_report', link: '', withDivider: false },
        { title: 'About', icon: 'account_circle', link: '', withDivider: false }
    ]
};
