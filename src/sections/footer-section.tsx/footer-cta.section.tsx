
export function FooterCtaSection() {
  return (
    <section className='bg-[#ffda79] text-center py-[120px]'>
      <div className="text-center m-auto gap-[24px] grid">
        <h2 className="text-[64px] max-w-[680px] font-normal m-auto leading-[72px]">
          Find your next designer today
        </h2>

        <div className="max-w-[600px] m-auto text-[20px]">
          The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
        </div>

        <div className="footer-cta__actions">
          <a className="text-[14px] p-[24px] text-white h-[56px] inline-flex items-center justify-center rounded-full font-semibold text-white bg-[#0d0c22] overflow-hidden" data-track-cta="Get started" href="/signup/new?return_to_after_signup=%2Fget-started%3Fintention%3Dhire%23hiringWorkType">Get started now</a>
          <a href="/hiring" className="bg-white text-black text-[14px] p-[24px] overflow-hidden ml-4 h-[56px] inline-flex items-center justify-center rounded-full font-semibold" data-track-cta="Learn about hiring">Learn about hiring</a>
        </div>

        <div className="footer-cta__copy">
          Are you a designer?
          <a data-track-cta="Join Dribbble" href="/signup/new">Join Dribbble</a>
        </div>
      </div>
    </section>
  )
}
