import Bio from "./Bio";
import Header from './Header'
import Hero from './Hero';
import Pdevelopment from './Pdevelopment';


const Landing = () => {
  return (
    <div className="bg-[#000]">
        <Header />
        <Hero />
        <Bio />
        <Pdevelopment />
    </div>
  );
};

export default Landing;
