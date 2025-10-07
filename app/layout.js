import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
import "public/assets/css/enhanced-styles.css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { cormorant, dmSans } from '@/lib/font'
export const metadata = {
    metadataBase: new URL('https://hotelashirwadlodging.com'),
    title: {
        default: 'Ashirwad Hotel | Ghodegaon Pune – Near Manchar & Bhimashankar',
        template: '%s | Ashirwad Hotel Ghodegaon',
    },
    description: 'Ashirwad Hotel in Ghodegaon, Pune – Pure Veg lodging near Manchar and close to Bhimashankar. Comfortable rooms, modern amenities, and easy highway access.',
    keywords: [
        'Ashirwad Hotel', 'Hotel in Ghodegaon', 'Ghodegaon Pune hotel',
        'near Manchar hotel', 'near Bhimashankar stay', 'lodging Ghodegaon',
        'Pune Nashik highway hotel', 'Pure Veg hotel Pune'
    ],
    alternates: {
        canonical: 'https://hotelashirwadlodging.com/',
    },
    openGraph: {
        title: 'Ashirwad Hotel | Ghodegaon Pune – Near Manchar & Bhimashankar',
        description: 'Comfortable rooms in Ghodegaon, Pune. Pure Veg. Near Manchar, close to Bhimashankar.',
        url: 'https://hotelashirwadlodging.com/',
        siteName: 'Ashirwad Hotel',
        images: [
            {
                url: 'https://hotelashirwadlodging.com/assets/images/compressed/banner-1.jpg',
                width: 1200,
                height: 630,
                alt: 'Ashirwad Hotel – Ghodegaon Pune',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ashirwad Hotel | Ghodegaon Pune – Near Manchar & Bhimashankar',
        description: 'Pure Veg lodging in Ghodegaon, Pune. Near Manchar, close to Bhimashankar.',
        images: ['https://hotelashirwadlodging.com/assets/images/compressed/banner-1.jpg'],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
            <body>{children}</body>
        </html>
    )
}
