import {
  Box,
  Button,
  Center,
  NativeBaseProvider,
  VStack,
  FormControl,
  Input,
  Actionsheet,
  useDisclose,
  HStack,
  Text,
  Image,
  Heading,
  Switch,
} from "native-base";
import React from "react";
import axios from "axios";

export default function App() {
  const [Connection, setConnection] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclose();
  const [Data, setData] = React.useState({
    Switch_1: false,
    Switch_2: false,
    Switch_3: false,
    Switch_4: false,
    Switch_5: false,
    Switch_6: false,
    Switch_7: false,
    Switch_8: false,
    Switch_9: false,
    Switch_10: false,
    Switch_11: false,
    Switch_12: false,
    Switch_13: false,
    Switch_14: false,
    Switch_15: false,
  });

  const SetServerStoreSwitchs = () => {
    const acc = 'http://'+Connection.host+':'+Connection.port+'/setLights';
    console.log(acc)
    axios
      .get(acc, {
        params: {
          Switch_1: Data.Switch_1,
          Switch_2: Data.Switch_2,
          Switch_3: Data.Switch_3,
          Switch_4: Data.Switch_4,
          Switch_5: Data.Switch_5,
          Switch_6: Data.Switch_6,
          Switch_7: Data.Switch_7,
          Switch_8: Data.Switch_8,
          Switch_9: Data.Switch_9,
          Switch_10: Data.Switch_10,
          Switch_11: Data.Switch_11,
          Switch_12: Data.Switch_12,
          Switch_13: Data.Switch_13,
          Switch_14: Data.Switch_14,
          Switch_15: Data.Switch_15,
        },
      })
      .then(function (reponse) {
        const data = reponse.data;
        console.log(data);
      });
  };
  return (
    <NativeBaseProvider>
      <Box w={"100%"} h={"100%"} safeArea alignContent={'space-between'}>
        <Box>
        <Center>
          <Image
            source={{
              uri: "https://icon-library.com/images/arduino-icon-png/arduino-icon-png-6.jpg",
            }}
            alt="Alternate Text"
            size="xl"
          />
          <Heading top={2}>Arduino Web Lights Easy</Heading>

          <Center top={50}>
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize: "xl",
                }}
              >
                Conexão
              </FormControl.Label>
              <HStack space={2}>
                <Input
                keyboardType={'numbers-and-punctuation'}
                autoComplete="link"
                  w={120}
                  placeholder="IP"
                  onChangeText={(value) =>
                    setConnection({ ...Connection, host: value })
                  }
                />

                <Input
                  w={120}
                  keyboardType={'numbers-and-punctuation'}
                  placeholder="PORTA"
                  onChangeText={(value) =>
                    setConnection({ ...Connection, port: value })
                  }
                />
              </HStack>
              <FormControl.ErrorMessage
                _text={{
                  fontSize: "xs",
                }}
              >
                Error Name
              </FormControl.ErrorMessage>
            </FormControl>
            <Button onPress={onOpen} top={25} >
              SWITCHS
            </Button>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <HStack space={7}>
                  <Button onPress={() => SetServerStoreSwitchs()}>
                    CONFIRMAR
                  </Button>
                  <VStack space={2}>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_1: value,
                          })
                        }
                        value={Data.Switch_1}
                      />
                      <Text>Light 1</Text>
                    </Center>

                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_2: value,
                          })
                        }
                        value={Data.Switch_2}
                      />
                      <Text>Light 2</Text>
                    </Center>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_3: value,
                          })
                        }
                        value={Data.Switch_3}
                      />
                      <Text>Light 3</Text>
                    </Center>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_4: value,
                          })
                        }
                        value={Data.Switch_4}
                      />
                      <Text>Light 4</Text>
                    </Center>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_5: value,
                          })
                        }
                        value={Data.Switch_5}
                      />
                      <Text>Light 5</Text>
                    </Center>
                  </VStack>
                  <VStack space={2}>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_6: value,
                          })
                        }
                        value={Data.Switch_6}
                      />
                      <Text>Light 6</Text>
                    </Center>

                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_7: value,
                          })
                        }
                        value={Data.Switch_7}
                      />
                      <Text>Light 7</Text>
                    </Center>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_8: value,
                          })
                        }
                        value={Data.Switch_8}
                      />
                      <Text>Light 8</Text>
                    </Center>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_9: value,
                          })
                        }
                        value={Data.Switch_9}
                      />
                      <Text>Light 9</Text>
                    </Center>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_10: value,
                          })
                        }
                        value={Data.Switch_10}
                      />
                      <Text>Light 10</Text>
                    </Center>
                  </VStack>
                  <VStack space={2}>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_11: value,
                          })
                        }
                        value={Data.Switch_11}
                      />
                      <Text>Light 11</Text>
                    </Center>

                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_12: value,
                          })
                        }
                        value={Data.Switch_12}
                      />
                      <Text>Light 12</Text>
                    </Center>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_13: value,
                          })
                        }
                        value={Data.Switch_13}
                      />
                      <Text>Light 13</Text>
                    </Center>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_14: value,
                          })
                        }
                        value={Data.Switch_14}
                      />
                      <Text>Light 14</Text>
                    </Center>
                    <Center>
                      <Switch
                        size="lg"
                        colorScheme={"warning"}
                        onValueChange={(value) =>
                          setData({
                            ...Data,
                            Switch_15: value,
                          })
                        }
                        value={Data.Switch_15}
                      />
                      <Text>Light 15</Text>
                    </Center>
                  </VStack>
                </HStack>
                <HStack></HStack>
              </Actionsheet.Content>
            </Actionsheet>
          </Center>
        </Center>
        </Box>

        
      </Box>
    </NativeBaseProvider>
  );
}
