export const imageMock = {
    id: 2014422,
    width: 3024,
    height: 3024,
    url: 'https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/',
    photographer: 'Joey Farina',
    photographer_url: 'https://www.pexels.com/@joey',
    photographer_id: 680589,
    avg_color: '#978E82',
    src: {
        original:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
        large2x:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350',
        small: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
    },
    liked: false,
    alt: 'A Vase Of Yellow Flowers Sits On A Table Next To A Mirror',
};

export const placeholderMock = {
    id: '',
    width: '',
    height: '',
    url: '',
    photographer: '',
    photographer_url: '',
    photographer_id: '',
    avg_color: '',
    src: {
        original: '',
        large2x: '',
        large: '',
        medium: '',
        small: '',
        portrait: '',
        landscape: '',
        tiny: '',
    },
    liked: '',
    alt: '',
};

const initialFortyImages = () => {
    const images = [];
    for (let i = 1; i <= 40; i++) {
        images.push(imageMock);
    }
    return images;
};
export const initialForty = initialFortyImages();
