import CallToAction from '../../components/CallToAction/CallToAction';
import Specials from '../../components/Specials/Specials';
import CustomersSay from '../../components/CustomersSay/CustomersSay';
import Chicago from '../../components/Chicago/Chicago';

// The home page is a list of sections. A fragment groups them without adding an extra element,
// because Main already provides the surrounding <main>.
function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default HomePage;
