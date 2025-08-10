import LocomotiveScroll from "locomotive-scroll";
import { Container } from "./components/index";
import AppRoute from "./Routes/AppRoute";
import PostLoader from "./components/ui/PostLoader";
import { useSelector } from "react-redux";
const App = () => {
      // function onScroll({ scroll, limit, velocity, direction, progress }) {
      //       console.log(scroll, limit, velocity, direction, progress);
      //       889 889 0 1 1
      // }
      new LocomotiveScroll({ lenisOptions: { duration: 2 } });
      const isLoading = useSelector((state) => state.loader.isLoading);
      return (
            <Container>
                  {isLoading && <PostLoader />}
                  <AppRoute />
            </Container>
      );
};

export default App;
