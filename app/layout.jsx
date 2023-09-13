import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";
import { UserContextProvider } from "@components/UserContext";
import { LessonBasketContextProvider } from "@components/LessonBasketContext";
import { LessonsContextProvider } from "@components/LessonsContext";

export const metadata = {
  title: "Learning Barter",
  description: "Exchange skills",
  icons: {
    icon: '/favicon.ico',
  },
};





const RootLayout = ({ children }) => {
  return (
    <html lang="pl">
      
      <body>
        <LessonsContextProvider>
          <LessonBasketContextProvider>
            <UserContextProvider>
              <Provider>
                <Nav />
                <div className="main">
                  <div className="gradient" />
                </div>
                <main className="app">{children}</main>
                <Footer />
              </Provider>
            </UserContextProvider>
          </LessonBasketContextProvider>
        </LessonsContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
