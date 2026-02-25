export interface Partner {
    id: string;
    name: string;
    logo: string;
    website: string;
    type: 'hiring' | 'education' | 'technology';
}

export const partners: Partner[] = [
    {
        id: '1',
        name: 'Leapfrog Technology',
        logo: 'https://images.unsplash.com/photo-1599305090597-597305bf9560?auto=format&fit=crop&w=200&q=80',
        website: 'https://lftechnology.com',
        type: 'hiring'
    },
    {
        id: '2',
        name: 'CloudFactory',
        logo: 'https://images.unsplash.com/photo-1599305090597-597305bf9560?auto=format&fit=crop&w=200&q=80',
        website: 'https://cloudfactory.com',
        type: 'hiring'
    },
    {
        id: '3',
        name: 'Verisk',
        logo: 'https://images.unsplash.com/photo-1599305090597-597305bf9560?auto=format&fit=crop&w=200&q=80',
        website: 'https://verisk.com',
        type: 'hiring'
    },
    {
        id: '4',
        name: 'Cotiviti',
        logo: 'https://images.unsplash.com/photo-1599305090597-597305bf9560?auto=format&fit=crop&w=200&q=80',
        website: 'https://cotiviti.com',
        type: 'hiring'
    }
];
