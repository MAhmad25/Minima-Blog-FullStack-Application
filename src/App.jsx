import { Container } from "./components/index";
import AppRoute from "./Routes/AppRoute";
import PostLoader from "./components/ui/PostLoader";
import { useSelector } from "react-redux";
const App = () => {
      const isLoading = useSelector((state) => state.loader.isLoading);
      return (
            <Container>
                  {isLoading && <PostLoader />}
                  <AppRoute />
            </Container>
      );
};

export default App;
