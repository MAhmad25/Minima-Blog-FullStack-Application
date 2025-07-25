import LocomotiveScroll from "locomotive-scroll";
import Container from "./components/container/container";
import AppRoute from "./Routes/AppRoute";
const App = () => {
      // function onScroll({ scroll, limit, velocity, direction, progress }) {
      //       console.log(scroll, limit, velocity, direction, progress);
      //       889 889 0 1 1
      // }
      new LocomotiveScroll({ lenisOptions: { duration: 2 } });
      return (
            <Container>
                  <AppRoute />
            </Container>
      );
};

export default App;
