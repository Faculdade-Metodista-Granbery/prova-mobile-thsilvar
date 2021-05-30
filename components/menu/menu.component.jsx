import * as React from "react";
import { FAB, Portal, Provider } from "react-native-paper";

const MyComponent = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? "calendar-today" : "plus"}
          actions={[
            {
              icon: "star",
              label: "Preto",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "email",
              label: "Branco",
              onPress: () => console.log("Pressed email"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default MyComponent;
