const Hero = () => {
  return (
    <section className="text-white text-center py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">A Fast Blockchain.</span>
        </h1>

        <h2 className="text-4xl font-semibold mt-2">Scalable AI.</h2>

        <p className="text-gray-400 mt-4">
          Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.
        </p>

        <div className="mt-6 space-x-4">
          <button className="px-6 py-2 border border-pink-500 rounded-full text-white hover:bg-pink-500 transition">Get started</button>
          <button className="px-6 py-2 border border-gray-500 rounded-full text-white hover:bg-gray-500 transition">Ecosystems</button>
        </div>

        <div className="mt-10">
          <img src="/images/avatar.webp" alt="Blockchain Graphic" className="w-full animate-bounce " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
