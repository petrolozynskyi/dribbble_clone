import { faker } from "@faker-js/faker";


export const mockheroes = [
    {
        id: 1,
        name: faker.person.firstName('male'),
        imageSrc: './images/hero-imgs/buffa.png',
        position: ['Web', 'UI/UX', 'Product'],
    },
    {
        id: 2,
        name: faker.person.firstName('male'),
        imageSrc: './images/hero-imgs/cherniy.jpeg',
        position: ['Web', 'UI/UX', 'Mobile'],
    },
    {
        id: 3,
        name: faker.person.firstName('male'),
        imageSrc: './images/hero-imgs/gruev.png',
        position: ['Web', 'UI/UX', 'design'],
    },
    {
        id: 4,
        name: faker.person.firstName('female'),
        imageSrc: './images/hero-imgs/ochkastaya.png',
        position: ['Web', 'UI/UX', 'Illustration'],
    },
    {
        id: 5,
        name: faker.person.firstName('male'),
        imageSrc: './images/hero-imgs/axax2.jpeg',
        position: ['Web', 'UX', 'Product'],
    },
    {
        id: 6,
        name: faker.person.firstName('female'),
        imageSrc: './images/hero-imgs/zalupka.jpeg',
        position: ['Web', 'UX', 'Leadership'],
    }, {
        id: 6,
        name: faker.person.firstName('female'),
        imageSrc: './images/hero-imgs/mercedes-bazan.png',
        position: ['Web', 'UX', 'Graphic design'],
    }, {
        id: 6,
        name: faker.person.firstName('female'),
        imageSrc: './images/hero-imgs/picture.png',
        position: ['Web', 'UX', 'Brand'],
    },

];
