import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { DailyCarTrips } from '../../../user/model/daily-car-trips';
import { User } from '../../../user/model/user';

const mockUserFromCAS = {
    firstName: 'Clément',
    lastName: 'Garin',
    universityMail: 'clement.garin@u-psud.fr'
};

// TODO Layout -> Authentication
@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss'],
})
export class LayoutComponent implements OnDestroy, OnInit {
    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;
    public env = environment;
    public isLoggedIn = false;

    public _firstName: string;
    public _lastName: string;
    public _universityMail: string;
    public _mail: string;
    public _phoneNumber: string;
    public _transports: string[];
    public _vehicles: string[];
    public _travels: Travel[];
    public _selectedNotifs: any[];
    public travelId = 0;

    public tmpStart: string;
    public tmpEnd: string;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        this._firstName = mockUserFromCAS.firstName;
        this._lastName = mockUserFromCAS.lastName;
        this._universityMail = mockUserFromCAS.universityMail;
        this._mail = '';
        this._phoneNumber = '';
        this._travels = [];
        this._vehicles = [];
        this._transports = [];
        this._selectedNotifs = ['Demandes quotidiennes sur vos trajets', 'Trajets trouvés', 'Informations'];
        this.tmpStart = '';
        this.tmpEnd = '';
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    addTravel() {
        const travel = <Travel>{};

        travel.start = this.tmpStart;
        travel.end = this.tmpEnd;
        travel.id = this.travelId;

        this.travelId++;
        this._travels.push(travel);

        this.tmpStart = '';
        this.tmpEnd = '';
    }

    removeTravel(id: number) {
        this._travels = this._travels.filter(travel => travel.id !== id);
    }

    toggleNotif(notif: string) {
        if (this._selectedNotifs.includes(notif)) {
            this._selectedNotifs = this._selectedNotifs.filter(n => n !== notif);
        } else {
            this._selectedNotifs.push(notif);
        }
    }

    signIn() {
        const tmpUser = {
            firstName: this._firstName,
            lastName: this._lastName,
            contact: {
                universityMail: this._universityMail,
                secondaryMail: this._mail,
                phone: this._phoneNumber
            },
            dailyCarTrips: this._travels,
            notificationPreferences: this._selectedNotifs,
            transports: [...this._transports, ...this._vehicles]
        };

        console.log('sign in with : ', tmpUser);
        this.isLoggedIn = true;
    }

    hasMissingInformation() {
        return this._travels.length === 0 || (this._transports.length + this._vehicles.length === 0);
    }
}

interface Travel {
    id: number;
    start: string;
    end: string;
}

