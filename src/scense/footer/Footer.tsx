import logo from '@/assets/Logo.png'



const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-center mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={logo} alt="logo" />
                <p className='my-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem neque eum officia! Rerum eaque in nesciunt asperiores facilis porro voluptates odio accusantium debitis veritatis vero, tempore repellat aliquid officiis mollitia.
                </p>
                <p>Copyright(©)</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5 underline cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam blanditiis </p>
                <p className='my-5 underline cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam blanditiis </p>
                <p className='my-5 underline cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam blanditiis </p>
            </div>
             <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5 underline cursor-pointer'>Lorem ipsum dolor sit amet</p>
                <p className='my-5 underline cursor-pointer'>Lorem ipsum dolor sit amet </p>
                <p className='my-5 underline cursor-pointer'>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer