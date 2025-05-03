{
    // interface --> generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartWatch: T;
        bike?: X
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string
    }

    const poorDeveloper : Developer<EmilabWatch> ={
        name: 'Mahdi',
        computer: {
            brand: 'Apple',
            model: 'MacBook Pro (Retina, 15-inch, Mid 2015)',
            releaseYear: 2015
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'OLED'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }

    interface YamahaBike {
        model: string;
        engineCapacity : string
    }

    const richDeveloper : Developer<AppleWatch, YamahaBike> ={
        name: 'Rich Dev',
        computer: {
            brand: 'HP',
            model: 'x-25UR',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'Apple Watch Series 9 GPS 45-mm Pink Aluminium Case with Light Pink Sport Band',
            heartTrack: true,
            sleepTrack: true,
        }
        bike: {
            model: 'Yamaha',
            engineCapacity: '100cc'
        }
    }








}