
export default function CommonTitle({ title, des, className='text-center' }) {
    return (
      <div className={`common-title ${className}`}>
        <h2 className="mb-0 text-uppercase" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">{title}</h2>
        {des ? (<p className="mt-3 mt-lg-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">{des}</p>) : ''}
      </div>
    )
  }
  