import Link from "next/link"
import Image from "next/image"

const Navbrand = () => {
    return (<Link className='hover:scale-105 transition-transform' href={'/'}>
        <Image
            className='rounded-lg'
            src={'/brand.svg'}
            height={50}
            width={50}
            alt='PlayFusion'
        />
    </Link>)
}

export default Navbrand