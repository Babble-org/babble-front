import Root from "./src/navigation/Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FocusContext, InsetsContext } from "./src/utils/context";
import * as SplashScreen from "expo-splash-screen";
import { Insets } from "./src/utils";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

async function enableMocking() {
  if (!__DEV__) {
    return;
  }
  await import("./msw.polyfills");
  const { server } = await import("./src/mocks/server");
  server.listen({ onUnhandledRequest: "bypass" });
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [insets, setInsets] = useState<Insets>({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    async function prepare() {
      setAppIsReady(true);
    }
    prepare();
    enableMocking().then(() => console.log("mocking server on"));
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <InsetsContext.Provider value={{ insets, setInsets }}>
      <FocusContext.Provider value={{ id: "", setId: () => {} }}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider onLayout={onLayoutRootView}>
            <Root></Root>
          </SafeAreaProvider>
        </QueryClientProvider>
      </FocusContext.Provider>
    </InsetsContext.Provider>
  );
}
