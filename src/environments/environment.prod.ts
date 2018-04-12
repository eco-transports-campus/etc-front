export const environment = {
    production: true,
    menu: [
        { title: 'Accueil', icon: 'home', link: 'home', withDivider: false },
        { title: 'Mon compte', icon: 'account_circle', link: 'account', withDivider: true },
        { title: 'Proposer un trajet', icon: 'directions_car', link: 'travel/add', withDivider: false },
        { title: 'Demander un trajet', icon: 'transfer_within_a_station', link: 'travel/request', withDivider: true },
        { title: 'Statistiques', icon: 'show_chart', link: 'stats', withDivider: true },
        { title: 'Reporter un bug', icon: 'bug_report', link: 'bug', withDivider: false },
        { title: 'About', icon: 'account_circle', link: 'about', withDivider: false }
    ]
};
