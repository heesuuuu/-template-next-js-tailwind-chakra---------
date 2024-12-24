import { extendTheme } from "@chakra-ui/react";
import { Container } from "./components/container";
import { Button } from "./components/button";
import { Input } from "./components/input";
import {Steps} from "./components/steps";

const theme = extendTheme({
  components: {
    Container,
    Button,
    Input,
    // Steps,
  }
})

export default theme;