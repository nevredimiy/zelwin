import { partnersLogos } from './partnersLogos';

const index = () => {

  return (
    <section className='py-20 px-8 bg-white'>
      <h2 className='mb-6'>Partners & Clients</h2>
      <div className="grid grid-cols-2 ssm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 bg-regal-gray gap-[1px]">
        {
          partnersLogos.map((logo, index) => {
            return <div key={index} className="flex justify-center items-center bg-white h-[98px]">
              <img src={logo.url} alt={logo.descriotion} />
            </div>
          })
        }
      </div>
    </section>
  )
}

export default index
