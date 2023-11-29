import { StaticImageData } from 'next/image'

export type Testimonial = {
    id: number,
    name: string,
    designation: string,
    image: StaticImageData, // public/images/user images  
    content: string,
}

