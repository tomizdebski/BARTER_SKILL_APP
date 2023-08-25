import Feed from '@components/Feed'

const Home = () => {
  
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        <span className='blue_gradient'>Odkrywaj i wymieniaj się umiejętniościami</span>
        <br className="max-md:hidden"/>
        <span className="green_gradient text-center">Czy umiesz coś czego nie umię ktoś inny?</span>
      </h1>
      <p className="desc text-center">
        Barter to aplikacja służąca wymianie umiejętności między urzytkownikami.
      </p>
      <Feed />
    </section>
  )
}

export default Home
