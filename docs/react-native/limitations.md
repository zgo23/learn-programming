# References

-   [React Native Limitations that Facebook doesn’t want you to know] (https://www.simform.com/react-native-limitations-app-development/)

# Content

-   Performance
-   Heavey computational tasks which must be processed in the native side requires Native developers.
-   Same component, different behavior
-   Require developer expertise on Three different platforms
-   No support for parallel threading or multiprocessing
    -   React Native does not support parallel threading or multiprocessing. React Native consists of single Javascript thread due to which you might observe some slow performance when you want to execute some processes in parallel. Your application might suffer due to this.vFor instance, if you require your app to perform live chat and video surfing in parallel then you can’t expect that with React Native.
