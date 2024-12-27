import { extendTheme } from "@chakra-ui/react";
import { Container } from "./components/container";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { StepsTheme as Steps } from 'chakra-ui-steps';



const theme = extendTheme({
  components: {
    Container,
    Button,
    Input,
    Steps,
  }
})

export default theme;