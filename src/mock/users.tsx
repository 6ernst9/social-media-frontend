import {User} from "../utils/types";
import Profile1 from '../assets/img/profile1.jpg';
import Profile2 from '../assets/img/profile2.jpg';
import Profile3 from '../assets/img/profile3.jpg';
import Profile4 from '../assets/img/profile4.jpg';
import Profile5 from '../assets/img/profile5.jpg';
import Profile6 from '../assets/img/profile6.jpg';

export const mockUsers: User[] = [
    {
        id: 1,
        name: 'Bianca Haiduc',
        username: 'biahaiduc',
        password: 'pass123',
        description: 'UI/UX  Designer at @Ecommercex',
        dateOfBirth: '23/8/2002',
        joinDate: '24/10/2018',
        profilePhoto: Profile1,
        gender: 'F'
    },
    {
        id: 2,
        name: 'Andrada Hruban',
        username: 'andradahub',
        password: 'pass456',
        dateOfBirth: '12/5/1995',
        joinDate: '15/9/2017',
        profilePhoto: Profile2,
        gender: 'F'
    },
    {
        id: 3,
        name: 'Katy Butuc',
        username: 'katybutuc',
        password: 'pass789',
        dateOfBirth: '18/7/1990',
        joinDate: '5/3/2016',
        profilePhoto: Profile3,
        gender: 'F'
    },
    {
        id: 4,
        name: 'Andra Danciu',
        username: 'andra.danciu',
        password: 'pass321',
        dateOfBirth: '30/1/1988',
        joinDate: '10/11/2015',
        profilePhoto: Profile4,
        gender: 'F'
    },
    {
        id: 5,
        name: 'Roxana Fulea',
        username: 'roxana_fulea',
        password: 'pass654',
        dateOfBirth: '5/9/1997',
        joinDate: '20/8/2019',
        profilePhoto: Profile5,
        gender: 'F'
    },
    {
        id: 6,
        name: 'Diana Gratiana',
        username: 'dianag',
        password: 'pass987',
        dateOfBirth: '14/3/1994',
        joinDate: '2/6/2013',
        profilePhoto: Profile6,
        gender: 'F'
    }
]