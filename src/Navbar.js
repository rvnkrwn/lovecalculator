import { Box,Flex,Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";

function Navbar() {
    return(
        <Box display={"flex"} justifyContent={"space-between"}>
            <Box alignSelf={"center"}>
                <Text>
                    ❤️ <span style={{fontSize:"20px", fontWeight: "semibold"}}>Calculator</span>
                </Text>
            </Box>
            <Box alignSelf={"center"}>
                <ColorModeSwitcher/>
            </Box>
        </Box>
        
    );
}

export default Navbar;